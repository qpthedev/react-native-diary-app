import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigator';
import Realm from 'realm';
import {DBContext} from './context';
import AppLoading from 'expo-app-loading';
import {setTestDeviceIDAsync} from 'expo-ads-admob';

const FeelingSchema = {
  name: 'Feeling',
  properties: {
    _id: 'int',
    emotion: 'string',
    message: 'string',
  },
  primaryKey: '_id',
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);

  const startLoading = async () => {
    // Set global test device ID - AdMob Testing
    await setTestDeviceIDAsync('EMULATOR');

    const connection = await Realm.open({
      path: 'rnDiaryDB',
      schema: [FeelingSchema],
    });
    setRealm(connection);
  };

  const onFinish = () => setReady(true);

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }

  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
}

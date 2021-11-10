import {AdMobInterstitial, AdMobRewarded} from 'expo-ads-admob';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import colors from '../colors';
import {useDB} from '../context';

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
`;

const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Btn = styled.Pressable`
  width: 100%;
  margin-top: 30px;
  padding: 10px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.btnColor};
`;

const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Emotion = styled.Pressable`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); */
  /* elevation: 5; */
  border-color: ${props =>
    props.selected ? 'rgba(103, 128, 159, 0.5)' : 'white'};
  border-width: ${props => (props.selected ? '1px' : '0px')};
`;

const EmotionText = styled.Text`
  font-size: 20px;
`;

const emotions = ['😀', '😎', '😍', '😥', '😠', '🤑'];

const Write = ({navigation: {goBack}}) => {
  const realm = useDB();
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState('');

  const onChangeText = text => setFeelings(text);
  const onEmotionPress = face => setEmotion(face);

  const onSubmit = async () => {
    if (feelings === '' || selectedEmotion == null) {
      return Alert.alert('Please complete form.');
    }

    // Display a rewarded ad
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();

    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', () => {
      AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => {
        realm.write(() => {
          realm.create('Feeling', {
            _id: Date.now(),
            emotion: selectedEmotion,
            message: feelings,
          });
        });
        goBack();
      });
    });
  };

  return (
    <View>
      <Title>How do you feel today?</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            key={index}
            onPress={() => onEmotionPress(emotion)}>
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        placeholder="Write it here"
        value={feelings}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;

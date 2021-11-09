import React from 'react';
import styled from 'styled-components/native';
import colors from '../colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 36px;
  margin-bottom: 100px;
`;
const Btn = styled.Pressable`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); */
  /* elevation: 5; */
  background-color: ${colors.btnColor};
`;

const Record = styled.View`
  background-color: ${colors.cardColor};
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
`;

const Emotion = styled.Text`
  font-size: 20px;
  margin-right: 10px;
`;

const Message = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const Separator = styled.View`
  height: 10px;
`;

const Home = ({navigation: {navigate}}) => {
  return (
    <View>
      <Title>My Journal</Title>
      <Btn onPress={() => navigate('Write')}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </View>
  );
};

export default Home;
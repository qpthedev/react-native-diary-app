import React from 'react';
import styled from 'styled-components/native';
import colors from '../colors';

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

// const Emotion = styled.Pressable`
//   background-color: white;
//   padding: 10px;
//   border-radius: 10px;
//   /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); */
//   /* elevation: 5; */
//   border-color: ${props =>
//     props.selected ? 'rgba(103, 128, 159, 0.5)' : 'white'};
//   border-width: ${props => (props.selected ? '1px' : '0px')};
// `;

// const EmotionText = styled.Text`
//   font-size: 20px;
// `;

const emotions = ['😀', '😎', '😍', '😥', '😠', '🤑'];

const Write = () => {
  return (
    <View>
      <Title>Journal Entry</Title>
    </View>
  );
};

export default Write;

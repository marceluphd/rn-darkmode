import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ProfileContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const ProfileInfoContainer = styled.View`
  margin: 0px 50px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CountsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const CountContainer = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const PostImage = styled.Image`
  width: 100px;
  height: 150px;
  margin: 5px;
  border-radius: 10px;
`;

export const ProfileName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #313030;
`;

export const ProfileNick = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #b0b0b0;
`;

export const FollowButton = styled.TouchableOpacity`
  background: #ff7142;
  border-radius: 10px;
  padding: 0px 20px;
  justify-content: center;
`;

export const FollowButtonText = styled.Text`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
`;

export const CountText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #313030;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #b0b0b0;
`;

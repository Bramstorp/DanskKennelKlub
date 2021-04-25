import styled from "styled-components/native";
import { TextInput } from "react-native";
import { TouchableHighlight } from "react-native";

export const DetaiContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

export const EventCard = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
`;

export const DetailEventCard = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
`;

export const Loading = styled.View`
  margin: 15px;
  padding: 15px;
`;

export const EmptyDate = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 5px;
  border-radius: 15px;
`;


export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const CancelBtn = styled(TouchableHighlight)`
  position: absolute;
  top: 0;
  height: 95px;
  padding-horizontal: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 0;
`;
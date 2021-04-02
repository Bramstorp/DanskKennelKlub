import styled from "styled-components/native";
import { TouchableHighlight } from "react-native";
import { Text } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const ModalView = styled.View`
  background-color: #ffffff;
  height: 256px;
  overflow: hidden;
`;

export const DateTimeView = styled.View`
  margin-top: 20px;
`;

export const ShowModal = styled(TouchableHighlight)`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
`;

export const ModalBorder = styled(TouchableHighlight)`
  flex: 1;
  border-top-color: #e9e9e9;
  border-top-width: 1px;
`;

export const SafeView = styled.View`
  flex: 1;
`;

export const EventsTextStyle = styled(Text)`
  padding: ${(props) => props.theme.space[1]};
  padding: 20px;
  font-size: 16px;
  color: #000000;
  background-color: #e7e7e7;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CancelButton = styled(TouchableHighlight)`
  position: absolute;
  top: 0;
  height: 42px;
  padding-horizontal: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 0;
`;

export const DoneButton = styled(TouchableHighlight)`
  position: absolute;
  top: 0;
  height: 42px;
  padding-horizontal: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 0;
`;

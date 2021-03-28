import styled from "styled-components/native";
import { TouchableHighlight } from "react-native";
import { Text, } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const EventsTextStyle = styled(Text).attrs({
  color: colors.brand.danger,
})`
  padding: ${(props) => props.theme.space[1]};
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

import styled from "styled-components/native";
import { TouchableHighlight } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

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

export const EventBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EventContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const EventButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const EventInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
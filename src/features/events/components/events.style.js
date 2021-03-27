import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const EventsTextInput = styled(TextInput).attrs({
  color: colors.brand.danger,
})`
  padding: ${(props) => props.theme.space[1]};
`;
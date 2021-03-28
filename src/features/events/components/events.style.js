import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const EventsTextStyle = styled(Text).attrs({
  color: colors.brand.danger,
})`
  padding: ${(props) => props.theme.space[1]};
`;
import styled from "styled-components/native";
import { Button, TextInput, List } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
export const AvatarContainer = styled.View`
  align-items: center;
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.danger,
  })`
    padding: ${(props) => props.theme.space[2]};
    width: 200px;
    align-items: center; 
`;


import styled from "styled-components/native";
import { Button, List, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
export const AvatarContainer = styled.View`
  align-items: center;
`;

export const EditButton = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    padding: ${(props) => props.theme.space[2]};
    width: 200px;
    align-items: center; 
`;

export const AccountContainer = styled.View`
  padding-top: ${(props) => props.theme.space[5]};
  align-items: center;
`;

export const AccountInput = styled(TextInput)`
  width: 300px;
`;

export const DoneButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 200px;
`;
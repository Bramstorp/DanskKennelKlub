import styled from "styled-components/native";
import { Button, List } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
export const AvatarContainer = styled.View`
  align-items: center;
`;

export const EditButton = styled(Button).attrs({
    color: colors.brand.danger,
  })`
    padding: ${(props) => props.theme.space[2]};
    width: 200px;
    align-items: center; 
`;


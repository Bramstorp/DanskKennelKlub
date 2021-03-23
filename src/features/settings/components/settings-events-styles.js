import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Card } from "react-native-paper";

export const EventList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const EventCardCover = styled.View`
  padding: 20px;
`;

export const Test = styled(Card).attrs({
  padding: 30,
})``;

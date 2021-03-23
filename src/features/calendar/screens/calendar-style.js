import styled from "styled-components/native";

export const Test = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EventCard = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  margin: 15px;
  border-radius: 15px;
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

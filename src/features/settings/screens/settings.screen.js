import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Image } from "react-native";

import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SettingsEventsCards } from "../components/settings-events-cards";

import * as firebase from "firebase";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [events, setEvents]  = useState([])
  
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .once("value")
      .then((snapshot) => {
        const values = []
        snapshot.forEach((child) => {
          values.push(child.val());
        });
        setEvents(values);
      });
  }, []);

  return (
    <SafeAreaView>
      <AvatarContainer>
        <Image source={require("../../../../assets/dkk-logo.png")} />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <SettingsEventsCards key={events.key} events={events} navigation={navigation}/>
      <List.Section>
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

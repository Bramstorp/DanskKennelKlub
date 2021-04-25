import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { SafeAreaView, Image } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SettingsEventsCards } from "../components/settings-events-cards";
import { SettingsItem, AvatarContainer, EditButton } from "../components/settings-screen.styles"
import { colors } from "../../../infrastructure/theme/colors";

import * as firebase from "firebase";


export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")
        .then((snapshot) => {
          const values = [];
          snapshot.forEach((child) => {
            values.push(child.val());
          });
          setEvents(values);
          setLoading(false);
        });
    }, [events.date])
  )

  return (
    <SafeAreaView>
      <AvatarContainer>
        <Image source={require("../../../../assets/dkk-logo.png")} />
        <Spacer position="top" size="large">
          <Text variant="label">{user.displayName}</Text>
        </Spacer>
        <Spacer size="large">
          <EditButton
            mode="contained"
            onPress={() => navigation.navigate("SettingsProfile")}
          >
            Redigere Profil
          </EditButton>
        </Spacer>
      </AvatarContainer>
      <SettingsEventsCards
        key={events.date}
        events={events}
        navigation={navigation}
        loading={loading}
      />
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

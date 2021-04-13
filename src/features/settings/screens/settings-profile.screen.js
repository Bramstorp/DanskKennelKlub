import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountInput,
  AccountContainer,
  DoneButton,
} from "../components/settings-screen.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [fullName, setFullName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);

  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: "red" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Redigere Profile" subtitle="Dansk Kennel Klub" />
      </Appbar.Header>
      <AccountContainer>
        <AccountInput
          label="Full Name"
          value={fullName}
          onChangeText={(u) => setFullName(u)}
          autoCapitalize="none"
        />
        <Spacer size="large">
          <AccountInput
            label="Email"
            value={email}
            onChangeText={(u) => setEmail(u)}
            autoCapitalize="none"
          />
        </Spacer>
        <Spacer size="large">
          <DoneButton mode="contained" onPress={() => console.log("Press")}>
            Færdig
          </DoneButton>
        </Spacer>
      </AccountContainer>
    </SafeAreaView>
  );
};

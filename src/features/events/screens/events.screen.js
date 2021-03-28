import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context.js";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../../account/components/account.styles";

import { CustomDatePicker } from "../components/customdatepicker.components";

export const EventsScreen = ({ navigation }) => {
  const { setEvent } = useContext(CalendarContext);
  const { onRegister, isLoading } = useContext(AuthenticationContext);

  const [eventName, setEventName] = useState("");

  return (
    <AccountBackground>
      <View>
        <Image source={require("../../../../assets/dkk-logo.png")} />
      </View>
      <Title>Opret Event</Title>
      <AccountContainer>
        <AuthInput
          label="Event Navn"
          value={eventName}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEventName(u)}
        />
        <Spacer size="large">
          <CustomDatePicker
            textStyle={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderColor: "gray",
              borderWidth: 1,
            }}
          />
        </Spacer>
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => setEvent()}
            >
              Opret Event
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

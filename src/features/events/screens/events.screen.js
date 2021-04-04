import React, { useContext, useState, useEffect } from "react";
import { Image, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../../account/components/account.styles";

import { CustomDatePicker } from "../components/customdatepicker.components";
import { CustomTimePicker } from "../components/customtimepicker.components";

import moment from "moment";

export const EventsScreen = ({ navigation }) => {
  const { setEvent, isEventLoading } = useContext(EventsContext);

  const [eventName, setEventName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(moment(Date.now()));
  const [time, setTime] = useState(new Date(1598051730000));

  const ClearEvent = () => {
    navigation.navigate("Calendar");
  };

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
          autoCapitalize="none"
          onChangeText={(u) => setEventName(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Træner Navn"
            value={name}
            autoCapitalize="none"
            onChangeText={(u) => setName(u)}
          />
        </Spacer>
        <Spacer size="large">
          <CustomDatePicker
            onChange={(value) => setDate(moment(value))}
            defaultDate={moment(Date.now())}
          />
        </Spacer>
        <Spacer size="large">
          <CustomTimePicker onChange={(value) => setTime(value)} />
        </Spacer>
        <Spacer size="large">
          {!isEventLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => {
                setEvent(date, name, eventName, time);
                ClearEvent(date, name, eventName, time);
              }}
            >
              Opret Event
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} />
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

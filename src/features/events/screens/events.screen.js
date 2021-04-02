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

import * as firebase from "firebase";

export const EventsScreen = ({ navigation }) => {
  const { setEvent, isEventLoading } = useContext(EventsContext);

  const [eventName, setEventName] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(moment(Date.now()));
  const [time, setTime] = useState(moment(Date.now()));
  const [events, setEvents] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("calendar")
      .once("value")
      .then((snapshot) => {
        let values = [];
        snapshot.forEach((child) => {
          values.push(child.val());
        });
        setEvents(values);
      });
  }, []);

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
          <CustomTimePicker
            onChange={(value) => setTime(moment(value))}
            defaultDate={new Date(time.format("DD MMMM YYYY hh:mm UTC"))}
          />
        </Spacer>
        <Spacer size="large">
          {!isEventLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => setEvent(date, name, eventName, events)}
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

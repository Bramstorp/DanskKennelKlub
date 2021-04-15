import React, { useContext, useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context"

import {
  EventBackground,
  EventContainer,
  EventButton,
  EventInput,
  Title,
} from "../components/events.style";

import { CustomDatePicker } from "../components/customdatepicker.components";
import { CustomeStartTimePicker } from "../components/customstarttimepicker.components";
import { CustomeEndTimePicker } from "../components/customendtimepicker.components";

import moment from "moment";

export const EventsScreen = ({ navigation }) => {
  const { setEvent } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState(moment(Date.now()));
  const [startTime, setStartTime] = useState(new Date(1598051730000));
  const [endTime, setEndTime] = useState(new Date(1598051730000));

  return (
    <EventBackground>
      <View>
        <Image source={require("../../../../assets/dkk-logo.png")} />
      </View>
      <Title>Opret Event</Title>
      <EventContainer>
        <EventInput
          label="Event Navn"
          value={eventName}
          autoCapitalize="none"
          onChangeText={(u) => setEventName(u)}
        />
        <Spacer size="large">
          <CustomDatePicker
            onChange={(value) => setDate(moment(value))}
            defaultDate={moment(Date.now())}
          />
        </Spacer>
        <Spacer size="large">
          <CustomeStartTimePicker onChange={(value) => setStartTime(value)} />
        </Spacer>
        <Spacer size="large">
          <CustomeEndTimePicker onChange={(value) => setEndTime(value)} />
        </Spacer>
        <Spacer size="large">
          <EventButton
            icon="email"
            mode="contained"
            onPress={() => {
              setEvent(
                date.format(moment.HTML5_FMT.DATE),
                user.email,
                eventName,
                `${startTime.getUTCHours()}:${startTime.getMinutes()}`,
                `${endTime.getUTCHours()}:${endTime.getMinutes()}`
              );
              navigation.navigate("Homescreen");
            }}
          >
            Opret Event
          </EventButton>
        </Spacer>
      </EventContainer>
      <Spacer size="large">
        <EventButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </EventButton>
      </Spacer>
    </EventBackground>
  );
};

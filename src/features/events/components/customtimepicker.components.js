import React, { useState } from "react";
import { View, Modal, TouchableHighlight, Text } from "react-native";

import {
  ModalView,
  SafeView,
  EventsTextStyle,
  CancelButton,
  DoneButton,
  ModalBorder,
  ShowModal,
  DateTimeView,
} from "./customdatepicker.style";

import DateTimePicker from "@react-native-community/datetimepicker";


export const CustomTimePicker = (props) => {
  const [time, setTime] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  console.log(time);

  const onChange = (e, selectedDate) => {
    console.log(selectedDate);
    setTime(selectedDate);
  };

  const onDonePress = () => {
    setShow(false);
  };

  const onCancelPress = () => {
    setTime(new Date(1598051730000));
    setShow(false);
  };

  return (
    <TouchableHighlight activeOpacity={1} onPress={() => setShow(true)}>
      <View>
        <EventsTextStyle>{time.toUTCString()}</EventsTextStyle>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={["portrait"]}
          onRequestClose={() => setShow(false)}
        >
          <SafeView>
            <ShowModal
              activeOpacity={1}
              visible={show}
              onPress={() => setShow(false)}
            >
              <ModalBorder underlayColor={"#FFFFFF"}>
                <ModalView>
                  <DateTimeView>
                    <DateTimePicker
                      timeZoneOffsetInMinutes={0}
                      value={time}
                      mode="time"
                      onChange={onChange}
                      display={"spinner"}
                    />
                  </DateTimeView>
                  <CancelButton
                    underlayColor={"transparent"}
                    onPress={() => onCancelPress()}
                  >
                    <Text>Cancel</Text>
                  </CancelButton>
                  <DoneButton
                    underlayColor={"transparent"}
                    onPress={() => onDonePress()}
                  >
                    <Text>Done</Text>
                  </DoneButton>
                </ModalView>
              </ModalBorder>
            </ShowModal>
          </SafeView>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

CustomTimePicker.defaultProps = {
  textStyle: {},
  defaultDate: {},
  onDateChange: () => {},
};

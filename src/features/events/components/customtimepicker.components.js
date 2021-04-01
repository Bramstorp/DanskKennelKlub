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

import moment from "moment-timezone";
import "moment/locale/da";

export const CustomTimePicker = (props) => {
  const { defaultDate } = props;
  const [time, setTime] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setTime(selectedDate);
    props.onChange(selectedDate);
  };

  const onDonePress = () => {
    props.onDateChange(defaultDate);
    setShow(false);
  };

  const onCancelPress = () => {
    setTime(moment(defaultDate));
    setShow(false);
  };

  return (
    <TouchableHighlight activeOpacity={1} onPress={() => setShow(true)}>
      <View>
        <EventsTextStyle>{moment(time).format("H:mm:ss")}</EventsTextStyle>
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
                      value={new Date(time)}
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

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

  console.log(new Date(time));
  console.log(new Date(time.format("DD MMMM YYYY hh:mm UTC")));

  const onChange = (e, selectedDate) => {
    setTime(moment(selectedDate));
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
        <EventsTextStyle>{time.format("hh:mm")}</EventsTextStyle>
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
                      value={new Date(time.format("DD MMMM YYYY hh:mm UTC"))}
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

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

import moment from "moment";

export const CustomDatePicker = (props) => {
  const { defaultDate } = props;
  const [date, setDate] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
    props.onChange(selectedDate);
  };

  const onDonePress = () => {
    props.onDateChange(defaultDate);
    setShow(false);
  };

  const onCancelPress = () => {
    setDate(moment(defaultDate));
    setShow(false);
  };

  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View>
        <EventsTextStyle>{date.format("MMMM DD YYYY")}</EventsTextStyle>
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
              <ModalBorder
                underlayColor={"#FFFFFF"}
                onPress={() => console.log("datepricker clicked")}
              >
                <ModalView>
                  <DateTimeView>
                    <DateTimePicker
                      timeZoneOffsetInMinutes={0}
                      value={new Date(date)}
                      mode="date"
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

CustomDatePicker.defaultProps = {
  textStyle: {},
  defaultDate: moment(),
  onDateChange: () => {},
};

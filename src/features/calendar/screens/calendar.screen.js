import React, { useContext, useState, useCallback } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { Calendar } from "../components/calendar";

export const CalendarScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Calendar navigation={navigation} />
    </SafeArea>
  );
};

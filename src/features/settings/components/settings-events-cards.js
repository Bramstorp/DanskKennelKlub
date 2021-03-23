import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

import { Test, EventCardCover } from "./settings-events-styles";

export const SettingsEventsCards = () => {
  return (
    <TouchableOpacity>
      <EventCardCover>
        <Test>
          <Text>test</Text>
        </Test>
      </EventCardCover>
    </TouchableOpacity>
  );
};

import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { EventCard, EmptyDate } from "../components/calendar-style";
import { Agenda } from "react-native-calendars";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { EventsContext } from "../../../services/events/events.context";
import { Text } from "../../../components/typography/text.component";

export const CalendarScreen = ({ navigation }) => {
  const { isLoading, date } = useContext(CalendarContext);
  const { events } = useContext(EventsContext);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: item,
          })
        }
      >
        <EventCard>
          <Text>
            {item.starttime} - {item.endtime}
          </Text>
          <Spacer size="medium">
            <Text>{item.name}</Text>
          </Spacer>
          <Spacer size="medium">
            <Text>Person Navn</Text>
          </Spacer>
        </EventCard>
      </TouchableOpacity>
    );
  };

  const emptyDate = () => {
    return (
      <EmptyDate>
        <Text>This is empty date!</Text>
      </EmptyDate>
    );
  };

  const emptyData = () => {
    return (
      <EmptyDate>
        <Text>This is empty date!</Text>
      </EmptyDate>
    );
  };

  return (
    <SafeArea>
      <Agenda
        items={date}
        renderItem={renderItem}
        pastScrollRange={5}
        futureScrollRange={5}
        renderEmptyDate={emptyDate}
        renderEmptyData={emptyData}
      />
    </SafeArea>
  );
};

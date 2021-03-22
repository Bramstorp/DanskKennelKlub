import React from 'react';
import { Text } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Test } from "./calendar-style"

export const CalendarDetailScreen = ({ route }) => {
    const { calendar } = route.params;

    return (
        <Test>
            <Text>Detail test screen</Text>
            <Text>Name: {calendar.name}</Text>
            <Text>itemId: {calendar.id}</Text>
        </Test>
    );
};

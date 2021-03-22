import React from 'react';
import { Text } from 'react-native';

import { SafeArea } from "../../../components/utility/safe-area.component";

export const CalendarDetailScreen = ({ route }) => {
    const { calendar } = route.params;

    return (
        <SafeArea>
            <Text>Detail test screen</Text>
            <Text>Name: {JSON.stringify(calendar.name)}</Text>
            <Text>itemId: {JSON.stringify(calendar.id)}</Text>
        </SafeArea>
    );
};


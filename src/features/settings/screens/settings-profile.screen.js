import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Appbar } from 'react-native-paper';

export const SettingsProfileScreen = ({ navigation }) => {

    return (
      <SafeAreaView>
        <Appbar.Header style={{backgroundColor: "red"}}>
          <Appbar.BackAction onPress={() => navigation.goBack()}  />
          <Appbar.Content title="Redigere Profile" subtitle="Dansk Kennel Klub" />
          <Appbar.Action icon="check"  />
          <Appbar.Action icon="dots-vertical"  />
        </Appbar.Header>
        <Text>Test</Text>
      </SafeAreaView>
    );
}
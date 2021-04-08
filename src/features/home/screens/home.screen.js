import React from "react";
import { SafeView } from "../components/home.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Image, Text } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeView>
      <Image source={require("../../../../assets/dkk-logo.png")} />
      <Spacer size="large">
        <Text>Velkommen</Text>
      </Spacer>
    </SafeView>
  );
};

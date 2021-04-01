import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA6fdQrfoPFE7cVhF5F-Bm9Tg8opGFcdbU",
  authDomain: "dansk-kennel-klub-prod.firebaseapp.com",
  databaseURL: "https://dansk-kennel-klub-prod-default-rtdb.firebaseio.com/",
  projectId: "dansk-kennel-klub-prod",
  storageBucket: "dansk-kennel-klub-prod.appspot.com",
  messagingSenderId: "1098750082639",
  appId: "1:1098750082639:web:3fdfc0493814e2c519f43a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

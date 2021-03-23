import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSTaSuyPoT6sOrVeX_usYxhbhWt4qEKHc",
  authDomain: "meals-to-go-test.firebaseapp.com",
  projectId: "meals-to-go-test",
  storageBucket: "meals-to-go-test.appspot.com",
  messagingSenderId: "678774396998",
  appId: "1:678774396998:web:3fced6763f5473aa435247",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

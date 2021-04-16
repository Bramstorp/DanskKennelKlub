import React, { useContext, useEffect, useState } from "react";
import { Button, Appbar } from "react-native-paper";
import { Modal, StyleSheet, Text, View } from "react-native";
import {
  DetailEventCard,
  DetaiContainer,
} from "../components/settings-events-styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsDetailScreen = ({ route, navigation }) => {
  const { events } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const { removeEventFromUser } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Appbar.Header style={{ backgroundColor: colors.brand.primary }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={events.name} subtitle="Dansk Kennel Klub" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <DetailEventCard>
        <Text>
          {events.starttime} - {events.endtime}
        </Text>
        <Spacer size="medium">
          <Text>{events.name}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>{events.eventName}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>{events.eventName}</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color={colors.brand.primary}
          onPress={() => setModalVisible(true)}
        >
          Fjern Event
        </Button>
        <Spacer size="medium">
          <Button
            mode="contained"
            color={colors.brand.primary}
            onPress={() => setModalVisible(!modalVisible)}
          >
            Luk
          </Button>
        </Spacer>
      </DetaiContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Er du sikker på du vil fjerne denne event?
            </Text>
            <Button
              mode="contained"
              color={colors.brand.primary}
              onPress={() => {
                removeEventFromUser(user, events);
                setModalVisible(!modalVisible);
              }}
            >
              Fjern Event
            </Button>
            <Spacer size="medium">
              <Button
                mode="contained"
                color={colors.brand.primary}
                onPress={() => setModalVisible(!modalVisible)}
              >
                Luk
              </Button>
            </Spacer>
          </View>
        </View>
      </Modal>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

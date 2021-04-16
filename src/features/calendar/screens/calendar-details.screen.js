import React, { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button, Appbar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const CalendarDetailScreen = ({ route, navigation }) => {
  const { calendar } = route.params;
  const { removeEvent, joinEvents } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <SafeArea>
      <Appbar.Header style={{ backgroundColor: colors.brand.primary }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={calendar.name} subtitle="Dansk Kennel Klub" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <DetailEventCard>
        <Text>
          {calendar.starttime} - {calendar.endtime}
        </Text>
        <Spacer size="medium">
          <Text>{calendar.name}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>{calendar.eventName}</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color={colors.brand.primary}
          onPress={() => joinEvents(user, calendar)}
        >
          Deltag Event
        </Button>
        <Spacer size="medium">
          <Button
            mode="contained"
            color={colors.brand.primary}
            onPress={() => setModalVisible(true)}
          >
            Fjern Event
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
                removeEvent(calendar);
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
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
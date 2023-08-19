import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import { Pressable } from "react-native";

const TopUpSuccess = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      }}
    >
      {/* <TouchableOpacity
        // onPress={() => navigation.navigate("OrderAcceptedFinale")}
        onPress={() => setModalVisible(true)}
        style={{ height: 40, backgroundColor: "#053582", borderRadius: 10 }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
            paddingVertical: 7,
            fontSize: 17,
          }}
        >
          Push Order
        </Text>
      </TouchableOpacity> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
               onPress={() => navigation.navigate("OrderAcceptedFinale")}
              style={{
                height: 40,
                backgroundColor: "#053582",
                borderRadius: 20,
                marginBottom : 10
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 7,
                  fontSize: 17,
                }}
              >
                Push Order
              </Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TopUpSuccess;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#053582",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

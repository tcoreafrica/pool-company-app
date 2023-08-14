import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import { Pressable } from "react-native";

const TopUpRequest = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ alignSelf: "center", marginTop: 50 }}>
        <Image source={require("../../../assets/PushOrder.png")} />
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 25,
            paddingVertical: 20,
          }}
        >
          Push order to the Pool?
        </Text>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ color: "#053582", fontWeight: "bold" }}>
          Send your order to the pool for onward delivery to customer. Order
          will be taken off your order list.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text>Package type</Text>
        <Text>Delivery type:</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <PhaseLoso />
        <Text style={{ color: "#053582", fontWeight: "bold" }}>
          Express (1hr)
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
          N500 will be deducted from your wallet balance.
        </Text>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
          Customer will pay you N3,000 cash on delivery
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TopUpWallet")}
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
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ height: 40, backgroundColor: "white", borderRadius: 10 }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              paddingVertical: 7,
              fontSize: 17,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
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
            <View>
              <Text
                style={{ color: "#053582", fontWeight: "bold", fontSize: 20 }}
              >
                Not enough wallet balance, top up wallet now
              </Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("TopUpWallet")}
                style={{
                  height: 40,
                  backgroundColor: "#053582",
                  borderRadius: 10,
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
                  Top up
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 15 }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  height: 40,
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 7,
                    fontSize: 17,
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TopUpRequest;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginTop: 22,
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

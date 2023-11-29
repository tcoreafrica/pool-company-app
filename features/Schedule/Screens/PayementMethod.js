import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { sendPoolOrderRequest } from "../../../serveur/pools/pool";
import { Ionicons } from "@expo/vector-icons";

const PayementMethod = ({ navigation, route }) => {
  const params = route.params;
  const [loading, setLoading] = useState(false);

  const handleCreatePoll = () => {
    setLoading(true);
    sendPoolOrderRequest(params).then((res) => {
      setLoading(false);

      navigation.navigate("FinaleScreen", res);
    });
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginVertical: 20,
          color: "#979797",
        }}
      >
        Select payment method
      </Text>
      <View style={{ height: 410, backgroundColor: "white", borderRadius: 30 }}>
        <TouchableOpacity
          style={{
            height: 90,
            backgroundColor: "#EDE9E9",
            borderRadius: 30,
            flexDirection: "row",
            paddingLeft: 50,
            paddingTop: 20,
            marginTop: 3,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "yellow",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../../assets/yellow.png")}
              style={{ alignSelf: "center", marginTop: 10 }}
            />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text>Saved Cards</Text>
            <Text>________________</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ios-add-circle-outline"
            size={22}
            color={"rgba(0,0,0,0.3)"}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "rgba(0,0,0,0.3)",
              marginLeft: 5,
            }}
          >
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 90,
            backgroundColor: "#EDE9E9",
            borderRadius: 30,
            flexDirection: "row",
            paddingLeft: 50,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#EB4796",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../../assets/pink.png")}
              style={{ alignSelf: "center", marginTop: 10 }}
            />
          </View>
          <View
            style={{ paddingLeft: 10, height: 40, justifyContent: "center" }}
          >
            <Text>Pay on pickup</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 90,
            backgroundColor: "#EDE9E9",
            borderRadius: 30,
            flexDirection: "row",
            paddingLeft: 50,
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#053582",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../../assets/house.png")}
              style={{ alignSelf: "center", marginTop: 10 }}
            />
          </View>
          <View
            style={{ paddingLeft: 10, height: 40, justifyContent: "center" }}
          >
            <Text>Pay on deopoff</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 90,
            backgroundColor: "#EDE9E9",
            borderRadius: 30,
            flexDirection: "row",
            paddingLeft: 50,
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#053582",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/house.png")}
              style={{ alignSelf: "center", marginTop: 10 }}
            />
          </View>
          <View
            style={{ paddingLeft: 10, height: 40, justifyContent: "center" }}
          >
            <Text>Pay from wallet</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: 65, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#053582", fontWeight: "bold", fontSize: 18 }}>
            Pay:
          </Text>
          <Text
            style={{
              color: "#053582",
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            N2,000
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={handleCreatePoll}
          style={{
            height: 40,
            backgroundColor: "#053582",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                paddingVertical: 7,
                fontSize: 17,
              }}
            >
              Complete Request
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayementMethod;

const styles = StyleSheet.create({});

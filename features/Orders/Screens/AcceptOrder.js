import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AcceptOrderRequest } from "../../../serveur/pools/pool";
import { finalizeOrderRequest } from "../../../serveur/pools/pool";
const AcceptOrder = ({ navigation, route }) => {
  const { _id, ...data } = route.params.item;
  const [loading, setLoading] = useState(false);
  const [poolId, setPllId] = useState({ poolId: _id });

  const orderInfo = {
    poolId: _id,
    insurance: "Standard",
    deliveryItemPrice: "300",
    paymentMethod: "643d7515ae69cbab7f41ce11",
  };

  const handleSubmit = () => {
    setLoading(true);
    finalizeOrderRequest(orderInfo).then((res) => {
      if (res == 200 || res == 201) {
        AcceptOrderRequest({ poolId: _id }).then((res) => {
          if (res == 200 || res == 201) {
            setLoading(false);
            navigation.navigate("AcceptOrderTwo");
          }else{
            Alert.alert(res)
          }
        });
      }
    });
    // navigation.navigate("AcceptOrderTwo")
    // console.log(_id);

    // AcceptOrderRequest(poolId).then((res) => {
    //   console.log(res);

    // });
  };
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
        <Image source={require("../../../assets/questionmark.png")} />
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
          Accept order into your Company Pool?
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
        <Text style={{ color: "#053582", fontWeight: "bold", fontSize: 16 }}>
          N500 will be deducted from your wallet balance.
        </Text>
        <Text style={{ color: "#053582", fontWeight: "bold", fontSize: 16 }}>
          Customer will pay you {data.amount} cash on delivery
        </Text>
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          style={{
            height: 40,
            backgroundColor: "#053582",
            borderRadius: 10,
            justifyContent: "center",
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
              Accept
            </Text>
          )}
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
    </View>
  );
};

export default AcceptOrder;

const styles = StyleSheet.create({});

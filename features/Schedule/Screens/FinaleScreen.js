import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PhaseLoso from "../../../constants/PhaseLogo";
import {
  AcceptOrderRequest,
  finalizeOrderRequest,
} from "../../../serveur/pools/pool";

const FinaleScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const poolId = route?.params?.data?._id;

  const orderInfo = {
    poolId: poolId,
    insurance: "Standard",
    deliveryItemPrice: "300",
    paymentMethod: "643d7515ae69cbab7f41ce11",
  };

  const handleSubmit = () => {
    setLoading(true);
    finalizeOrderRequest(orderInfo).then((res) => {
      if (res == 200 || res == 201) {
        AcceptOrderRequest({ poolId: poolId }).then((res) => {
          if (res == 200 || res == 201) {
            setLoading(false);
            navigation.navigate("Riders", poolId);
          } else {
            Alert.alert(res);
          }
        });
      }
    });
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
        <Image source={require("../../../assets/acceptedorder.png")} />
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
          Order Created Successfully!
        </Text>
      </View>

      <View style={{ marginTop: 120 }}>
        <TouchableOpacity
          onPress={handleSubmit}
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
              Assign to rider
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
            Go to company pool
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinaleScreen;

const styles = StyleSheet.create({});

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import PhaseLoso from "../../../constants/PhaseLogo";
import { AntDesign } from "@expo/vector-icons";
import TimeLogo from "../../../constants/TimeLogo";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";


const OrderCell = ({ item }) => {

  const [expanded, setExpanded] = useState(false);
  const CollapsableContainer = ({
    children,
    expanded,
  }) => {
    const [height, setHeight] = useState(0);
    const animatedHeight = useSharedValue(0);
  
    const onLayout = (event) => {
      const onLayoutHeight = event.nativeEvent.layout.height;
  
      if (onLayoutHeight > 0 && height !== onLayoutHeight) {
        setHeight(onLayoutHeight);
      }
    };
  
    const collapsableStyle = useAnimatedStyle(() => {
      animatedHeight.value = expanded ? withTiming(height) : withTiming(0);
  
      return {
        height: animatedHeight.value,
      };
    }, [expanded]);
  
    return (
      <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
        <View style={{ position: "absolute" }} onLayout={onLayout}>
          {children}
        </View>
      </Animated.View>
    );
  };

  const onItemPress = () => {
    setExpanded(!expanded);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onItemPress}
        style={{
          height: 80,
          flex: 1,
          borderRadius: 2,
          marginHorizontal: 10,
          paddingVertical: 10,
          paddingLeft: 40,
          elevation: 0.5,
        }}

      >
        <View style={{ position: "absolute", top: 17, left: 15 }}>
          <PhaseLoso />
        </View>


        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <Text>{item.pickUpLocation[0]}</Text>
            <AntDesign name="arrowright" size={24} color="black" />
            <Text style={{ fontSize: 12 }}>{item.destinationLocation[0]}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.quantity}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", paddingRight: 30 }}>
              <TimeLogo style={{ marginVertical: 3 }} />
              <Text style={{ paddingLeft: 5 }}>{item.date.substr(0, 10)}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TimeLogo style={{ marginVertical: 3 }} />
              <Text style={{ paddingLeft: 5, color: "red" }}>Express </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("AcceptOrder", { item })}
              style={{
                height: 30,
                borderRadius: 5,
                backgroundColor: "#053582",
                // marginHorizontal: 100,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <CollapsableContainer expanded={expanded}>
        <Text style={[styles.details, styles.text]}>{item.details}</Text>
      </CollapsableContainer>
    </View>

  );
};

export default OrderCell;
const styles = StyleSheet.create({
  wrap: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
  },
  container: { flexDirection: "row" },
  image: { width: 50, height: 50, margin: 10, borderRadius: 5 },
  textContainer: { justifyContent: "space-around" },
  details: { margin: 10 },
  text: { opacity: 0.7 },
});

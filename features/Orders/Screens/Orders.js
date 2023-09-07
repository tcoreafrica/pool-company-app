import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import React from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import Icon from "react-native-vector-icons/FontAwesome";
import OrderFlatlist from "../../Track/Components/OrderFlatlist";
import Orderlist from "../Componenets/Orderlist";
import SendToPoollist from "../Componenets/SendToPoollist";

const Orders = () => {
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "white"  }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" , paddingHorizontal : 15 , paddingVertical : 20}}>
        {/* <Text style={{}}>You can pick orders from here to your company</Text>
        <Text>18 June, 20</Text> */}
      </View>
      <View style={{ flexDirection: "row",paddingHorizontal : 15, justifyContent: "space-between" , marginTop : 10  }}>
        <Text>  </Text>
        {/* <Text style={{}}>20 in queue</Text> */}
        <TouchableOpacity>
          <Icon name="filter" size={18} style={{}} />
        </TouchableOpacity>
      </View>
      <View>
        <Orderlist />
      </View>
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "white"  }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" , paddingHorizontal : 15 , paddingVertical : 20}}>
        {/* <Text style={{}}>You can pick orders from here to your company</Text>
        <Text>18 June, 20</Text> */}
      </View>
      <View style={{ flexDirection: "row",paddingHorizontal : 15, justifyContent: "space-between" , marginTop : 10  }}>
        <Text>Ikeja</Text>
        {/* <Text style={{}}>20 in queue</Text> */}
        <TouchableOpacity>
          <Icon name="filter" size={18} style={{}} />
        </TouchableOpacity>
      </View>
      <View>
        <SendToPoollist />
      </View>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Exchange Pool" },
    { key: "second", title: "My Company Pool" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});

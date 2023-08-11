import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerLogo from "../../../constants/DrawerLogo";
import AvatarLogo from "../../../constants/Avatar";
import { TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AvatarLogo />
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangeLoginScreen")}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 16, paddingVertical: 10 }}
          >
            Change Login
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchcore Deliveries
        </Text>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchcore Deliveries
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>08123232323</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>08123232323</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text>Company name</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Touchdel@gmail.com
        </Text>
      </View>
      <TouchableOpacity
        style={{ height: 50, backgroundColor: "green" , marginVertical : 20}}
      >
        <Text style={{alignSelf :'center' , paddingVertical : 10 , color : 'white' , fontSize : 16 , fontWeight : 'bold'}}>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 50, backgroundColor: "red" , marginVertical : 20}}
      >
        <Text style={{alignSelf :'center' , paddingVertical : 10 , color : 'white' , fontSize : 16 , fontWeight : 'bold'}}>View registration</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "absolute", bottom: 0 }}>
        <Text style={{ fontWeight: "bold", fontSize: 17, padding: 10 }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

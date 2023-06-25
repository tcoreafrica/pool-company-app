import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const CreatePassword = ({navigation}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 100,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Create New Password
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <Text>Choose a new password</Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>New Password</Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ color: "red", fontSize: 14, fontWeight: "500" }}>
          Minimum 6 characters required
        </Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Retype Password
        </Text>
      </View>
      <View style={{ width: "100%", paddingTop: 10 }}>
        <TextInput
          style={styles.textInput2}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={{ color: "green", fontSize: 14, fontWeight: "500" }}>
          Matched
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PasswordChanges")}
        style={{
          padding: 12,
          position : 'absolute',
          bottom : 10,
          width : "100%",
          backgroundColor: "#053582",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Save Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInput2: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

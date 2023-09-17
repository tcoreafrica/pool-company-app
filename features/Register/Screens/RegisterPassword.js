import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { registerUser } from "../../../serveur/login/login";

const RegisterPassword = ({ navigation, route }) => {
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMassge] = useState("");
  const { EmailCompany, firstNameUser, lastNameUser, location, nameCompany } =
    route.params;

  const [globalInfo, setGlobalInfo] = useState({
    email: EmailCompany,
    username: nameCompany,
    name: nameCompany,
    address: location,
    contactPersonFirstName: firstNameUser,
    contactPersonLastName: lastNameUser,
    password: "",
    role: "DeliveryCompany",
  });

  useEffect(() => {
    setGlobalInfo((prevState) => ({
      ...prevState,
      password: repeatPassword,
    }));
  }, [password, repeatPassword]);

  const handleSubmit = () => {
    setLoading(true);
    registerUser(globalInfo).then((res) => {
      setLoading(false);
      res == "200"
        ? navigation.navigate("VerifyEmail", { globalInfo })
        : setMassge(res);
    });
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 60,
      }}
    >
      <View>
        <Text style={{ fontSize: 14, fontWeight: "bold", paddingBottom: 10 }}>
          Choose a password for your account{" "}
        </Text>
        <Text style={{ marginBottom: 20 }}>Let us secure your account</Text>
      </View>
      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Password"
      />
      <TextInput
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
        secureTextEntry
        onChangeText={setRepeatPassword}
        placeholder="confirm Password"
         
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text>
          I agree to the terms of services & privacy policy of Paakej.
        </Text>
      </View>
      <Text style={{ marginTop: 50, color: "red", fontWeight: "700" }}>
        {message}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 10,
          width: "100%",
          left: 15,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#EBEBEB",

            borderRadius: 30,
            width: 100,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={()=>console.log(globalInfo)}
          onPress={handleSubmit}
          style={{
            backgroundColor: "#053582",
            justifyContent: "center",
            borderRadius: 30,
            width: 100,
          }}
          disabled={password != repeatPassword || password == "" || !isChecked}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ padding: 10, alignSelf: "center", color: "white" }}>
              Continue
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPassword;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
  },
});

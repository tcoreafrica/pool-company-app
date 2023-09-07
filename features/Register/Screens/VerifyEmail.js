import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CodeInputCmp from "../../ForgotPassword/Components/CodeInput";
import { sendOTP, verificationOTP } from "../../../serveur/login/login";

const VerifyEmail = ({ navigation, route }) => {
  const [OTP, setOTP] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const { email } = route.params.globalInfo;
  console.log(route.params.globalInfo.email);

  const handleSubmit = () => {
     verificationOTP(OTP).then((res) => {
      console.log(res)

      res <= "201" ? navigation.navigate("WelcomPool") : setMessage(res.error);
    });
  };

  const handleResend = () => {
    setLoading(true);

    sendOTP(email).then((res) => {
      if (res <= 201) {
        setResend(true);
      } else setMessage(res.error);
      setLoading(false);
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
      <View style={{}}>
        <Text style={{ paddingVertical: 12, fontWeight: "bold" }}>
          Enter the 6-digit code sent to you at:
        </Text>
        <Text style={{ marginBottom: 14 }}>{email}</Text>
      </View>

      <View>
        <View style={{ width: "100%" }}>
          <CodeInputCmp updateCode={setOTP} />
        </View>

        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>120 s</Text>
        </View>
      </View>
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
          // onPress={() => navigation.navigate("WelcomPool")}
          onPress={handleSubmit}
          style={{
            backgroundColor: "#053582",

            borderRadius: 30,
            width: 100,
          }}
          disabled={OTP.length != 6}
        >
          <Text style={{ padding: 10, alignSelf: "center", color: "white" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Text>Didn’t receive any code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={{ alignSelf: "center", color: "green" }}>
            {resend ? "code sent" : "Resend"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "red" }}> {message}</Text>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({});

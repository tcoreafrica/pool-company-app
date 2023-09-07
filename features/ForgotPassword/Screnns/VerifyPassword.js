import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import CodeInput from "../Components/CodeInput";
import CodeInputCmp from "../Components/CodeInput";
import { sendOTP, verificationOTP } from "../../../serveur/login/login";

const VerifyPassword = ({ navigation, route }) => {
  const { email } = route.params;
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [OTP, setOTP] = useState("");
  const [message, setMessage] = useState("");
  const handleVerificationTOP = () => {
    setLoading(true);
    verificationOTP(OTP).then((res) => {
      if (res <= 201) {
        navigation.navigate("CreatePassword", { OTP });
      } else setMessage(res.error);
      setLoading(false);
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

        <Text style={{ margin: 10, color: "red" }}>{message}</Text>
        <TouchableOpacity
          onPress={handleVerificationTOP}
          style={{
            padding: 12,

            backgroundColor: "#053582",
            borderRadius: 30,
          }}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                fontWeight: "300",
                fontSize: 14,
                alignSelf: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          position: "absolute",
          bottom: 5,
          borderRadius: 30,
          width: 100,
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Text>Didn’t receive any code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={{ color: "blue" }}> Resend</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: "center", color: "green" }}>
        {resend ? "code sent" : ""}
      </Text>
    </View>
  );
};

export default VerifyPassword;

const styles = StyleSheet.create({});

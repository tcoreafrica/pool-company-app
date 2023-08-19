import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import GoogleLogo from "../Assests/GoogleLogo";
import ForgotPassword from "../../ForgotPassword/Screnns/ForgotPassword";
import loginUser from "../../../serveur/login/login";
import { ADD_USER,DELETE_USER } from "../../redux/actionTypes";
//  import reducers from "../../features/redux/reducers";
import { useDispatch, useSelector } from "react-redux"; // Importing the useDispatch hook

 const Welcom2 = ({ navigation,route }) => {
  const user = useSelector((state) => state.user);
  const { email } = route.params; // Retrieve the data from the route object
  
  const dispatch = useDispatch();

  const login = () => {

//  dispatch({ type: DELETE_USER})
     
      // loginUser("admin@pool.com", "password").then((res) => {
      //   // console.log(res);
      //   dispatch({ type: ADD_USER, payload: res });
      // });
 
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
          What’s your email or phone number
        </Text>
      </View>

      <View>
        <TextInput
          style={{
            padding: 12,
            marginBottom: 12,
            backgroundColor: "#EBEBEB",
            borderRadius: 30,
          }}
          placeholder="+234 903 000 2629 "
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomBack",{email})}
          // onPress={login}
          style={{
            padding: 12,

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
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ height: 1, backgroundColor: "black", marginTop: 20 }}
      ></View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <GoogleLogo height={100} style={{}} />
        <Text style={{ alignSelf: "center", paddingLeft: 10, fontSize: 20 }}>
          Continue with Google
        </Text>
      </View>
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate(ForgotPassword)}
      >
        <Text style={{ alignSelf: "center" }}>Forgot password</Text>
      </TouchableOpacity>
      <View>
        <Text>
          By proceeding, you consent to get calls, whatsapp or sms messages and
          agree to the terms of services & privacy policy of Paakej.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          position: "absolute",
          bottom: 5,
          borderRadius: 30,
          width: 100,
        }}
        onPress={() => navigation.goBack("Welcom1")}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcom2;

const styles = StyleSheet.create({});

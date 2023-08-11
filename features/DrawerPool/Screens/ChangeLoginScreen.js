import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

const ChangeLoginScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const handlePasswordChange = () => {
    if (newPassword === repeatPassword) {
      // Here you can perform the password change logic
      console.log("Password changed successfully!");
    } else {
      console.log("New passwords do not match.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{paddingVertical : 25}}>Verify Password and login</Text>
      <TextInput
        secureTextEntry
        placeholder="Old Password"
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        placeholder="New Password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        placeholder="Repeat New Password"
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
        style={styles.input}
      />
      
      <TouchableOpacity 
      onPress={handlePasswordChange}
      style={{height : 40 , borderRadius : 5 , backgroundColor :'#053582'}}>
        <Text style={{alignSelf :'center' , marginTop : 10 , color :'white' , fontWeight :'bold'}}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor : 'white'
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CodeInput from "react-native-code-input";

const CodeInputCmp = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (value) => {
    setCode(value);
  };
  return (
    <View style={styles.container}>
      <CodeInput
        keyboardType="numeric"
        codeLength={6}
        size={40}
        autoFocus={true}
        activeColor="blue"
        inactiveColor="gray"
        onFulfill={handleCodeChange}
        style={{borderWidth : 0.5 , borderColor : 'black', paddingLeft : 25  }}
      />
      
    </View>
  );
};

export default CodeInputCmp;

const styles = StyleSheet.create({
  container: {
    height : 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom : 20
  },
  input: {
    marginTop: 20,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
  },
});

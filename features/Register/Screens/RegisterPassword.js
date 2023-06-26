import { StyleSheet, Text, View , TouchableOpacity } from "react-native";
import React , {useState} from "react";
import Checkbox from 'expo-checkbox';

const RegisterPassword = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
  return (
    <View 
    style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 60,
      }}>
        <View>
            <Text style={{fontSize : 14, fontWeight : 'bold' , paddingBottom : 10 }}>Choose a password for your account </Text>
            <Text style={{marginBottom : 20}}>Let us secure your account</Text>
        </View>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
        Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#EBEBEB",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 14, paddingLeft: 8 }}>
        Confirm Password
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection :'row' , justifyContent :'space-between' , paddingTop : 20}}>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text>I agree to the terms of services & privacy policy of Paakej.</Text>
      </View>
      <View style={{flexDirection : "row" , justifyContent : 'space-between' , position :'absolute' , bottom : 10 , width :'100%'  , left : 15}}>
      <TouchableOpacity
        style={{
          backgroundColor: "#EBEBEB",
          
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate('VerifyEmail')}
        style={{
          backgroundColor: "#053582",
          
          borderRadius: 30,
          width: 100,
        }}
      >
        <Text style={{ padding: 10, alignSelf: "center" , color :'white' }}>Continue</Text>
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

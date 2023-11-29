import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
const Success = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Success !</Text>
      <Ionicons name="checkmark" size={100} color='#25D366' />
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.navigate('Orders')}
        
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "700",
            padding: 2,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 200,
    backgroundColor:'white'
  },
  text: { fontSize: 40,color:'#25D366' },
  btn:{
    backgroundColor: "#053582",
    borderRadius: 60,
    height: 40,
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:100

  }
});

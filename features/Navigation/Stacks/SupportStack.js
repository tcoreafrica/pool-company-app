import { StyleSheet, Text, View  , TouchableOpacity} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Support from "../../DrawerPool/Screens/Support";
import About from "../../DrawerPool/Screens/About";
import Report from "../../DrawerPool/Screens/Report";
import { Ionicons } from '@expo/vector-icons';

const SupportStack = () => {
  const StackSupport = createNativeStackNavigator();
  return (
    <StackSupport.Navigator>
      <StackSupport.Screen name="Support" component={Support} 
      options={({ navigation }) => ({
        title: 'Support', // Set the title of the screen
        headerLeft: () => (
          <TouchableOpacity
            style={{   }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='ios-arrow-back' size={24} color='black' />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={{ flex: 1, alignItems: 'center'  }}>
            <Text style={{ textAlign: 'center', fontSize: 18 , fontWeight :'700' , marginRight : 60 }}>Support</Text>
          </View>
        ),
        
      })}
      />
      <StackSupport.Screen name="About" component={About} options={{ title : 'About App'}}/>
      <StackSupport.Screen name="Report" component={Report} options={{ title : 'Report an Issue'}}/>
    </StackSupport.Navigator>
  );
};

export default SupportStack;

const styles = StyleSheet.create({});

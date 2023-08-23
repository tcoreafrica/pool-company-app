import AsyncStorage from "@react-native-async-storage/async-storage";

const getTokenFromAsyncStorage = async () => {
  try {
    const token = await AsyncStorage.getItem("user");
    
console.log(token)
    return JSON.parse(token).data.token;
  } catch (error) {
    console.error("Error getting token from AsyncStorage:", error);
    return null;
  }
};

const getMYIDFromAsyncStorage = async () => {
  try {
    const token = await AsyncStorage.getItem("user");

    console.log(token.data)
    return JSON.parse(token).data.token;
  } catch (error) {
    console.error("Error getting token from AsyncStorage:", error);
    return null;
  }
};

export default  getTokenFromAsyncStorage ;

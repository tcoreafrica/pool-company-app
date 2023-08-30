import AsyncStorage from "@react-native-async-storage/async-storage";

const getTokenFromAsyncStorage = async () => {
  try {
    const token = await AsyncStorage?.getItem("user");
      const toks =JSON.parse(token)?.token;
      return toks
     
     
      
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

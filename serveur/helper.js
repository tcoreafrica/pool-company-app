import AsyncStorage from "@react-native-async-storage/async-storage";
import { URLBASE, GOOGLEKEY } from "@env";
import Geolocation from "react-native-geocoding";

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

export const  AddressTextFromCoordinates=async(latitude, longitude)=>{
  Geolocation.init(GOOGLEKEY);

  try {
    const result = await Geolocation.from(latitude, longitude);
    const formattedAddress = result.results[0].formatted_address;
   return(formattedAddress);
  } catch (error) {
    console.error("Error:", error);
    setAddress("...");
  }
}

export default  getTokenFromAsyncStorage ;

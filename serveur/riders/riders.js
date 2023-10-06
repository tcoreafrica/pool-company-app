// loginUser.js

import axios from "axios";
import getTokenFromAsyncStorage from "../helper";
import { getMYIDFromAsyncStorage } from "../helper";

import {URLBASE} from '@env'
const getAllRiders = async () => {
  const token= await getTokenFromAsyncStorage()
  const MYID= await getMYIDFromAsyncStorage()

  
   try { 
    const response = await axios.get(
      URLBASE+`/account/API/V1/deliveryCompany/getCompanyRiders/${MYID}`
       
    );

    if (response.status) {
      return response.data.data;
    } else {
      return {
        success: false,
        error: "Fetch failed",
        res: response.data,
      };
    }
  } catch (error) {
    console.error("Error during Fetch riders:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export default getAllRiders;

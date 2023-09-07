// loginUser.js

import axios from "axios";
import getTokenFromAsyncStorage from "../helper";
import {URLBASE} from '@env'
export const getWallet = async () => {
  const token= await getTokenFromAsyncStorage()
  try {
    const response = await axios.get(
      `${URLBASE}/payment/API/V1/wallet/getWalletBalance`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return {
        success: false,
        error: "Fetch failed",
        res: response.data,
      };
    }
  } catch (error) {
    
    return { success: false, error: "An error occurred" };
  }
};


export const rechargeWallet=async(order)=>{


  const token = await getTokenFromAsyncStorage();

 
  try {
    const response = await axios.post(
      `${URLBASE}/payment/API/V1/payment/rechargeWallet`,
      order,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
   return response.data.data
    // return response.data;
  } catch (error) {
   return("Error:", error);
  }


}
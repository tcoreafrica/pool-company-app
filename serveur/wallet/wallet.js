// loginUser.js

import axios from "axios";
import getTokenFromAsyncStorage from "../helper";
import {URLBASE} from '@env'
const getWallet = async () => {
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

export default getWallet;

// loginUser.js
import {URLBASE} from '@env'

import axios from "axios";
import {getTokenFromAsyncStorage,getMYIDFromAsyncStorage} from "../helper";
const getOrdersRider = async () => {
    const token = await getTokenFromAsyncStorage();
    const MYID = "await getMYIDFromAsyncStorage()";
 
  try {
    const response = await axios.get(
      `${URLBASE}/pool/API/V1/rider/riderOrders/${MYID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data.data;
    } else {
      return {
        success: false,
        error: "Fetch failed",
        res: response.data,
      };
    }
  } catch (error) {
    console.error("Error during Fetch:", error);
    return { success: false, error: "An error occurred" };
  }
};

export default getOrdersRider;

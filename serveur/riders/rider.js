// loginUser.js

import axios from "axios";
import getTokenFromAsyncStorage from "../helper";
import {URLBASE} from '@env'

const getRiderInfo = async (riderID) => {
  const token= await getTokenFromAsyncStorage()
  try {
    const response = await axios.get(
      `${URLBASE}/account/API/V1/account/${riderID}?populate=detail`,
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

export default getRiderInfo;

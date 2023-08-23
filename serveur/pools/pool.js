// loginUser.js

import axios from "axios";
import { URLBASE } from "@env";
import getTokenFromAsyncStorage from "../helper";
export const getAllExchangePool = async () => {
  const token = await getTokenFromAsyncStorage();
  // console.log( token)
  try {
    const response = await axios.get(
      // &range=1672999790770,1678442990770
      URLBASE + "/pool/API/V1/pool"
    );

    if (response.status) {
      return response.data;
    } else {
      return {
        success: false,
        error: "Fetch failed",
        res: response.data,
      };
    }
  } catch (error) {
    console.error("Error during Fetch:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export const getAllMyCompanyPool = async () => {
  const token = await getTokenFromAsyncStorage();


  try {
    const response = await axios.get(
      // &range=1672999790770,1678442990770
    URLBASE+"/pool/API/V1/pool/myDeliveryRequests?populate=delivery",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );

    if (response.status) {
      return response.data;
    } else {
      return {
        success: false,
        error: "Fetch failed",
        res: response.data,
      };
    }
  } catch (error) {
    console.error("Error during Fetch:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

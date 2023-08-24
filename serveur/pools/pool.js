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
      URLBASE + "/pool/API/V1/pool/myDeliveryRequests?populate=delivery",
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

export const sendPoolOrderRequest = async () => {
  const token = await getTokenFromAsyncStorage();

  const data = {
    pickUpLocation: [9.85534, 8.923335],
    destinationLocation: [9.341052, 9.917582],
    deliveryPlan: "63f4f942da9b7798fb6f2a31",
    receiver: {
      name: "Rick Grimes",
      email: "rickgrimes@yopmail.com",
      phone: "069222221112",
      address: "Alexandria",
    },
    itemName: "Sun Chips",
    quantity: 20,
    sizeOfItem: {
      length: 20,
      width: 30,
      height: 40,
      weight: 5,
    },
  };

  // try {
    const response = await axios.post(
      URLBASE + "/pool/API/V1/pool/createPoolOrderRetail",

      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await console.log("Response:", response);
    // return response.data;
  // } catch (error) {
  //   console.error("Error:", error);
  // }
};

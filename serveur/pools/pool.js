// loginUser.js

import axios from "axios";
import { URLBASE } from "@env";
const qs = require("qs"); // Import the qs library

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
    console.error("Error during Fetch pool:", error);
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
    console.error("Error during Fetch pool:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export const sendPoolOrderRequest = async () => {
  const token = await getTokenFromAsyncStorage();

  payload = {
    pickUpLocation: [9.0764785, 7.398574],
    destinationLocation: [9.1764785, 8.008574],
    deliveryPlan: "643d750a6c393b189d6215de",
    receiver: {
      name: "Rick Grimes",
      email: "rickgrimes@yopmail.com",
      phone: "069222221112",
      address: [9.1764785, 8.008574],
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
  try {
    const response = await axios.post(
      `${URLBASE}/pool/API/V1/pool/createPoolOrderRetail`,
      JSON.stringify(payload),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response);
    // return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

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
    console.error("Error during Fetch pool getAllExchangePool:", error);
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
    console.error("Error during Fetch pool getAllMyCompanyPool:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export const sendPoolOrderRequest = async (data) => {
  const token = await getTokenFromAsyncStorage();

  const {
    dropInfo,
    dropOffAddress,
    itemName,
    quantity,
    pickInfo,
    pickupAddress,
  } = data;

  payload = {
    pickUpLocation: [pickupAddress.lat, pickupAddress.lng],
    destinationLocation: [dropOffAddress.lat, dropOffAddress.lng],
    deliveryPlan: "643d750a6c393b189d6215de",
    receiver: {
      name: dropInfo.name,
      email: "rickgrimes@yopmail.com",
      phone: dropInfo.number,
      address: [dropOffAddress.lat, dropOffAddress.lng],
    },
    itemName: itemName,
    quantity: quantity,
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

    return response.status <= 200 ? response.data : null;

    // return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const AcceptOrderRequest = async (order) => {
  const token = await getTokenFromAsyncStorage();

  console.log(order);

  try {
    const response = await axios.post(
      `${URLBASE}/pool/API/V1/pool/acceptDelivery`,
      order,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.status;
    // return response.data;
  } catch (error) {
    return "Error:", error;
  }
};
export const finalizeOrderRequest = async (order) => {
  const token = await getTokenFromAsyncStorage();
  console.log(order);

  try {
    const response = await axios.post(
      `${URLBASE}/pool/API/V1/pool/finalizeOrder`,
      order,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.status;
    // return response.data;
  } catch (error) {
    return "Error:", error;
  }
};

export const pushDeliveryToRider = async (data) => {
  const token = await getTokenFromAsyncStorage();
  console.log(token);

  try {
    const response = await axios.post(
      `${URLBASE}/pool/API/V1/pool/AssignToRider`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.status;
    // return response.data;
  } catch (error) {
    return "Error:", error;
  }
};

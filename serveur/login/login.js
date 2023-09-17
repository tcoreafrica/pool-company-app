// loginUser.js

import axios from "axios";

import { URLBASE } from "@env";

export const loginUser = async (email, password) => {
  // const email="hrichi_kabil@yahoo.com"
  // const password= "password"

   try {
    const requestBody = {
      email,
      password,
    };

    const response = await axios.post(
      URLBASE + "/account/API/V1/account/login",
      requestBody
    );

    if (response.status) {
      return response.data;
    } else {
      //  store.dispatch(loginFailure("Authentication failed"));

      return {
        success: false,
        error: "Authentication failed",
        res: response.data,
      };
    }
  } catch (error) {
    // console.error("Error during authentication:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export const fetchUser = async (email) => {
  try {
    const response = await axios.post(
      URLBASE + "/account/API/V1/account/userName",
      { email }
    );

    if (response.status) {
      return response.status;
    } else {
      //  store.dispatch(loginFailure("Authentication failed"));

      return {
        success: false,
        error: "Authentication failed",
        message: response.message,
      };
    }
  } catch (error) {
    // console.error("Error during authentication:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "User not found" };
  }
};

export const sendOTP = async (email) => {
  try {
    const response = await axios.post(
      URLBASE + "/account/API/V1/account/resendRecoverOTP",
      { email }
    );

    if (response.status) {
      return response.status;
    } else {
      //  store.dispatch(loginFailure("Authentication failed"));

      return {
        success: false,
        error: "Authentication failed",
        message: response.message,
      };
    }
  } catch (error) {
    // console.error("Error during authentication:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "User not found" };
  }
};

export const verificationOTP = async (OPT) => {
  console.log(OPT)
  try {
    const response = await axios.get(
      URLBASE + `/account/API/V1/account/validateOtp?otp=${OPT}`
    );
    console.log(response)

    if (response.status) {
      return response.status;
    } else {
      //  store.dispatch(loginFailure("Authentication failed"));

      return {
        success: false,
        error: "Authentication failed",
        message: response.message,
      };
    }
  } catch (error) {
    // console.error("Error during authentication:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "Incorrect or expired code",message:error.response };
  }
};

export const changePassword = async (credentials) => {
  try {
    const response = await axios.post(
      URLBASE + "/account/API/V1/account/reset-password",
      credentials
    );

    if (response.status) {
      return response.status;
    } else {
      return {
        success: false,
        error: "Authentication failed",
        res: response.data,
      };
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, error: "An error occurred" };
  }
};

export const registerUser = async (userInfo) => {
  console.log(userInfo)
  try {
    const response = await axios.post(URLBASE + "/account/API/V1/account/signup?populate=detail", userInfo);

    if (response.status === 200) {
      // Successful registration
      return '200'; // You can return any success message you want
    } else {
      // Handle other success status codes if needed
      return 'Unexpected status code: ' + response.status;
    }
  } catch (error) {
    // Handle errors (e.g., network error, validation error, etc.)
    if (error.response && error.response.status === 400) {
      return 'Validation failed: ' + error.response.data.message;
    } else {
      return 'Failed: ' + error.message; // Generic error message
    }
  }
};

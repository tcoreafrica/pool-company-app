// loginUser.js

import axios from "axios";

import { URLBASE } from "@env";
const loginUser = async (email,password) => {

  // const email="hrichi_kabil@yahoo.com"
  // const password= "password"

  console.log(email,password)
  try {
    const requestBody = {
      email,
      password,
    };

    const response = await axios.post(
      URLBASE+"/account/API/V1/account/login",
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

export default loginUser;

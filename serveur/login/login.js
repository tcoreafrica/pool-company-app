// loginUser.js

import axios from "axios";

// import {URLBASE} from e
const loginUser = async (email, password) => {

  try {
    const requestBody = {
      email,
      password,
    };

    const response = await axios.post(
      "https://beta-gateway-bhwkuf2epa-uc.a.run.app/account/API/V1/account/login",
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
    console.error("Error during authentication:", error);
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export default loginUser;

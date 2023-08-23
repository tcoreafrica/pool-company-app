// loginUser.js

import axios from "axios";

// import {URLBASE} from e
const getAllRiders = async () => {
  try {
    const response = await axios.get(
      // &range=1672999790770,1678442990770
      `https://beta-gateway-bhwkuf2epa-uc.a.run.app/account/API/V1/deliveryCompany/getCompanyRiders/64df88e82f7c4c18327b8596`
       
    );

    if (response.status) {
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
    // store.dispatch(loginFailure("An error occurred"));

    return { success: false, error: "An error occurred" };
  }
};

export default getAllRiders;

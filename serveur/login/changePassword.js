import axios from "axios";

import { URLBASE } from "@env";
import getTokenFromAsyncStorage from "../helper";

const changePassword = async (old, newPass) => {
  const token = await getTokenFromAsyncStorage();
  const current_password=old
  const new_password=newPass

  const requestBody = {
    current_password,
    new_password,
  };

  console.log(token); // Log the requestBody for debugging

  try {
    const response = await axios.patch(
      URLBASE + "/account/API/V1/account/updatePassword",
      requestBody,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU1MzM0Njk0ZjcyZTZhNWZiMzQxOGIiLCJ1c2VybmFtZSI6ImhyaWNoaTA3IiwiZW1haWwiOiJocmljaGlAcG9vbC5jb20iLCJyb2xlIjoiRGVsaXZlcnlDb21wYW55IiwiaWF0IjoxNjkyNzQzNDQ2LCJleHAiOjE2OTMzNDgyNDZ9.0chxhnKMEkWLVM2ghSl-8xO3llrX1Utrg03N-G9tTbE`,
         },
      }
    );



    if (response.status) {
      return response.data;
    } else {
        
      return {
        success: false,
        error: "Authentication failed",
        res: response.data,
      };
    }
  } 
  catch (error) {
    console.error("Error during authentication:", error);
     return { success: false, error: "An error occurred" };
  }
  
 

};

export default changePassword;

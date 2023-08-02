import axios from "axios";

export const signin = async (input) => {
    console.log("in services "+input.name)
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
    input
  );
  console.log("services" +response)
  return response;
};

export const signup = async (input) => {
    let response = await axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      input
    );
    console.log("services" +response)

    return response;
  };
import instanceAxios from "../helper/instance";


export const authSignin = async (data) => await instanceAxios({
      method: "POST",
      url: "auth/login", 
      data
    });


export const authSignup = async (data) => await instanceAxios({
      method: "POST",
      url: "auth/signup",
      data
});


export const authGetProfile = async () => await instanceAxios({
      method: "GET",
      url: "profile",
});
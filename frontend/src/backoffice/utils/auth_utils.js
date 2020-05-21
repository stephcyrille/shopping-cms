const axios = require("axios");

export const saveToken = token => {
  localStorage.setItem("appToken", token);
};

export const getToken = () => {
  return localStorage.getItem("appToken");
};

export const clearToken = () => {
  return localStorage.removeItem("appToken");
};



// LOCALSTORAGE FOR MANAGE USER
export const saveUser = user => {
  localStorage.setItem("user", user);
};

export const clearUser = () => {
  return localStorage.removeItem("user");
};

export const getUser = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return user;
};


export const initAxios = () => {

  if (localStorage.hasOwnProperty("appToken")) {
    window.axios = axios.create({
      baseURL: window.location.origin,
      // timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("appToken")
      }
    });
    window.file_axios = axios.create({
      baseURL: window.location.origin,
      // timeout: 1000,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("appToken")
      }
    });
  } else {
    window.axios = axios.create({
      baseURL: window.location.origin,
      headers: {
        "Content-Type": "application/json"
      }
    });
    window.file_axios = axios.create({
      baseURL: window.location.origin,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};


export const isLoggedIn = () => {
  // We will first check token validity 
  if(getToken()){
    return true
  }
  else {
    return false
  }
}

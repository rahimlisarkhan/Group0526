import axios from "axios"

const instanceAxios = axios.create({
  baseURL: "https://api.sarkhanrahimli.dev/api/filmalisa/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000
})

export default instanceAxios


// Add a request interceptor
instanceAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // config.headers["X-Custom-Header"] = "CustomHeaderValue";

    config.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token") || ""}`;

    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instanceAxios.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // if (error.response && error.response.status == 401) {
    //   // Server responded with a status other than 2xx
    //   alert("Unauthorized access - perhaps you need to log in?");
    // }
    
    return Promise.reject(error);
  });



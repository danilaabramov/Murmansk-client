import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL :
        "http://localhost:8084",
});

// instance.interceptors.request.use((config) => {
//   config.headers.authorization = `Bearer ${window.localStorage.getItem("token")}`
//   return config;
// });

export default instance;

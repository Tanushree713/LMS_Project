import axios from "axios";

const BASE_URL = "http://localhost:5015/api/v1";

const axiosInstance = axios.create(
    {
        baseURL : BASE_URL ,
        withCredentials : true 
    }
);

// axiosInstance.defaults.baseurl = BASE_URL;
// axiosInstance.defaults.withCredentials = true;

export default axiosInstance;

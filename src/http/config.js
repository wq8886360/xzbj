import axios from "axios";
import qs from "qs";


axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://v20-front-api.shunliandongli.com";
axios.defaults.timeout = 5000;
axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
};

// request全局拦截
axios.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
})

//response全局拦截
axios.interceptors.response.use(response => {
        return response
    },
    error => {
        return Promise.resolve(error.response);
    }
);

export const post = (url, params) => {
    return axios({
        method: "post",
        url: url,
        data: qs.stringify(params)
    });
};

export const get = (url, params) => {
    return axios({
        method: "get",
        url: url,
        params: params
    });
};
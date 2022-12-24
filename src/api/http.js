import axios from "axios"
import { showNotify } from 'vant';

let http = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api，不用你手写
    baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-api-01.newbee.ltd/api/v1/' : '/api/v1',
    //请求时间超过5秒
    timeout: 5000
})
// 请求拦截器
http.interceptors.request.use(function (config) {
    config.headers.token = localStorage.getItem("mltoken")
    return config;
}, function (error) {
    return Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use(response => {
    let data = response.data;
    if (data.resultCode != 200) {
        showNotify({
            type: 'danger', message: data.message || "系统繁忙"
        });
    }
    return data;
}, error => {
    showNotify({
        type: 'danger',
        message: "系统繁忙，稍后再试"
    });
    return Promise.reject(error.response)
})

export default http;
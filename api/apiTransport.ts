
import Axios from 'axios'
import config from '../config';
import AppError from '../utils/AppError';

const axios = Axios.create({
    baseURL: config.API_BASE_URL, // http://localhost:3002/api + /auth/register
    headers: {
        'Content-Type': 'application/json'
    },
})

axios.interceptors.response.use(function (value) {
    // console.log(value.data.data)
    return value.data.data;
}, function (err) {
    console.error(err.response?.status, err.response.data)
    const status = err.response?.status || 500;
    const message = err.response?.data.message || 'Something went wrong';
    const errorCode = err.response?.data.error_code || '';
    const meta = err.response?.data.meta || {};

    throw new AppError(message, status, message, errorCode, meta);
})

// Adding an interceptor (middleware) for all API requests
// https://axios-http.com/docs/interceptors
// axios.interceptors.request.use(function (config) {

//     // Do something before request is sent
//     const token = localStorage.getItem('auth-token')

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }

//     return config;
// }, function (error) {

//     // Do something with request error
//     return Promise.reject(error);
// });


export default axios;
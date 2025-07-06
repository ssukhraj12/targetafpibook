'use client';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://cms.truewebpro.com/api",
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if(typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if(typeof window !== 'undefined') {
                localStorage.removeItem("token");
                window.location.href = '/admin/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
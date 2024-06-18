// import axios from "axios";
// import { useSelector } from "react-redux";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000/api',
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const {token} = useSelector((state)=>state.user);
//         if(token){
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error)=>{
//         return Promise.reject(error)
//     }
// )


// export default axiosInstance;
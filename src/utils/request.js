import axios from "axios";

// axios实例
const instance = axios.create({});

// 拦截器
instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {}
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {}
);

export default instance;

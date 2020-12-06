import { message } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';

axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        message.error('获取数据失败');
        Promise.reject(error);
    },
);

export const apiGetTopics = () => {
    return axios.get('/topic');
};

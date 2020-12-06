import { message } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        message.error('请求失败');
        return error;
    },
);

export const apiGetTopics = () => {
    return axios.get('/topic');
};

export const apiGetTopicDetail = (id) => {
    return axios.get('/topic/detail/' + id);
};

export const apiDeleteTopic = (id) => {
    return axios.post('/topic/delete', {
        id,
    });
};

import { message } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.withCredentials = true;

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

export const apiLogin = (username, password) => {
    return axios.post('/user/login', {
        username,
        password,
    });
};

export const apiRegister = (username, password) => {
    return axios.post('/user/add', {
        username,
        password,
    });
};

export const apiLogout = () => {
    return axios.post('/user/logout');
};

export const apiPostTopic = (title, content) => {
    return axios.post('/topic/add', {
        title,
        content,
    });
};

export const apiPostComment = (topicId, content) => {
    return axios.post('/topic_comment/add', {
        topicId,
        content,
    });
};

export const apigetComments = (topicId) => {
    return axios.get('/topic_comment/' + topicId);
};

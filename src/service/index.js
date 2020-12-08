import { message } from 'antd';
import axios from 'axios';
import { history } from 'umi';
import { localSave } from '../utils';
import { url } from './constants';

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        message.error('请求失败');
        if (error.response.status === 401) {
            localSave('user', null);
            history.push('/login');
        }
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

export const apiUpdateTopic = (id, title, content) => {
    return axios.post('/topic/update', {
        id,
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

export const apiDeletComment = (id) => {
    return axios.post('/topic_comment/delete', {
        id,
    });
};

export const apiUpdateTopicComment = (id, content) => {
    return axios.post('/topic_comment/update', {
        id,
        content,
    });
};

export const apiChangePassword = (oldPassword, password) => {
    return axios.post('/user/changePassword', {
        oldPassword,
        password,
    });
};

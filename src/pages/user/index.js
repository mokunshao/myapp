import {
    apiGetUserInfo,
    apiGetUserSomeTopic,
    apiGetUserSomeTopicComment,
} from '../../service';
import { useState, useEffect } from 'react';
import { Avatar, List, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { formatDate, getId } from '../../utils';

export default (props) => {
    const [item, setItem] = useState({});
    const [topics, setTopics] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const id = getId(props);
        if (!id) {
            return;
        }
        apiGetUserInfo(id).then((res) => {
            if (res?.data) {
                setItem(res.data);
            }
        });
        apiGetUserSomeTopic(id).then((res) => {
            if (res?.data) {
                setTopics(res.data);
            }
        });
        apiGetUserSomeTopicComment(id).then((res) => {
            if (res?.data) {
                setComments(res.data);
            }
        });
    }, []);

    return (
        <div>
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Avatar
                            shape="square"
                            size={64}
                            icon={<UserOutlined />}
                        />
                    }
                    style={{ padding: '0 10px' }}
                    title={<b>{item.username}</b>}
                    description={<span>本站第 {item.id} 号会员</span>}
                />
            </List.Item>
            <Divider orientation="left">最近发表的主题</Divider>
            <List
                footer={
                    <a
                        onClick={() => {
                            history.push('/user/topics?id=' + item?.id);
                        }}
                    >
                        更多
                    </a>
                }
                bordered
                dataSource={topics}
                renderItem={(o) => (
                    <List.Item>
                        <span>
                            <a
                                onClick={() =>
                                    history.push('/topic?id=' + o.id)
                                }
                            >
                                {o.title}
                            </a>{' '}
                            发表于 {formatDate(o.createdTime)}
                        </span>
                    </List.Item>
                )}
            />
            <Divider orientation="left">最近发表的评论</Divider>
            <List
                footer={
                    <a
                        onClick={() => {
                            history.push('/user/topic_comments?id=' + item?.id);
                        }}
                    >
                        更多
                    </a>
                }
                bordered
                dataSource={comments}
                renderItem={(o) => (
                    <List.Item>
                        <span>
                            <a
                                onClick={() =>
                                    history.push('/topic?id=' + o.topicId)
                                }
                            >
                                {o.content}
                            </a>{' '}
                            发表于 {formatDate(o.createdTime)}
                        </span>
                    </List.Item>
                )}
            />
        </div>
    );
};

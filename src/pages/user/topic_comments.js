import { apiGetTopicCommentsByUserId } from '../../service';
import { useEffect, useState } from 'react';
import { getId, formatDate } from '../../utils';
import { List, Divider } from 'antd';
import { history } from 'umi';

export default (props) => {
    const [topicComments, setTopicComments] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const id = getId(props);
        if (!id) {
            return;
        }
        apiGetTopicCommentsByUserId(id).then((res) => {
            if (res?.data) {
                setTopicComments(res.data);
                if (res?.data[0]?.user?.username) {
                    setUsername(res?.data[0]?.user?.username);
                }
            }
        });
    }, []);

    return (
        <div>
            <Divider orientation="left">{username} 的所有评论</Divider>
            <List
                bordered
                dataSource={topicComments}
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

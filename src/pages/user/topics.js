import { apiGetTopicsByUserId } from '../../service';
import { useEffect, useState } from 'react';
import { getId, formatDate } from '../../utils';
import { List, Divider } from 'antd';
import { history } from 'umi';

export default (props) => {
    const [topics, setTopics] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const id = getId(props);
        if (!id) {
            return;
        }
        apiGetTopicsByUserId(id).then((res) => {
            if (res?.data) {
                setTopics(res.data);
                if (res?.data[0]?.user?.username) {
                    setUsername(res?.data[0]?.user?.username);
                }
            }
        });
    }, []);

    return (
        <div>
            <Divider orientation="left">{username} 的所有主题</Divider>
            <List
                bordered
                dataSource={topics}
                renderItem={(o) => (
                    <List.Item>
                        <span>
                            {o.topic && o.topic.title ? (
                                <>
                                    {formatDate(o.createdTime)} 在主题{' '}
                                    <a
                                        onClick={() =>
                                            history.push(
                                                '/topic?id=' + o.topic.id,
                                            )
                                        }
                                    >
                                        {o.topic && o.topic.title}
                                    </a>{' '}
                                </>
                            ) : (
                                <>{formatDate(o.createdTime)} 在已删除主题</>
                            )}
                            发表了评论：
                            {o.content}
                        </span>
                    </List.Item>
                )}
            />
        </div>
    );
};

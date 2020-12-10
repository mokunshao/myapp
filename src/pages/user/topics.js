import { apiGetTopicsByUserId } from '../../service';
import { useEffect, useState } from 'react';
import { getId, formatDate } from '../../utils';
import { List, Divider } from 'antd';
import { history } from 'umi';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

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
        </div>
    );
};

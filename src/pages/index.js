import { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { history, connect } from 'umi';
import { apiGetTopics } from '../service';
import TopicInput from '../components/TopicInput';
import { formatDate, jumpToUser } from '../utils';

export default connect(({ global }) => ({ global }))((props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        apiGetTopics().then((res) => {
            setData(res.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = (item) => (
        <List.Item>
            <List.Item.Meta
                avatar={
                    <Avatar
                        style={{ cursor: 'pointer' }}
                        onClick={() => jumpToUser(item.userId)}
                        shape="square"
                        size={64}
                        icon={<UserOutlined />}
                    />
                }
                style={{ padding: '0 10px' }}
                title={
                    <a
                        onClick={() => {
                            history.push('/topic?id=' + item.id);
                        }}
                    >
                        {item.title}
                    </a>
                }
                description={
                    <span>
                        <a onClick={() => jumpToUser(item.userId)}>
                            {item.user?.username}
                        </a>
                        {' 发表于 '}
                        {formatDate(item.createdTime)}
                    </span>
                }
            />
        </List.Item>
    );

    return (
        <div>
            {props.global.user.username && <TopicInput callback={fetchData} />}
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={renderItem}
                style={{ flex: 1 }}
            />
        </div>
    );
});

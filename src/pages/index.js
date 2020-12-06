import { useState, useEffect } from 'react';
import { List } from 'antd';
import { history } from 'umi';
import { apiGetTopics } from '../service';
import TopicInput from '../components/TopicInput';

export default () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiGetTopics().then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    const renderItem = (item) => (
        <List.Item>
            <List.Item.Meta
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
            />
        </List.Item>
    );

    return (
        <>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={renderItem}
                style={{ flex: 1 }}
            />
            <TopicInput />
        </>
    );
};

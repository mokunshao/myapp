import { useState, useEffect, useContext } from 'react';
import { List } from 'antd';
import { history, connect } from 'umi';
import { apiGetTopics } from '../service';
import TopicInput from '../components/TopicInput';

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
                    '发表于 ' +
                    new Date(item.createdTime * 1000).toLocaleDateString()
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
            {props.global.user.username && <TopicInput callback={fetchData} />}
        </>
    );
});

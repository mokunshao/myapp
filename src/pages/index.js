import { useState, useEffect } from 'react';
import { List } from 'antd';
import { history } from 'umi';

export default () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setData([
                {
                    title: 'Ant Design Title 1',
                    id: 1,
                },
                {
                    title: 'Ant Design Title 2',
                    id: 2,
                },
                {
                    title: 'Ant Design Title 3',
                    id: 3,
                },
                {
                    title: 'Ant Design Title 4',
                    id: 4,
                },
            ]);
            setLoading(false);
        }, 1000);
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
        <div>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={renderItem}
            />
        </div>
    );
};

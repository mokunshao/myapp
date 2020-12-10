import { useState, useEffect } from 'react';
import { List, Avatar, Radio, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { history, connect } from 'umi';
import { apiGetTopics } from '../service';
import { formatDate, jumpToUser } from '../utils';

export default connect(({ global }) => ({ global }))((props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        const boardId = props?.global?.checkedBoardId;
        if (boardId) {
            setLoading(true);
            apiGetTopics(boardId).then((res) => {
                setData(res.data);
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [props?.global?.checkedBoardId]);

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
            <div style={{ padding: '0.5em' }}>
                <Radio.Group
                    value={props.global.checkedBoardId}
                    onChange={(e) => {
                        props.dispatch({
                            type: 'global/save',
                            payload: { checkedBoardId: e.target.value },
                        });
                    }}
                    buttonStyle="solid"
                >
                    <Radio.Button value="all">所有</Radio.Button>
                    {props.global.boards.map((o) => {
                        return (
                            <Radio.Button key={o.id} value={o.id}>
                                {o.name}
                            </Radio.Button>
                        );
                    })}
                </Radio.Group>
            </div>

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

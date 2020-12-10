import { List, Card, Comment, Avatar, Space, Popconfirm } from 'antd';
import { connect } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import { formatDate, jumpToUser } from '../utils';
import { apiDeletComment } from '../service';
import { history } from 'umi';

export default connect(({ global }) => ({ global }))((props) => {
    const { data, loading, global, callback, callback2 } = props;

    const onDelete = (item) => {
        apiDeletComment(item.id).then((res) => {
            if (res.status === 200) {
                callback();
            }
        });
    };

    return (
        <Card title="评论" loading={loading}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <li>
                        <Comment
                            avatar={
                                <Avatar
                                    onClick={() => jumpToUser(item.userId)}
                                    shape="square"
                                    size={64}
                                    icon={<UserOutlined />}
                                />
                            }
                            author={
                                <a
                                    onClick={() => {
                                        jumpToUser(item.userId);
                                    }}
                                >
                                    {item.user?.username}
                                </a>
                            }
                            content={
                                <div>
                                    <div style={{ whiteSpace: 'pre-wrap' }}>
                                        {item.content}
                                    </div>
                                    {item.userId === global.user.id && (
                                        <>
                                            <br></br>
                                            <Space>
                                                <Popconfirm
                                                    title="是否确定删除？"
                                                    onConfirm={() =>
                                                        onDelete(item)
                                                    }
                                                    okText="是"
                                                    cancelText="否"
                                                >
                                                    <a>删除</a>
                                                </Popconfirm>
                                                <a
                                                    onClick={() =>
                                                        callback2(item)
                                                    }
                                                >
                                                    编辑
                                                </a>
                                            </Space>
                                        </>
                                    )}
                                </div>
                            }
                            datetime={
                                <span style={{ whiteSpace: 'pre-wrap' }}>
                                    发表于 {formatDate(item.createdTime)}{' '}
                                    最后编辑于 {formatDate(item.updatedTime)}
                                </span>
                            }
                        />
                    </li>
                )}
            />
        </Card>
    );
});

import { List, Card, Comment, Avatar, Space, Popconfirm } from 'antd';
import { connect } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import { formatDate } from '../utils';
import { apiDeletComment } from '../service';

export default connect(({ global }) => ({ global }))((props) => {
    const { data, loading, global, callback } = props;

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
                                    shape="square"
                                    size={64}
                                    icon={<UserOutlined />}
                                />
                            }
                            author={item.user?.username}
                            content={
                                <div>
                                    {item.content}
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
                                                <a>编辑</a>
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

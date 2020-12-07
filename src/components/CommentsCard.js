import { List, Card, Comment, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { formatDate } from '../utils';

export default (props) => {
    const { data, loading } = props;
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
                            content={item.content}
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
};

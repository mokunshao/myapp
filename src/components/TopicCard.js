import { Card, Popconfirm, Avatar, Space } from 'antd';
import { history, connect } from 'umi';
import { apiDeleteTopic } from '../service';
import { formatDate } from '../utils';
import { UserOutlined } from '@ant-design/icons';

export default connect(({ global }) => ({ global }))((props) => {
    const { data, loading, global } = props;
    const onDelete = () => {
        apiDeleteTopic(data.id).then((res) => {
            if (res.status === 200) {
                history.push('/');
            }
        });
    };

    const isShowDeleteButton = Boolean(
        data.userId &&
            props.global.user?.id &&
            props.global.user?.id === data.userId,
    );

    return (
        <Card title={data.title} loading={loading}>
            {data.content}
            <div>
                <br />
                <Space>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                    <div>
                        <div>本文由 {data.user?.username} 发表</div>
                        <div>发表于 {formatDate(data.createdTime)}</div>
                        <div>最后编辑于 {formatDate(data.updatedTime)}</div>
                    </div>
                </Space>
            </div>

            {isShowDeleteButton && (
                <div>
                    <br></br>
                    <Space>
                        <Popconfirm
                            title="是否确定删除？"
                            onConfirm={onDelete}
                            okText="是"
                            cancelText="否"
                        >
                            <a>删除</a>
                        </Popconfirm>
                        <a>编辑</a>
                    </Space>
                </div>
            )}
        </Card>
    );
});

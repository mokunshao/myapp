import { List, Card } from 'antd';

export default (props) => {
    const { data, loading } = props;
    return (
        <Card title="评论" loading={loading}>
            {JSON.stringify(data)}
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <li>
                        {item.userId} : {item.content}
                    </li>
                )}
            />
        </Card>
    );
};

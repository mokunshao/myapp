import { Card } from 'antd';

export default (props) => {
    const { data, loading } = props;
    return (
        <Card title={data.title} loading={loading}>
            {data.content}
        </Card>
    );
};

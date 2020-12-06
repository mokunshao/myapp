import { Card } from 'antd';
import { history } from 'umi';
import { apiDeleteTopic } from '../service';

export default (props) => {
    const { data, loading } = props;
    const onDelete = () => {
        apiDeleteTopic(data.id).then(() => {
            history.push('/topic');
        });
    };
    return (
        <Card title={data.title} loading={loading}>
            {data.content}
            <a onClick={onDelete}>删除</a>
        </Card>
    );
};

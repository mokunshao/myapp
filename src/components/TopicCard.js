import { Card } from 'antd';

const { Meta } = Card;
export default (props) => {
    const { data, loading } = props;
    // return JSON.stringify(topic);
    // {
    //   "id": 3,
    //   "content": "1212121212",
    //   "title": "love",
    //   "userId": null,
    //   "createdTime": null,
    //   "updatedTime": null,
    //   "commentList": []
    // }

    return (
        <Card title={data.title} loading={loading}>
            {data.content}
        </Card>
    );
};

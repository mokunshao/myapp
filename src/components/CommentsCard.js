import { Card } from 'antd';

const { Meta } = Card;
export default (props) => {
    const { data, loading } = props;
    // return JSON.stringify(topic);
    // [{
    //   "id": 3,
    //   "content": "1212121212",
    //   "title": "love",
    //   "userId": null,
    //   "createdTime": null,
    //   "updatedTime": null,
    //   "commentList": []
    // }]

    return (
        <Card title="评论" loading={loading}>
            1212
        </Card>
    );
};

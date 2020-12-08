import { Form, Button, Input, Card } from 'antd';
import { apiUpdateTopicComment } from '../service';

const { TextArea } = Input;

export default (props) => {
    const { form, callback } = props;

    const onFinish = (values) => {
        const { id, content } = values;
        apiUpdateTopicComment(id, content).then(() => {
            callback();
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item name="id" hidden required>
                <Input />
            </Form.Item>
            <Form.Item
                name="content"
                rules={[
                    {
                        required: true,
                        message: '请输入正文',
                    },
                ]}
            >
                <TextArea rows={4} placeholder="正文" />
            </Form.Item>
        </Form>
    );
};

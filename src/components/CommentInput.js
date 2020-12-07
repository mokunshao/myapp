import { Form, Button, Input, Card } from 'antd';
import { apiPostComment } from '../service';
const { useForm } = Form;

const { TextArea } = Input;

export default ({ id, callback }) => {
    const [form] = useForm();

    const onFinish = (values) => {
        const { content } = values;
        apiPostComment(id, content).then(() => {
            form.resetFields();
            callback();
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="发表评论">
            <Form
                form={form}
                name="basic"
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: '请输入评论',
                        },
                    ]}
                >
                    <TextArea rows={4} placeholder="评论" />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        // loading={submitting}
                        // onClick={onSubmit}
                        type="primary"
                    >
                        发表评论
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

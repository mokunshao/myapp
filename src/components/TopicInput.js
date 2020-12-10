import { Form, Button, Input, Card, message } from 'antd';
import { apiPostTopic } from '../service';
const { useForm } = Form;

const { TextArea } = Input;

export default ({ callback }) => {
    const [form] = useForm();

    const onFinish = (values) => {
        const { title, content } = values;
        apiPostTopic(title, content).then((res) => {
            if (res?.status === 200) {
                message.success('发表成功');
                form.resetFields();
                callback();
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="发表新话题">
            <Form
                form={form}
                name="basic"
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: '请输入标题',
                        },
                    ]}
                >
                    <TextArea rows={1} placeholder="标题" />
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
                <Form.Item>
                    <Button
                        htmlType="submit"
                        // loading={submitting}
                        // onClick={onSubmit}
                        type="primary"
                    >
                        发表话题
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

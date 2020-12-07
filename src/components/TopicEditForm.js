import { Form, Button, Input, Card } from 'antd';
import { apiUpdateTopic } from '../service';
const { useForm } = Form;

const { TextArea } = Input;

export default (props) => {
    const { form } = props;

    const onFinish = (values) => {
        const { title, content } = values;
        const { id, callback } = props;
        apiUpdateTopic(id, title, content).then(() => {
            // form.resetFields();
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
            initialValues={props.initData}
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
        </Form>
    );
};

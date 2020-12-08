import { Form, Button, Input, Card, message } from 'antd';
import { apiChangePassword } from '../service';
const { useForm } = Form;

const { TextArea } = Input;

export default (props) => {
    const [form] = useForm();

    const onFinish = (values) => {
        const { oldPassword, password } = values;
        // const { id, callback } = props;
        apiChangePassword(oldPassword, password).then((res) => {
            if (res.status === 200) {
                message.success('密码修改成功');
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ maxWidth: '400px' }}>
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="原密码"
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: '请输入原密码',
                        },
                    ]}
                >
                    <Input placeholder="原密码" type="password" />
                </Form.Item>
                <Form.Item
                    label="新密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入新密码',
                        },
                    ]}
                >
                    <Input placeholder="新密码" type="password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

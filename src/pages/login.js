import { Form, Input, Button } from 'antd';
import { apiLogin } from '../service';
import { history } from 'umi';

const layout = {
    labelCol: {
        span: 3,
    },
};

export default () => {
    const onFinish = (values) => {
        // console.log('Success:', values);
        const { username, password } = values;
        apiLogin(username, password).then((res) => {
            if (res.status === 200) {
                history.push('/');
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ padding: '2em' }}>
            <div style={{ maxWidth: '500px' }}>
                <h1>登录</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

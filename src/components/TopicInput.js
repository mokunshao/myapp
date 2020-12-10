import { Form, Button, Input, Card, message, Radio } from 'antd';
import { apiPostTopic } from '../service';
import { connect } from 'umi';
import { Select } from 'antd';

const { Option } = Select;
const { useForm } = Form;

const { TextArea } = Input;

export default connect(({ global }) => ({ global }))((props) => {
    const [form] = useForm();

    const onFinish = (values) => {
        const { title, content, boardId } = values;
        apiPostTopic(title, content, boardId).then((res) => {
            if (res?.status === 200) {
                message.success('发表成功');
                form.resetFields();
                const { callback } = props;
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
                <Form.Item
                    name="boardId"
                    rules={[
                        {
                            required: true,
                            message: '请选择话题',
                        },
                    ]}
                >
                    <Select placeholder="话题">
                        {props?.global?.boards.map((o) => {
                            return (
                                <Option key={o.id} value={o.id}>
                                    {o.name}
                                </Option>
                            );
                        })}
                    </Select>
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
});

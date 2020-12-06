import { Form, Button, Input, Card } from 'antd';

const { TextArea } = Input;

export default ({ onChange, onSubmit, submitting, value }) => {
    return (
        <Card title="发表新话题">
            <Form.Item>
                <TextArea rows={1} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    发表话题
                </Button>
            </Form.Item>
        </Card>
    );
};

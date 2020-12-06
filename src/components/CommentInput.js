import { Form, Button, Input, Card } from 'antd';

const { TextArea } = Input;

export default ({ onChange, onSubmit, submitting, value }) => {
    return (
        <Card title="发表评论">
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
                    发表评论
                </Button>
            </Form.Item>
        </Card>
    );
};

import { Card, Avatar } from 'antd';
import { history, connect } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import { jumpToUser } from '../utils';

export default (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{
                    flexDirection: 'column',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                }}
            >
                <div
                    style={{
                        width: '700px',
                        backgroundColor: 'white',
                        marginRight: '20px',
                    }}
                >
                    {props.children}
                </div>
                <SideBar />
            </div>
        </div>
    );
};

const SideBar = connect(({ global }) => ({ global }))((props) => {
    function jump() {
        jumpToUser(props?.global?.user?.id);
    }

    if (props?.global?.user?.id) {
        return (
            <Card bordered={false} style={{ width: 300, height: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                    <Avatar
                        onClick={jump}
                        shape="square"
                        size={64}
                        icon={<UserOutlined />}
                    />
                    <div style={{ marginLeft: '1em' }}>
                        <b onClick={jump}>{props?.global?.user?.username}</b>
                        <br></br>
                        <a
                            onClick={() => {
                                history.push('/topic_pub');
                            }}
                        >
                            发帖
                        </a>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card
            title="欢迎来到这里🙋‍♂️"
            bordered={false}
            style={{ width: 250, height: 'auto' }}
        >
            你现在还没
            <a
                onClick={() => {
                    history.push('/login');
                }}
            >
                登录
            </a>
            ，登录后可以发帖和评论
            <br />
            没有账号需要先
            <a
                onClick={() => {
                    history.push('/register');
                }}
            >
                注册
            </a>
            <br />
            或者使用测试账号：
            <br />
            账号：gua 密码：123
        </Card>
    );
});

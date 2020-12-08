import { Menu, Row, Col, Space } from 'antd';
import HeadLogo from './HeadLogo';
import { history, connect } from 'umi';
import { localRemove } from '../utils';
// import { store } from '../store';
// import { useContext } from 'react';
import { apiLogout } from '../service';

export default (props) => {
    // const context = useContext(store);
    // console.log('Head', context && context.user);
    const user = props.global?.user;

    // console.log(user);

    const action1 = () => (
        <>
            <a disabled>{user?.username}</a>
            <a onClick={onClickSettings}>设置</a>
            <a onClick={onClickLogout}>退出</a>
        </>
    );

    const action2 = () => (
        <>
            <a onClick={onClickRegister}>注册</a>
            <a key="login" onClick={onClickLogin}>
                登录
            </a>
        </>
    );

    function onClickLogout() {
        localRemove('user');
        apiLogout();
        location.reload();
    }
    function onClickAbout() {
        history.push('/about');
    }
    function onClickSettings() {
        history.push('/settings');
    }
    function onClickRegister() {
        history.push('/register');
    }
    function onClickLogin() {
        history.push('/login');
    }
    return (
        <Row>
            <Col flex="auto">
                <HeadLogo />
            </Col>
            <Col flex="wrap">
                <Space size="large">
                    <a onClick={onClickAbout}>关于</a>
                    {user?.username ? action1() : action2()}
                </Space>
            </Col>
        </Row>
    );
};

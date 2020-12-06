import { Menu, Row, Col } from 'antd';
import HeadLogo from './HeadLogo';
import { history } from 'umi';
import { localRemove } from '../utils';
import { store } from '../store';
import { useContext } from 'react';
import { apiLogout } from '../service';

export default () => {
    const context = useContext(store);
    console.log('Head', context && context.user);

    const action1 = () => (
        <>
            <Menu.Item key="user" disabled>
                {context?.user?.username}
            </Menu.Item>
            <Menu.Item key="logout" onClick={onClickLogout}>
                退出
            </Menu.Item>
        </>
    );

    const action2 = () => (
        <>
            <Menu.Item key="register" onClick={onClickRegister}>
                注册
            </Menu.Item>
            <Menu.Item key="login" onClick={onClickLogin}>
                登录
            </Menu.Item>
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
    function onClickRegister() {
        history.push('/register');
    }
    function onClickLogin() {
        history.push('/login');
    }
    return (
        <Row wrap={false}>
            <Col flex="auto">
                <HeadLogo />
            </Col>
            <Col flex="none">
                <Menu
                    focusable={false}
                    // onClick={this.handleClick}
                    // selectedKeys={[current]}
                    mode="horizontal"
                >
                    <Menu.Item key="about" onClick={onClickAbout}>
                        关于
                    </Menu.Item>
                    {context?.user ? action1() : action2()}
                </Menu>
            </Col>
        </Row>
    );
};

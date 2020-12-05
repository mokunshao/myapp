import { Menu, Row, Col } from 'antd';
import HeadLogo from './HeadLogo';
import { history } from 'umi';

export default () => {
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
        <div>
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
                        <Menu.Item key="register" onClick={onClickRegister}>
                            注册
                        </Menu.Item>
                        <Menu.Item key="login" onClick={onClickLogin}>
                            登录
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
};

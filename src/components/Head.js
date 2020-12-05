import { Menu, Row, Col } from 'antd';
import HeadLogo from './HeadLogo'
const { SubMenu } = Menu;

export default () => {
    return (
        <div>
            <Row wrap={false}>
                <Col flex="none">
                    <HeadLogo />
                </Col>
                <Col flex="auto">
                    <Menu
                        // onClick={this.handleClick}
                        // selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">Navigation One</Menu.Item>
                        <Menu.Item key="app" disabled>
                            Navigation Two
                        </Menu.Item>
                        <SubMenu
                            key="SubMenu"
                            title="Navigation Three - Submenu"
                        >
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a
                                href="https://ant.design"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Navigation Four - Link
                            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            {/* <div>2212</div> */}
        </div>
    );
};

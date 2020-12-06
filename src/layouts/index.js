// import 'antd/dist/antd.css';
import './index.less';
import { Layout } from 'antd';
import Head from '../components/Head';
import Foot from '../components/Foot';
import Body from '../components/Body';
import { localGet } from '../utils';
import { store } from '../store';
import { useContext, useEffect } from 'react';

const { Header, Footer, Sider, Content } = Layout;
export default (props) => {
    const context = useContext(store);

    useEffect(() => {
        const user = localGet('user');
        console.log(user);
        if (user) {
            context.user = user;
        }
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header theme="light">
                <Head></Head>
            </Header>
            <Content style={{ display: 'flex', flexDirection: 'column' }}>
                <Body children={props.children} />
            </Content>
            <Footer>
                <Foot />
            </Footer>
        </Layout>
    );
};

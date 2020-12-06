// import 'antd/dist/antd.css';
import './index.less';
import { Layout } from 'antd';
import Head from '../components/Head';
import Foot from '../components/Foot';
import Body from '../components/Body';
import { localGet } from '../utils';
import { useEffect } from 'react';
import { connect } from 'umi';

const { Header, Footer, Content } = Layout;

export default connect(({ global }) => {
    return { global };
})((props) => {
    useEffect(() => {
        const user = localGet('user');
        if (user) {
            props.dispatch({ type: 'global/save', payload: { user } });
        }
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header theme="light">
                <Head global={props.global}></Head>
            </Header>
            <Content style={{ display: 'flex', flexDirection: 'column' }}>
                <Body children={props.children} />
            </Content>
            <Footer>
                <Foot />
            </Footer>
        </Layout>
    );
});

// import 'antd/dist/antd.css';
import './index.less';
import { Layout } from 'antd';
import Head from '../components/Head';
import Foot from '../components/Foot';
import Body from '../components/Body';

const { Header, Footer, Sider, Content } = Layout;
export default (props) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header theme="light">
                <Head></Head>
            </Header>
            <Content>
                <Body children={props.children} />
            </Content>
            <Footer>
                <Foot />
            </Footer>
        </Layout>
    );
};

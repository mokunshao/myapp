// import 'antd/dist/antd.css';
import './index.less';
import { Layout } from 'antd';
import Head from '../components/Head';
const { Header, Footer, Sider, Content } = Layout;
export default (props) => {
    return (
        <Layout>
            <Header theme="light">
                <Head></Head>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

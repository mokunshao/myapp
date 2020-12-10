import './index.less';
import { Layout } from 'antd';
import Head from '../components/Head';
import Foot from '../components/Foot';
import Body from '../components/Body';
import { localGet } from '../utils';
import { useEffect } from 'react';
import { connect } from 'umi';
import { apiGetAllBoardName } from '../service';
// import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

export default connect(({ global }) => {
    return { global };
})((props) => {
    useEffect(() => {
        const user = localGet('user');
        if (user) {
            props.dispatch({ type: 'global/save', payload: { user } });
        }

        apiGetAllBoardName().then((res) => {
            if (res?.data) {
                props.dispatch({
                    type: 'global/save',
                    payload: { boards: res.data },
                });
            }
        });
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header theme="light">
                <Head global={props.global}></Head>
            </Header>
            <Content
                className="bg"
                style={{
                    padding: '24px',
                }}
            >
                <Body children={props.children} />
            </Content>
            <Footer>
                <Foot />
            </Footer>
        </Layout>
    );
});

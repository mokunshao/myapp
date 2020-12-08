import { useEffect } from 'react';
import { history, connect } from 'umi';
import ChangePasswordForm from '../components/ChangePasswordForm';
export default connect(({ global }) => ({ global }))((props) => {
    const { global } = props;

    return (
        <div style={{ padding: '2em' }}>
            <h1>设置</h1><h2>修改密码</h2>
            <ChangePasswordForm />
        </div>
    );
});

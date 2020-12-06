import { history } from 'umi';

export default () => {
    const onClick = () => {
        history.push('/');
    };
    return (
        <div
            style={{
                display: 'inline',
                // color: '#19aa8d',
                cursor: 'pointer',
                userSelect: 'none',
                fontWeight: 'bolder',
            }}
            onClick={onClick}
        >
            小论坛
        </div>
    );
};

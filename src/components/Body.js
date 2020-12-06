export default (props) => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                margin: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {props.children}
        </div>
    );
};

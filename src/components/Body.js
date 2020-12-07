export default (props) => {
    return (
        <div
            style={{
                flexDirection: 'column',
                maxWidth: '1000px',
                backgroundColor: 'white',
                margin: 'auto',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {props.children}
        </div>
    );
};

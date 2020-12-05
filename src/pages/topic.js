export default (props) => {
    const {
        location: { query },
    } = props;
    const { id } = query;
    return <div>Topic{id}</div>;
};

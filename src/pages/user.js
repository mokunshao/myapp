import { useEffect } from 'react';
import { apiGetUserInfo } from '../service';

export default (props) => {
    function getId() {
        const {
            location: { query },
        } = props;
        const { id } = query;
        return id;
    }

    useEffect(() => {
        const id = getId();
        console.log(id);
        apiGetUserInfo(id);
    }, []);

    return <div>id</div>;
};

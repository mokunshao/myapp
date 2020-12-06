import { apiGetTopicDetail } from '../service';
import { useState, useEffect } from 'react';
import TopicCard from '../components/TopicCard';
import CommentsCard from '../components/CommentsCard';
import CommentInput from '../components/CommentInput';

export default (props) => {
    const [loading, setLoading] = useState(false);
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);

    function getId() {
        const {
            location: { query },
        } = props;
        const { id } = query;
        return id;
    }

    useEffect(() => {
        const id = getId();
        setLoading(true);
        apiGetTopicDetail(id).then((res) => {
            if (res.data) {
                setTopic(res.data);
                setLoading(false);
            }
        });
    }, []);

    return (
        <div>
            <TopicCard data={topic} loading={loading}></TopicCard>
            <CommentsCard data={comments} />
            <CommentInput />
        </div>
    );
};

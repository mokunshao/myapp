import { apigetComments, apiGetTopicDetail } from '../service';
import { useState, useEffect } from 'react';
import TopicCard from '../components/TopicCard';
import CommentsCard from '../components/CommentsCard';
import CommentInput from '../components/CommentInput';
import { connect } from 'umi';

export default connect(({ global }) => ({ global }))((props) => {
    const [loading, setLoading] = useState(false);
    const [commentsloading, setCommentsloading] = useState(false);
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);

    function getId() {
        const {
            location: { query },
        } = props;
        const { id } = query;
        return id;
    }

    function getTopic(id) {
        setLoading(true);
        apiGetTopicDetail(id).then((res) => {
            if (res.data) {
                setTopic(res.data);
                setLoading(false);
            }
        });
    }

    function getComments(id) {
        setCommentsloading(true);
        apigetComments(id).then((res) => {
            if (res.data) {
                setComments(res.data);
                setCommentsloading(false);
            }
        });
    }

    useEffect(() => {
        const id = getId();
        getTopic(id);
        getComments(id);
    }, []);

    function reloadComment() {
        const id = getId();
        getComments(id);
    }

    return (
        <div>
            <TopicCard data={topic} loading={loading}></TopicCard>
            <CommentsCard
                data={comments}
                loading={commentsloading}
                callback={reloadComment}
            />
            {props.global.user.username && (
                <CommentInput id={topic.id} callback={reloadComment} />
            )}
        </div>
    );
});

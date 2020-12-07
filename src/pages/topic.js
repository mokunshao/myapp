import { apigetComments, apiGetTopicDetail } from '../service';
import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import TopicCard from '../components/TopicCard';
import CommentsCard from '../components/CommentsCard';
import CommentInput from '../components/CommentInput';
import { connect } from 'umi';

export default connect(({ global }) => ({ global }))((props) => {
    const [loading, setLoading] = useState(false);
    const [commentsloading, setCommentsloading] = useState(false);
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState(null);
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

    function reloadTopic() {
        const id = getId();
        getTopic(id);
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (id) => {
        setCommentId(id);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <TopicCard
                data={topic}
                loading={loading}
                callback={reloadTopic}
            ></TopicCard>
            <CommentsCard
                callback2={showModal}
                data={comments}
                loading={commentsloading}
                callback={reloadComment}
            />
            <Modal
                title="编辑评论"
                visible={isModalVisible}
                onOk={handleOk}
                okText="提交"
                cancelText="取消"
                onCancel={handleCancel}
            >
                {commentId}
            </Modal>
            {props.global.user.username && (
                <CommentInput id={topic.id} callback={reloadComment} />
            )}
        </div>
    );
});

import { apiGetComments, apiGetTopicDetail } from '../service';
import { useState, useEffect } from 'react';
import { Modal, Form } from 'antd';
import TopicCard from '../components/TopicCard';
import CommentsCard from '../components/CommentsCard';
import CommentInput from '../components/CommentInput';
import { connect } from 'umi';
import TopicCommentEditForm from '../components/TopicCommentEditForm';

const { useForm } = Form;

export default connect(({ global }) => ({ global }))((props) => {
    const [loading, setLoading] = useState(false);
    const [commentsloading, setCommentsloading] = useState(false);
    const [topic, setTopic] = useState({});
    const [comments, setComments] = useState([]);
    const [editComment, setEditComment] = useState(null);
    const [form] = useForm();

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
            if (res?.data) {
                setTopic(res.data);
                setLoading(false);
            }
        });
    }

    function getComments(id) {
        setCommentsloading(true);
        apiGetComments(id).then((res) => {
            if (res?.data) {
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

    function reloadComments() {
        const id = getId();
        getComments(id);
    }

    function reloadTopic() {
        const id = getId();
        getTopic(id);
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (item) => {
        setEditComment(item);
        form.setFieldsValue(item);
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
                callback={reloadComments}
            />
            <Modal
                title="编辑评论"
                visible={isModalVisible}
                onOk={handleOk}
                okText="提交"
                cancelText="取消"
                onCancel={handleCancel}
            >
                {editComment && (
                    <TopicCommentEditForm
                        form={form}
                        callback={reloadComments}
                        initData={editComment}
                    />
                )}
            </Modal>
            {props.global.user.username && (
                <CommentInput id={topic.id} callback={reloadComments} />
            )}
        </div>
    );
});

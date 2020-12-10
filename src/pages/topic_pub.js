import { history } from 'umi';
import TopicInput from '../components/TopicInput';

const callback = () => {
    history.go(-1);
};

export default () => {
    return <TopicInput callback={callback} />;
};

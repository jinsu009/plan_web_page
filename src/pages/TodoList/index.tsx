import { PageContainer } from '@ant-design/pro-components';
import FinishWorks from './components/FinishWorks';
import StartWorks from './components/StartWorks';
import styles from './index.less';
const TodoList = () => {
  return (
    <PageContainer title={'ToDoList Title'}>
      <div className={styles.todolist_wrapper}>
        <StartWorks />
        <FinishWorks />
      </div>
    </PageContainer>
  );
};

export default TodoList;

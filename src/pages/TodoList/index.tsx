import FinishWorks from './components/FinishWorks';
import StartWorks from './components/StartWorks';
import styles from './index.less';
const TodoList = () => {
  return (
    <div className={styles.todolist_wrapper}>
      <StartWorks />
      <FinishWorks />
    </div>
  );
};

export default TodoList;

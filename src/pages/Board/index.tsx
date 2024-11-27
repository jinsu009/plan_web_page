import { Button } from 'antd';
import styles from './indx.less';
const Board = () => {
  return (
    <div className={styles.board_wrapper}>
      <div className={styles.board_btn_wrapper}>
        <Button type="primary">글쓰기</Button>
        <Button type="primary" danger>
          삭제
        </Button>
      </div>
      <div className={styles.board_table_wrapper}></div>
    </div>
  );
};

export default Board;

import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer title={'PageContainer Title'} breadcrumbRender={false}>
      <div className={styles.container}>{initialState?.name}</div>
    </PageContainer>
  );
};

export default HomePage;

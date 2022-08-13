import history from '@/utils/history';
import styles from './index.less';

export default function IndexPage() {
  const to = () => {
    history.push('/users')
  }
  return (
    <div className={styles.home}>
      <h1 className={styles.title} onClick={to}>去抽卡</h1>
    </div>
  );
}

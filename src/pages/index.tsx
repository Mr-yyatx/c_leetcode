import history from '@/utils/history';
import styles from './index.less';

export default function IndexPage() {
  const to = () => {
    history.push('/users')
  }
  return (
    <div>
      <h1 className={styles.title} onClick={to}>Page index111222</h1>
    </div>
  );
}

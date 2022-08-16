import { homeBg } from '@/constants/constants';
import history from '@/utils/history';
import styles from './index.less';

export default function IndexPage() {
  const to = () => {
    history.push('/home')
  }

  return (
    <div className={styles.home}>
      <button className={styles.button}
        onClick={to}>
        home
      </button>
    </div>
  );
}

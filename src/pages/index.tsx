import { homeBg } from '@/constants/constants';
import history from '@/utils/history';
import styles from './index.less';

export default function IndexPage() {
  const to = () => {
    history.push('/users')
  }

  return (
    <div className={styles.home}>
      <img src={homeBg} />
      <button className={styles.button}
        onClick={to}>
        去抽卡
      </button>
    </div>
  );
}

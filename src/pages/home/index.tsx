import { backImg } from '@/constants/constants';
import styles from './index.less';

const Home = () => {
  return (
    <div className={styles.home}>
      <img src={backImg} className={styles.img} />
      <div className={styles.main}>
        <div className={styles.border}>
          <div className={styles.card}>万叶</div>
        </div>
        <div className={styles.table}>
          <div className={styles.table_head}>
            <span>110000 +</span>
          </div>
          <div className={styles.table_center}></div>
          <div className={styles.table_foot}>
            <span>祈愿1次</span>
            <span>祈愿10次</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
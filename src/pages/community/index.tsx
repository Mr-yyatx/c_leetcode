import Tab from '@/components/Tab';
import styles from './index.less';
import CommunityMenu from './components/CommunityMenu';
import Comments from './components/Comments';

export default () => {

  return (
    <div className={styles.home}>
      <Tab />
      <div className={styles.page}>
        <CommunityMenu />
        <Comments />
      </div>
    </div>
  )
}

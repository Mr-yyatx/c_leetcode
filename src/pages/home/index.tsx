import Slider from '@/components/Slider';
import Tab from '@/components/Tab';
import styles from './index.less';
import slider1 from '@/assets/slider1.png';
import slider2 from '@/assets/slider2.png';
import LearnDirection from './components/LearnDirection';
import BookList from './components/BookList';

export default function IndexPage() {
  return (
    <div className={styles.home}>
      <Tab />
      <div className={styles.page}>
        <Slider imageArray={[slider1, slider2]} />
        <LearnDirection />
        <BookList />
      </div>
    </div>
  );
}

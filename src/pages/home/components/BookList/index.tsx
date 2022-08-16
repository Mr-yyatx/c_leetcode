import Card from "@/components/Card"
import cover from '@/assets/cover.jpg';
import styles from './index.less';

const data = [{
  url: cover
}, {
  url: cover
}, {
  url: cover
}, {
  url: cover
}, {
  url: cover
}, {
  url: cover
}]

export default () => {
  return (
    <div className={styles.list}>
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  )
}
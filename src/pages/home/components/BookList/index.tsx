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
}, {
  url: cover
}, {
  url: cover
}]

export default () => {
  const handleList = (arr: any[]) => {
    let len = arr.length
    return [...arr, ...new Array(5 - len % 5)]
  }

  return (
    <div className={styles.list}>
      {handleList(data).map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  )
}
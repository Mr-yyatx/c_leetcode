import { Carousel } from 'antd';
import styles from './index.less';

interface Prop {
  imageArray: string[]
}

export default (props: Prop) => {
  return (
    <div className={styles.slider}>
      <Carousel autoplay>
        {props.imageArray.map((item, index) => (
          <img src={item} key={index} />
        ))}
      </Carousel>
    </div>
  )
}
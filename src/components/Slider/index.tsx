import { Carousel } from 'antd';
import styles from './index.less';

interface Prop {
  imageArray: string[]
}

export default (props: Prop) => {
  return (
    <Carousel autoplay>
      {props.imageArray.map((item, index) => (
        <img src={item} key={index} />
      ))}
    </Carousel>
  )
}
import { learnDirection } from '@/constants/constants';
import { useState } from 'react';
import styles from './index.less';

export default () => {
  const [nowIndex, setIndex] = useState(0)
  const onChange = (index: number) => {
    console.log(index);
    setIndex(index)
  }

  return (
    <div className={styles.direc}>
      学习方向
      {learnDirection.map((item, index) => (
        <div onClick={() => onChange(index)}
          key={index}
          className={`${index == nowIndex ? styles.be_choose : ''}`}>
          {item.label}
        </div>
      ))}
    </div>
  )
}
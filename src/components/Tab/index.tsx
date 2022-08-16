import menu from '@/constants/menu';
import styles from './index.less';
import icon from '@/assets/icon.png';
import { Avatar } from 'antd'
import { history } from 'umi';

export default () => {
  const style = { color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }
  const pushState = (url: string) => {
    history.push(url)
  }

  return (
    <div className={styles.tab}>
      <div>
        <img src={icon} className={styles.tab_icon} />
        {menu.map(item => (
          <div
            onClick={() => { pushState(item.link) }}
            className={styles.tab_item}
            key={item.key}>
            {item.title}
          </div>
        ))}
      </div>
      <div onClick={() => { pushState('/profile') }}>
        <Avatar style={style}>U</Avatar>
      </div>
    </div>
  )
}
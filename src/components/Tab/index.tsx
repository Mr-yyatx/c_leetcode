import menu from '@/constants/menu';
import styles from './index.less';
import icon from '@/assets/icon.png';
import { Avatar } from 'antd'
import { history } from 'umi';
import { getUserInfo } from '@/services/api';
import { useEffect, useState } from 'react';

export default () => {
  const [userInfo, setUserInfo] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await getUserInfo({})
      setUserInfo(res.data)
    }
    fetchData()
  }, [])

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
        <Avatar style={style}>{userInfo?.name}</Avatar>
      </div>
    </div>
  )
}
import { CommunityMenu } from '@/constants/constants';
import { useEffect, useState } from 'react';
import styles from './index.less';
interface MenuProp {
  key: string,
  label: string
}

export default () => {
  const [page, setPage] = useState<MenuProp>(CommunityMenu[0])

  useEffect(() => {
    console.log("切换到", page.label);
  }, [page])

  return (
    <div className={styles.body} style={{ height: CommunityMenu.length * 50 + 'px' }}>
      {CommunityMenu.map((item: MenuProp) => (
        <div key={item.key}
          onClick={() => { setPage(item) }}
          className={`${item.key == page.key ? styles.menu_hover : ''}`}>
          {item.label}
        </div>
      ))}
    </div>
  )
}

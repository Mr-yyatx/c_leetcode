import Editor from '@/components/Editor';
import { getComments } from '@/services/api';
import { useEffect } from 'react';
import styles from './index.less';

export default () => {
  const getComment = async () => {
    const res = await getComments({})
    console.log('getComments', res);
  }
  useEffect(() => {
    getComment()
  }, [])

  return (
    <div className={styles.body}>
      <Editor />
      <div className={styles.list}>
        list
      </div>
    </div>
  )
}

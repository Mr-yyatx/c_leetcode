import styles from './index.less';
interface Prop {
  data: any
}

export default (props: Prop) => {
  if (!props.data) {
    return (
      <div className={styles.card_none}>

      </div>
    )
  }
  return (
    <div className={styles.card}>
      <img src={props.data?.url} />
      <div className={styles.card_title}>初级算法</div>
    </div>
  )
}
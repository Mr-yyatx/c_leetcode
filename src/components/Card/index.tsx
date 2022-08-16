import styles from './index.less';
interface Prop {
  data: any
}

export default (props: Prop) => {
  return (
    <div className={styles.card}>
      <img src={props.data.url} />
    </div>
  )
}
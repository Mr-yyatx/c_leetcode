import styles from './index.less';
interface Prop {
  text: any
}
export default (props: Prop) => {
  return (
    <span className={styles.button}>{props.text}</span>
  )
}
import styles from "./Contenar.module.css"

export default function Contenar(props) {
  return (
    <div className={styles.contenar}>
      {props.children}
    </div>
  )
}

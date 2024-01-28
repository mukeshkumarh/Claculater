import styles from "./Contenar.module.css"

export default function Contenar(props) {
  return (
    <div className={styles.Contenar}>
      {props.children}
    </div>
  )
}

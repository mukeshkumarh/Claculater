import styles from "../App.module.css";

export default function Display({calval}) {
  return (
    <div>
       <input className={styles.display} type="text" value={calval} />
    </div>
  )
}

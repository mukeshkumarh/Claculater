import styles from "./Item.module.css";
export default function Item({ foodItems }) {
  const handleclack = (e) => {
    console.log(e);
    console.log(`${foodItems} being bought`);
  };
  return (
    <>
      <li className={`${styles["kg-item"]}list-group-item`}>
        <samp className={styles["kg-spam"]}>{foodItems} </samp>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={(e)=> handleclack(e)}
        >
          Buy
        </button>
      </li>
    </>
  );
}

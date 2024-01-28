
import styles from "./FoodInput.module.css"

export default function FoodInput({handleChang}) {
  
  return (
    <div>
      <input type="text" placeholder="Enter food items"
      className={styles.foodInput}
      onKeyDown={handleChang}
      />
    </div>
  )
}

import styles from "../App.module.css";

export default function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      <div className={styles.buttonscontainer}>
        {buttonNames.map((buttonName, Index) => (
          <button
            key={Index}
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}

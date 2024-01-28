import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import ButtonsContainer from "./Component/ButtonsContainer";
import Display from "./Component/display";
export default function App() {
  return (
    <div className={styles.calculater}>
      <center>
        <Display />
        <ButtonsContainer />
      </center>
    </div>
  );
}

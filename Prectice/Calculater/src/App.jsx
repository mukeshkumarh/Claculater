import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import ButtonsContainer from "./Component/ButtonsContainer";
import Display from "./Component/display";
import Contenar from "./Component/Contenar";
import { useState } from "react";
export default function App() {
  const[calval,setCalval]=useState("");
  const onButtonClick = (buttonTaxt) =>{
    if (buttonTaxt === "C"){
      setCalval("");
    }else if(buttonTaxt === "="){
      const result = eval(calval)
      setCalval(result);
    }else{
      const newDisplayvalu = calval + buttonTaxt;
      setCalval(newDisplayvalu)
    }
  }
  return (
    <div className={styles.calculater}>
      <Contenar>
        <Display calval={calval} />
        <ButtonsContainer onButtonClick ={onButtonClick} />
      </Contenar>
    </div>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Component/FoodItems";
import ErrorMessage from "./Component/ErrorMessage";
import Contenar from "./Component/Contenar";
import FoodInput from "./Component/FoodInput";
import { useState } from "react";
function App() {
  
  const [foodItems, setFoodItems] = useState([]);
  
  
const handleChang = (event) =>{
  if(event.key === "Enter") {
    let newFoodItem = event.target.value;
   let newItems = [...foodItems,newFoodItem]
   setFoodItems(newItems);
  }
}

 

  return (
    <>
      <Contenar>
        <h1>Healthy Food</h1>
        <FoodInput handleChang={handleChang} />

        
        <FoodItems ajay={foodItems} />
        <ErrorMessage ajay={foodItems} />
      </Contenar>
      <Contenar>
        <p>
          Above is the list of Healthy foods that are good for your heath and
          well being
        </p>
      </Contenar>
    </>
  );
}

export default App;

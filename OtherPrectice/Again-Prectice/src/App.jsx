import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Component/FoodItems";
import ErrorMassage from "./Component/ErrorMassage";
import Contenar from "./Component/Contenar";
import FoodInput from "./Component/FoodInput";
import { useState } from "react";

export default function App() {
  
  
  const [foodItems,setfoodItems]=useState(["Salad","Green Vegetable","Roti"])
  const  handleonChang = (event) =>{
   if(event.key === "Enter"){
    let newFoodItem = event.target.value;
    let newItem = [...foodItems,newFoodItem];
    setfoodItems(newItem)
   }
};
  return (
    
    <Contenar>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMassage data={foodItems} />
      <FoodInput handleonChang={handleonChang}></FoodInput>
      
      <FoodItems data={foodItems} />
      </Contenar>
    
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Component/FoodItems";
import ErrorMessage from "./Component/ErrorMessage";
function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      {/* {foodItems.length == 0 && <h3>I am still hungry</h3>} */}
     <FoodItems ajay={foodItems}/>
     <ErrorMessage ajay={foodItems}/>
    </>
  );
}

export default App;

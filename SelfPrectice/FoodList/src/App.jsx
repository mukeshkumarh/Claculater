import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMassag from "./Compent/ErrorMassag";
import FoodItems from "./Compent/FoodItems";
import Contenar from "./Compent/Contenar";
import FoodInut from "./Compent/FoodInut";

export default function App() {
  let FoodItem = ["Dal", "apple", "banana", "rice"];
  return (
    <Contenar>
      <h1 className="food-heading">Helthy Food</h1>
      <FoodInut />
      <FoodItems FoodItem={FoodItem} />
      <ErrorMassag foodItem={FoodItem} />
    </Contenar>
  );
}

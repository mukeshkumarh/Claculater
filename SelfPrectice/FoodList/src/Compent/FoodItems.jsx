import Item from "./Item";


export default function FoodItems({FoodItem}) {
   
  return (
    <>
       <ul className="list-group">
      {FoodItem.map((item)=>( 
       <Item key={item} foodItem={item}/>
        ))}
  </ul>
    </>
  )
}

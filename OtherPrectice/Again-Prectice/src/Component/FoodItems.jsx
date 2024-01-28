import Items from "./Items";

export default function FoodItems({data}) {
    
  return (
    <>
      <ul className="list-group">
        {data.map((item) => (
          <Items key={item} foodItem={item}></Items>
        ))}
      </ul>
    </>
  );
}

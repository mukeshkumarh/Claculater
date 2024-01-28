export default function Items({ foodItem,handleBybutton }) {
 
  return (
    <>
      <li className="list-group-item kg-item">
        <span className="kg-span"> {foodItem} </span>
        <button className="button"
        onClick={handleBybutton}
       > Buy</button>
      </li>
    </>
  );
}

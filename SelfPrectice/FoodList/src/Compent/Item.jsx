

export default function Item({foodItem}) {
    const handleClack =(event)=>{
        console.log(` ${foodItem} being bought`)
    }
  return (
    <>
       <li className="list-group-item kg-item">
       <span className="kg-span">{foodItem}</span>
       <button className="button"
       onClick={handleClack}
       >Buy</button>
       </li>
    </>
  )
}

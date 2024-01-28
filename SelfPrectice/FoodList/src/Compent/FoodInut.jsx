

export default function FoodInut() {
    const handleChang =(event)=>{
console.log(event.target.value);
    }
  return (
    <>
      
      <input type="text"
       placeholder="Enter Food Items here"
       className="Food-input"
       onChange={handleChang}
       ></input>
    
    </>
  )
}



export default function FoodInput({handleonChang}) {
  
  return (
    <>
      <input type="text"
       placeholder="Enter Food Items here"
       className="Food-input"
       onKeyDown={handleonChang}
       ></input>
    </>
  )
}

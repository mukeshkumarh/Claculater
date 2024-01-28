
export default function TodoItem({ todoDate,todoName}) {
     
    return (
      
      <>
      
        <div className="container text-center">
            <div className="row">
              <div className="col-6">{todoDate}</div>
  
              <div className="col-4">{todoName}</div>
              <div className="col-2">
                <button type="button" className="btn btn-danger">
                Delete
                </button>
              </div>
            </div>
            </div>
      </>
    )
  }
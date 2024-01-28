export default function TodoItem({ todoDate, todoName }) {
  return (
    <>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">{todoName}</div>
            <div className="col-sm-4">{todoDate}</div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


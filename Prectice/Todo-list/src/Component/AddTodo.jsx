import React from 'react'

export default function AddTodo() {
  return (
    <>
      <div className="row">
            <div className="col-sm-6">
              <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-sm-4">
              <input type="date" />
            </div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
    </>
  )
}

import React from 'react'




function Contact({name, phone, city, onDelete}) {
  return (
    <div className="col-md-8 mb-4 mx-2">
      <div  className="card">
        <div className="">
          <div className="justify-content-between">
            <img src="" alt="" />
            <h6>Name  : {name}  </h6>
            <h6>Phone : {phone} </h6>
            <h6>City  : {city}  </h6> 
          </div>
        </div>
        <div className="card-footer bg-light d-flex">
          <button className="col-3 del-btn btn btn-sm btn-danger " onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact

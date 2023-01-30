import React from 'react'




function Contact({id,name, phone, city, onDelete}) {
  return (
    <div className="table">
      <table className="table table-bordered border-dark border-opacity-75 table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr key={id}>
          <th scope="row">{name}</th>
          <td>{phone}</td>
          <td>{city}</td>
          <td>
            <button className="col-6 del-btn btn btn-sm btn-danger " onClick={onDelete}>
              Delete
            </button>          
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contact

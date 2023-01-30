import React, { useState } from 'react';
import Contact from './Contact';
import './Style.css';


export function ContactList() {

  const [contacts,setContacts] = useState
  ([
    {id:'1', name:'ALAMI', phone:'0664374731', city:'Tanger'},
    {id:'2', name:'ALLALI', phone:'07089573', city:'Casa Blanca'},
    {id:'3', name:'ELNASSIRI', phone:'0658974213', city:'Rabat'}, 
  ]);
  

  const [newContact, setNewContact] = useState('')

  const [searchV, setSearchV] = useState([]);



  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.push(newContact);
    setNewContact({ name: '', phone: '', city: ''}); 
  };

  const DeleteContact = (id) =>{
    let delC = contacts.filter((c) =>{
      return c.id !== id
    })
    setContacts(delC);    
};



  const Search = (e) => {
    e.preventDefault();
    let searchC = contacts.filter((c) => {
      return c.city.toLowerCase().includes(searchV.toLowerCase());
    });
    setContacts(searchC);
    setSearchV('')
  };




  return (
    <div>
        <form className="c1" onSubmit={handleSubmit}>
            <div>

              <div className="c4 d-md-flex mx-5 mb-4">
                <input type="text" className='form-control shadow bg-body border border-info rounded fs-5 mx-3'  style={{width:"350px", height:"38px"}} value={searchV} onChange={(e)=>{setSearchV(e.target.value)}}  placeholder="Search by city"/>
                <input  className='fs-5 btn btn-outline-info m-auto btn-sm mb-4' type="button" value="Search" onClick={Search}/>
              </div>
          
              <div className="d-md-flex mx-2"> 
                <label className="form-label text-light fs-4">Name:</label>  
                <input type="text" name="name" className='form-control m-auto shadow mb-5 bg-body border border-info rounded fs-5 mx-4'  style={{width:"600px", height:"40px"}} value={newContact.name} onChange={handleChange}  placeholder="Name" />
              </div>

              <div className="d-md-flex mx-2">
                <label className="form-label text-light fs-4">Phone:</label>
                <input type="text" name="phone" className='form-control m-auto shadow mb-5 bg-body border border-info rounded fs-5 mx-4'  style={{width:"600px", height:"40px"}} value={newContact.phone} onChange={handleChange} placeholder="Phone" />
              </div>
              <div className=" d-md-flex mx-2">
                <label className="form-label text-light fs-4">City:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         
                <input type="text" name="city" className='form-control m-auto shadow mb-5 bg-body border border-info rounded fs-5 mx-4'  style={{width:"600px", height:"40px"}} value={newContact.city} onChange={handleChange} placeholder="City" />
              </div> 
              <div> 
                <input  className='fs-5 btn btn-lg text-light shadow mb-4' type="submit" value="Add Contact" style={{width:"500px", background: '#4CAF50'}}/>
                {/* <button className='fs-4 text-light shadow mb-4' style={{width:"400px", height:"50px", background: '#4CAF50', float:'none'}} type="submit" >Add Contact</button> */}
              </div>
            </div>
            <div>
              
              
            </div>
            <div className="d-md-flex mx-2">
              <input  className='fs-5 btn btn-outline-info m-auto mx-2' style={{width:"300px"}} type="button" value="Sort"/>
              <input  className='fs-5 btn btn-outline-info m-auto mx-2' style={{width:"300px"}} type="button" value="view"/>
            </div> 
            
            

        </form>

        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name} 
            phone={contact.phone} 
            city={contact.city}
            onDelete={()=> DeleteContact(contact.id)}     
          />
        ))};

    </div>
  )
}

export default ContactList;
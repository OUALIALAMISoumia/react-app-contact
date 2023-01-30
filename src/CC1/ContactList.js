import React, { useState, useRef } from "react";
import Contact from "./Contact";
import { v4 as uuid } from "uuid";
import "./Style.css";

export function ContactList() {
  const [contacts, setContacts] = useState([
    { id: uuid(), name: "MLAMI", phone: "0664374731", city: "Tanger" },
    { id: uuid(), name: "ALLALI", phone: "0708957321", city: "Casa Blanca" },
    { id: uuid(), name: "ELNASSIRI", phone: "0658974213", city: "Rabat" },
  ]);

  const [newContact, setNewContact] = useState();

  const [searchV, setSearchV] = useState([]);

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const refName = useRef();
  const refPhone = useRef();
  const refCity = useRef();

  const addContact = (e) => {
    e.preventDefault();
    const newCont = {
      id: uuid(),
      name: refName.current.value,
      phone: refPhone.current.value,
      city: refCity.current.value,
    };
    setContacts([...contacts, newCont]);
    refName.current.value = "";
    refPhone.current.value = "";
    refCity.current.value = "";
  };

  const DeleteContact = (idp) => {
    let delC = contacts.filter((c) => {
      return c.id !== idp;
    });
    setContacts(delC);
  };

  const Search = (e) => {
    e.preventDefault();
    let searchC = contacts.filter((c) => {
      return c.city.toLowerCase().includes(searchV.toLowerCase());
    });
    setContacts(searchC);
    setSearchV("");
  };

  const sortContacts = (e) => {
    e.preventDefault();
    const sortType = contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setNewContact(sortType);
  };

  return (
    <div className="c1 col-9 mx-auto mt-5 py-2 px-4">
      <div className="mb-3 row text-white fs-6">
        <div className="from-text col c4 d-md-flex mx-5 mb-3">
          <input
            type="text"
            className="form-control mx-5 shadow bg-body border border-info rounded fs-6 "
            style={{ width: "350px", height: "38px" }}
            aria-describedby="searshHelp"
            value={searchV}
            onChange={(e) => {
              setSearchV(e.target.value);
            }}
            placeholder="Search by city"
          />
          <input
            className="fs-6 btn btn-outline-info m-auto btn-lg mb-4 mx-1"
            type="button"
            value="Search"
            onClick={Search}
          />
        </div>
        <div className="from-text c4 col d-md-flex mx-3 mb-4">
          <label className="form-label">Name: </label>
          <input
            type="text"
            className="form-control mx-3 shadow"
            style={{ width: "500px", height: "40px" }}
            aria-describedby="namelHelp"
            // value={newContact.name}
            onChange={handleChange}
            placeholder="Name"
            ref={refName}
          />
        </div>
        <div className="from-text c4 col d-md-flex mx-3 mb-4">
          <label className="form-label">Phone: </label>
          <input
            type="text"
            className="form-control mx-3 shadow"
            style={{ width: "500px", height: "40px" }}
            aria-describedby="phoneHelp"
            // value={newContact.phone}
            onChange={handleChange}
            placeholder="Phone"
            ref={refPhone}
          />
        </div>

        <div className="from-text c4 col d-md-flex mx-3 mb-4">
          <label className="form-label">City: </label>
          <input
            type="text"
            className="form-control mx-4 shadow"
            style={{ width: "500px", height: "40px" }}
            aria-describedby="cityHelp"
            // value={newContact.city}
            onChange={handleChange}
            placeholder="City"
            ref={refCity}
          />
        </div>
      </div>

      <div className="from-submit row">
        <input
          className="col-5 mx-auto btn btn-lg mb-4"
          onClick={addContact}
          type="submit"
          value="Add Contact"
          style={{ width: "500px", background: "#4CAF50" }}
        />

        <div className="from-button col m-auto mx-3 mb-5">
          <input
            className="fs-5 btn btn-outline-info m-auto mx-2"
            style={{ width: "200px" }}
            type="button"
            value="Sort"
            onClick={sortContacts}
          />
        </div>
      </div>

      <table className="col-md-12 mt-5">
        {contacts.map((contact) => {
          return (
            <tr className="row" key={contact.id}>
              <Contact
                name={contact.name}
                phone={contact.phone}
                city={contact.city}
                onDelete={() => DeleteContact(contact.id)}
              />
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ContactList;

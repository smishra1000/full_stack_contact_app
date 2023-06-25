import profilePic from "../images/dummy-profile.jpg"
import { useState, useEffect } from "react"
import CreateContact from "./CreateContact"
import Header from "./Header"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

function Contacts() {
    // const [contacts, setContacts] = useState([])

    const [searchkey, setSearchKey] = useState("")

    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(() => {
        getAllContacts();

    }, [])
    // get all conatcts from store
    const contacts = useSelector(state => state.contactsData.contacts)

    const searchByName = () => {
        fetch(`http://localhost:7000/contacts/byName/${searchkey}`).then(function (res) {
            return res.json()
        }).then(function (data) {
            dispatch({ type: "set_all_contacts", payload: data })
            // setContacts(data)
        })
    }
    const getAllContacts = () => {
        fetch("http://localhost:7000/contacts/allcontacts").then(function (res) {
            return res.json()
        }).then(function (data) {
            dispatch({ type: "set_all_contacts", payload: data })
            //setContacts(data)
        })
    }

    const deleteContact = (id) => {
        fetch(`http://localhost:7000/contacts/${id}`, { method: "delete" }).then(function (res) {
            return res.json()
        }).then(function (data) {
            getAllContacts()
        })
    }

    const goToEdit = (id) => {
        dispatch({ type: "set_selected_contact", payload: id })
        navigate("/editcontact/" + id)
    }
    return (
        <div className="container">
             <div className="row">
             <Header />
            </div>
          
            <div className="row">

                <div className="col-md-4">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchkey} onChange={(e) => setSearchKey(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={(e) => searchByName(e)}>Search</button>
                </div>
            </div>

            <div className="row">
                {contacts.map((contact) => {
                    return (
                        <div className="col-md-3">
                            {/* <div className="card">
                                <img className="card-img-top" src={`http://localhost:7000/uploads/${contact.image}`} alt="Card image cap"  width="100%"/>
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text"> email:{contact.email}</p>
                                    <p className="card-text"> phone:{contact.phone}</p>
                                    <p className="card-text"> address:{contact.address}</p>

                                    <a href="#" className="btn btn-primary" onClick={()=>goToEdit(contact._id)}>edit</a>
                                    <a href="#" className="btn btn-danger ms-3" onClick={()=>deleteContact(contact._id)}>delete</a>
                                </div>
                            </div> */}
                            <figure className="user-card green">
                                <figcaption>
                                    <img  src={`http://localhost:7000/uploads/${contact.image}`} alt="Milestone Admin" className="profile"/>
                                        <h5>{contact.name}</h5>
                                        <h6>{contact.phone}</h6>
                                        <p>{contact.address}</p>
                                        <ul className="contacts">
                                            <li>
                                                <a href="#">
                                                    {contact.email}
                                                </a>
                                            </li>

                                        </ul>
                                        <div className="clearfix">
                                            <span  onClick={()=>goToEdit(contact._id)} className="badge text-bg-primary">edit</span>
                                            <span onClick={()=>deleteContact(contact._id)} className="badge text-bg-secondary">delete</span>


                                        </div>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}


export default Contacts
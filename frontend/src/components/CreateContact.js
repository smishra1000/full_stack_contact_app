import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"

function CreateContact(props) {
    const [contact,setContact] = useState({name:"",email:"",address:"",phone:"",image:""})
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const onFieldChange = (e)=>{
        //setContact((contact)=> {...contact,[e.target.name]:e.target.value})
        setContact((contact)=>{
            return {...contact,[e.target.name]: e.target.value}
        })
    }

    const saveContact = ()=>{
        fetch(`http://localhost:7000/contacts/create`,{method:"post",headers: {
            'Content-Type': 'application/json'
            },
        //make sure to serialize your JSON body
        body: JSON.stringify(contact)}).then(function (res) {
            return res.json()
        }).then(function (data) {
            dispatch({type:"add_contact",payload:data})
            setContact((contact)=>{
                return {...contact,name:"",email:"",phone:"",address:"",image:""}
            })
            navigate("/allcontacts")
        })
    }

    const onFileChange = (e)=>{
            e.preventDefault();   
            const data = new FormData();
            data.append("profilepic", e.target.files[0]);
            axios({
              method: "POST",
              url: "http://localhost:7000/contacts/profilepic",
              data: data,
            }).then((res) => {       
                setContact((contact)=>{
                    return {...contact,image:res.data.image}
                })
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name"  value={contact.name} onChange={(e)=>onFieldChange(e)}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" value={contact.email} onChange={(e)=>onFieldChange(e)}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="phone" placeholder="Enter phone" name="phone" value={contact.phone} onChange={(e)=>onFieldChange(e)}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="address" placeholder="Enter address" name="address" value={contact.address} onChange={(e)=>onFieldChange(e)}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Profile pic</label>
                    <div class="col-sm-10">
                        <input type="file" class="form-control" id="address" name="file" onChange={(e)=>onFileChange(e)}/>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-3">
                <button className="btn btn-success" onClick={()=>saveContact()}>save Contact</button>
                </div>
            </div>

        </div>
    )
}

export default CreateContact
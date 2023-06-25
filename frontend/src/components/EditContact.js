import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"

function EditContact() {
    const [contact,setContact] = useState({name:"",email:"",address:"",phone:""})
    const navigate = useNavigate()
    const params = useParams();
    console.log(params)
    useEffect(()=>{
        //dispatch({type:"get_selected_contact",payload:params.id})

        fetch(`http://localhost:7000/contacts/byId/${params.id}`).then(function (res) {
            return res.json()
        }).then(function (data) {
            setContact(data)
        })
    },[])

    const onFieldChange = (e)=>{
        //setContact((contact)=> {...contact,[e.target.name]:e.target.value})
        setContact((contact)=>{
            return {...contact,[e.target.name]: e.target.value}
        })
    }

    const updateContact = ()=>{
        fetch(`http://localhost:7000/contacts/edit/${params.id}`,{method:"PUT",headers: {
            'Content-Type': 'application/json'
            },
        //make sure to serialize your JSON body
        body: JSON.stringify(contact)}).then(function (res) {
            return res.json()
        }).then(function (data) {
            setContact((contact)=>{
                return {...contact,name:"",email:"",phone:"",address:""}
            })
            navigate("/allcontacts")
        })
    }
    const goBack = ()=>{
        navigate("/allcontacts")
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

            </div>
            <div className="row">
                <div className="col-md-4">
                <button onClick={()=>updateContact()}>Update Contact</button>
                <button onClick={()=>goBack()}>goback</button>
                </div>
           
            </div>

        </div>
    )
}

export default EditContact
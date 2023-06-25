import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPaasword] = useState("")
    const navigate = useNavigate()

    const onEmailChange = (e)=>{
        //setContact((contact)=> {...contact,[e.target.name]:e.target.value})
       setEmail(e.target.value)
    }
    const onPasswordChange = (e)=>{
        //setContact((contact)=> {...contact,[e.target.name]:e.target.value})
       setPaasword(e.target.value)
    }

    const login = ()=>{
        if(email==="test@gmail.com" && password==="test"){
            navigate("/allcontacts")
        }else {
            alert("invalid credentials")
        }
        // fetch(`http://localhost:7000/contacts/create`,{method:"post",headers: {
        //     'Content-Type': 'application/json'
        //     },
        // //make sure to serialize your JSON body
        // body: JSON.stringify(contact)}).then(function (res) {
        //     return res.json()
        // }).then(function (data) {
        //     navigate("/allcontacts")
        // })
    }
    return (
        <div className="container">
            <div className="row">
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>onEmailChange(e)}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="passwrod" class="form-control" id="password" placeholder="Enter Password" name="password" value={password} onChange={(e)=>onPasswordChange(e)}/>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-3">
                <button className="btn btn-primary" onClick={()=>login()}>login</button>
                </div>
            
            </div>
            <p>if not registerd please  <Link to="/signup">signup</Link></p>

        </div>
    )
}

export default Login
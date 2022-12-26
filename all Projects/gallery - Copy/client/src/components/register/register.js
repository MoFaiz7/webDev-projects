import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    // creating state of user
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        dob:"",
        gender:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const register = () => {
        const { name, email, password, reEnterPassword, dob, gender } = user
        if( name && email && password && dob &&(password === reEnterPassword)){
            let dateNow = new Date()
            let curYear = dateNow.getFullYear();
            let givenYear = 100*user.dob[0] + 10*user.dob[1] + 1*user.dob[2] + user.dob[3];
            let curMon = dateNow.getMonth()+1;
            let givenMon = user.dob[5]*1 + user.dob[6];
            let curDate = dateNow.getDate();
            let givenDate = user.dob[8]*1 + user.dob[9];

            //validating the date of birth
            if(givenYear > curYear || givenMon > curMon || givenDate >= curDate){alert("invalid date of birth");}
            else{
                axios.post("http://localhost:8000/register", user)
                .then( res => {
                if(res.data.valid===true){
                alert(res.data.message)
                history.push("/login")
                }
                else{
                    alert("invlid input ")
                }
            })}
        } else {
            alert("invlid input ")
        }
        
    }

    return (
        <div className="register">
            {/* {console.log("User", user)} */}

            {/* //taking details of the user */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
             <input type="date" name="dob" value={user.dob} placeholder="Date of Birth" onChange={ handleChange }></input>
            

<div onChange={ handleChange} className="gen" >
    <h4>Gender</h4>
        <input type="radio" value="male" name="gender" />Male  <br/>
        <input type="radio" value="female" name="gender" />Female  <br/>
        <input type="radio" value="other" name="gender" /> Other  
      </div>
      {/* <p>{user.dob}</p> */}

            <div className="button" onClick={register} >Register</div> 
            <div className="gen1">or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register
import React, { useState } from "react";
import registrationform from '../styles/registrationform.css'

const RegistrationForm = () => {
  const [first, setFirst] = useState({value:"" , isTouched:false});
  const [last, setLast] = useState("");
  const [email, setEmail] = useState({value:"" , isTouched:false});
  const [password, setPassword] = useState({
    value:"",
    isTouched:false
  });
  const [role, setRole] =useState("role")

  const clearForm =()=>{
    setFirst({value:"" , isTouched:false})
    setLast("")
    setEmail({value:"" , isTouched:false})
    setPassword({
        value:"",
        isTouched:false,
    })
    setRole("role")
}

const firstErrorMessage =()=>{
  return <span>Enter the first name</span>
}


const emailErrorMessage =()=>{
  return <span>Enter email in correct way</span>
}

const validateEmail =(inputEmail) =>{
  const emailReg = /\w+.?\w+([0-9])?@\w+.\w+/ig;
  // if(emailReg.test(inputEmail)){
  //   console.log("email is valid")
  //   return true;
  // }
  // console.log("email is not valid")
  // return false
  return emailReg.test(inputEmail)
}

const passwordErrorMessage =()=>{
  return <span>password should be at least 8 characters</span>
  
}

const isPasswordValid =()=>{
  if(password.isTouched && password.value.length < 8 ){
    console.log("pass is not valid")
    return false
  }
  console.log("pass valid")
  return true ;
}


const isFormValid=()=>{
 return(
  first.value.length >1 && 
  validateEmail(email.value)&&
  password.value.length >=8 &&
  role !== "role"
 );
     
}
const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created")
    clearForm();
 
  };
  return (
    <div>
      {console.log(isFormValid())}
      <form className="border border-2 w-50 m-auto  d-flex justify-content-center" onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="field ">
            <label>
              First name <sup>*</sup>
              <br />
              <input
                placeholder="First name"
                value={first.value}
                onChange={(e) => setFirst({...first, value:e.target.value})}
                onBlur={e=> setFirst({...first, isTouched:true})}
              />
            </label>
            <br/>
            {first.value.length< 1 && first.isTouched?  firstErrorMessage(): null}
          </div>

          <div className="field ">
            <label>
              Last name 
              <br />
              <input
                placeholder="Last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </label>
          </div>

          <div className="field">
            <label>
              Email address <sup>*</sup>
              <br />
              <input
                type="email"
                placeholder="Email address"
                value={email.value}
                onChange={(e) => setEmail({...email, value: e.target.value})}
                onBlur={e => setEmail({...email, isTouched: true})}
              />
            </label>
            <br/>
            {!validateEmail(email.value) &&  emailErrorMessage()}
          </div>

          <div className="field">
            <label>
              password <sup>*</sup>
              <br />
              <input
                type="password"
                minLength={8}
                placeholder="password"
                value={password.value}
                onChange={(e) => setPassword({...password , value: e.target.value})}
                onBlur={e=> setPassword({...password, isTouched: true})}
              />
            </label>
            <br/>
            {password.value.length <8 && password.isTouched? passwordErrorMessage() : null}
          </div>

          <div className="field">
            <label>
              Role <sup>*</sup>
              <br />
              <select   value={role} onChange={e=> setRole(e.target.value)} >
                <option value={"role"}>Role</option>
                <option value={"individual"} >Individual</option>
                <option value={"business"} >Business</option>
              </select>
            </label>
          </div>

          <div className="field">
            <button className="btn btn-primary float-end " disabled={!isFormValid()}>Sign in</button>
          </div>

        </fieldset>
      </form>
    </div>
  );
};

export default RegistrationForm;

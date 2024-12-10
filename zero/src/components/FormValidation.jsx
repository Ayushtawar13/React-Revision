import React, { useState } from 'react'
import '../style.css';
const FormValidation = () => {
    const [userName , setUserName] = useState('');
    const [errorName , setErrorName] = useState('');
    
    const [email , setEmail] = useState("");
    const [errorEmail , setErrorEmail] = useState("");
    
    const [password , setPassword] = useState("");
    const [errorPassword , setErrorPassword] = useState("");
    
    const [confirmPassword , setConfirmPassword] = useState("");
    const [errorConfirmPassword , setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
    
    
    const validate = (e) => {
        e.preventDefault();

        if(userName.length > 8){
            setErrorName("");
            setUserColor('green');
        }else{
            setErrorName("UserName must be of 8 Letters");
            setUserColor("red");
        }

        if(email.includes('@gmail')){
            setErrorEmail("")
            setEmailColor('green')
        }else{
            setErrorEmail("Email should have @gmail")
            setEmailColor('red')
        }

        if (password.length > 8) {
            setErrorPassword("");
            setPasswordColor("green");
          } else {
            setErrorPassword("Password should be 8 letters long ");
            setPasswordColor("red");
          }
      
          if (password != "" && password == confirmPassword) {
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
          } else {
            setErrorConfirmPassword("Passwords didn't matched.");
            setConfirmPasswordColor("red");
          }
    }
  return (
    <div className='card'>
        <div className='card-image'></div>
        <form >
            <input type="text"
            value={userName}
            placeholder='Name'
            style={{borderColor:userColor}}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p className='error'>{errorName}</p>
           
            <input type="email"
            value={email}
            placeholder='Email'
            style={{borderColor:emailColor}}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className='error'>{errorEmail}</p>
           
            <input type="password"
            value={password}
            placeholder='Password'
            style={{borderColor:passwordColor}}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className='error'>{errorPassword}</p>
           
            <input type="password"
            value={confirmPassword}
            placeholder='ConfirmPassword'
            style={{borderColor:confirmPasswordColor}}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className='error'>{errorConfirmPassword}</p>

            <button onClick={validate} className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation
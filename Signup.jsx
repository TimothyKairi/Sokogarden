import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    // initialize the four states 
   const [username, setUsername] = useState("")
   const [email, setEmail] =useState("")
   const [password, setPassword] =useState("")
   const [phone, setPhone] =useState("")

//    3 states of posting data
// loading, error, success
const [loading, setLoading] =useState("")
const [error, setError] =useState("")
const [success, setSuccess] =useState("")

// function to handle signup
// our function is going to be async -await
const handleSignup = async (e)=>{
e.preventDefault()
setLoading("Please wait...")
try {
  
    
    // create an empty envelope to store our data 
    // we will call that envelope as formdata
    const formdata= new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    // we need to post the data 
    const response = await axios.post("https://thejackal.pythonanywhere.com/api/signup", formdata)
    setSuccess(response.data.message)
    setLoading("")
} catch (error) {
    // network error
    setError(error.message)
    setLoading("")
    
}
}
   
  return (
    <div className='row justify-content-center p-4'>
      <div className="col-md-6 card shadow p-4">
        <h2 className='text-center'>Sign up</h2>
        {/* bind the 3 states */}
        <h1 className='text-danger'>{loading}</h1>
        <h1 className='text-success'>{success}</h1>
        <h1 className='text-dark'>{error}</h1>
        
       
        <form action="" onSubmit={handleSignup}>
            <input type="text" placeholder='Username' className='form-control' onChange={(e)=>setUsername(e.target.value)}/><br />
            <input type="email" placeholder='E-mail' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} /><br />
            <input type="tel" placeholder='Enter Phone' className='form-control' onChange={(e)=>setPhone(e.target.value)}/><br />
            <input type="submit" value={"Signup"} className='btn btn-primary form-control' /> <br />
            <p className='text-center'>Already have an account. <a href="/Signin">Sign in</a> </p>
        </form>
    
      </div>
    </div>
  )
}

export default Signup
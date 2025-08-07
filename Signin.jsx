import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
  let navigate= useNavigate()
  // initialize the 2 states
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  // initialize 3 states for posting data 
  const [loading, setLoading]= useState("")
  const [success, setSuccess]= useState("")
  const [error, setError]= useState("")

  // define function to handle signin
  const handleSign = async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // create an empty envelope called formdata 
      const formdata= new FormData()
      formdata.append("email", email)
      formdata.append("password", password)

      // post data
      const response = await axios.post("https://thejackal.pythonanywhere.com/api/signin", formdata)
      setSuccess(response.data.message)
      // check if the user exists
      if(response.data.user){
        // it means login successful/ redirect user to home page
        navigate("/")
        // save user to local storage 

      }

      setLoading("")
    } catch (error) {
     setError(error.message) 
     setLoading("")
    }

  }

  return (
    <div className='row justify-content-center p-4'>

      <div className='col-md-6 card shadow p-4'>
        <h2 style={{font:'revert'}} className='text-center'>Sign in</h2>
        {/* bind the 3 states */}
          <h3 className='text-danger'>{loading}</h3>
        <h3 className='text-success'>{success}</h3>
        <h3 className='text-dark'>{error}</h3>
        
        <form action="" onSubmit={handleSign}>
          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
          <input type="password" placeholder='Enter password' className='form-control'onChange={(e)=>setPassword(e.target.value)} /><br />
          <input type="submit" value={"Sign In"} className='btn btn-primary w-100' /> 
        </form>
        {/* link to navigate a signup  */}
        <br />
        <Link to="/signup" className='text-center'>Don't have an Account? Sign up</Link>

      </div>
    </div>
  )
}

export default Signin
import React, {useState} from 'react'
import axios from 'axios'

const Addproducts = () => {
  // initialize the 4 states 
  const [product_name, setProductName]= useState("")
  const [product_description, setProductDescription]= useState("")
  const[product_cost, setProductCost]=useState("")
  const[product_photo, setProductPhoto]=useState("")

  // define the 3 states for posting data 
  const [loading, setLoading]= useState("")
  const [success, setSuccess]= useState("")
  const [error, setError]= useState("")

  // define the function to add product 
  const handleAddProduct = async(e)=>{
  e.preventDefault()
  setLoading("Please wait...")
  try {
    // create an empty envelope for our data 
  const formdata= new FormData()
  formdata.append("product_name", product_name)
  formdata.append("product_description", product_description)
  formdata.append("product_cost", product_cost)
  formdata.append("product_photo", product_photo)

  // we need to post the data 
  const response= await axios.post("https://thejackal.pythonanywhere.com/api/addproduct",formdata)
  setSuccess(response.data.message)
  setLoading("")
} catch (error) {
  setError(error.message)
  setLoading("")
  
    
  }
  }
  return (

    <div className='row justify-content-center p-4'>
      <div className='col-md-6 card shadow p-4'>
        <h2 className='text-center text-danger'>Add Product</h2>

         {/* bind the 3 states */}
          <h3 className='text-danger'>{loading}</h3>
        <h3 className='text-success'>{success}</h3>
        <h3 className='text-dark'>{error}</h3>


        <form action="" onSubmit={handleAddProduct}>
          <input type="text" placeholder='Enter product name' className='form-control' onChange={(e)=>setProductName(e.target.value)} /><br />
          <textarea name="" id="" placeholder='Enter product description' className='form-control'  onChange={(e)=>setProductDescription(e.target.value)}></textarea><br />

          <input type="number" placeholder='Enter product cost' className='form-control' onChange={(e)=>setProductCost(e.target.value)} /><br />
          {/* product photo */}
          <label htmlFor="">Product photo</label><br />
          <input type="file" className='form-control' accept='image/*'  onChange={(e)=>setProductPhoto(e.target.files[0])}/><br />
          <button type='submit' className='btn btn-primary w-100'>Add product</button>
        </form>

      </div>

    </div>
  )
}

export default Addproducts
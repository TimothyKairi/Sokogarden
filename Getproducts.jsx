import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Getproducts = () => {
  // initialize 3 states for getting/fetching data 
  const[loading, setLoading]= useState("")
  const[products, setProducts]= useState([])
  const[error, setError]= useState("")
  const[searchproduct, setSearchProduct]= useState("")

  // function to get products
  const getproducts= async()=>{
    setLoading("Please wait...")

    try {
      const response = await axios.get("https://thejackal.pythonanywhere.com/api/get_products_details")

      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }

  }
  // Call the function 
  useEffect(()=>{
       getproducts()
    }, []
  )

  // products.map( (product)=> console.log("single product", product))
    const imagepath = "https://thejackal.pythonanywhere.com/static/images/"

    const filteredproducts = products.filter(product=>
      product.product_name.toLowerCase().includes(searchproduct.toLowerCase())
      ||
       product.product_description.toLowerCase().includes(searchproduct.toLowerCase())
       ||
        product.product_cost.toString().includes(searchproduct.toLowerCase())
    )
  return (
    <div>
      {/* we will have a search filter */}
      <div className='row justify-content-center'>
        <input type="text" placeholder='Search products...' className='form-control' onChange={(e)=>setSearchProduct(e.target.value)}/>

      </div>


      {/* we will design a single item/product  */}
      <section className="row">
         {/* we will map our products here */}
         {filteredproducts.map ((product) => (
          
         

        <div className="col-md-3 card shadow mt-4">
          <img src={imagepath + product.product_photo} alt="" />
          <h4>{product.product_name}</h4>
          <p>{product.product_description}</p>
          <b className='text-danger'>Ksh {product.product_cost}</b><br />
          <button className='btn btn-primary mb-2'>Add to cart</button>
          <button className='btn btn-danger mb-2'>Purchase now</button>
        </div>

        ))}
      </section>
    </div>
  )
}

export default Getproducts
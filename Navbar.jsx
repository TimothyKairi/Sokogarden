import React from 'react'

const Navbar = () => {
  return (
    <section className="row">
     <div className="col-md-12">
        <nav className="navbar navbar-expand-md bg-light navbar-light">
            {/* <!-- we will have 3 main parts --> */}
             {/* <!-- 1. brand name --> */}
              {/* <!-- 2. button --> */}
               <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                <span className="navbar-toggler-icon"></span>
               </button>
               {/* <!-- 3. the links --> */}
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <div className="navbar-nav">
              <a href="#" className="navbar-brand"><b className='text-primary'>Soko<span className='text-info-emphasis'>Garden</span></b></a>
                     <a href="/" className="nav-link active">Get Products</a>
                     <a href="/addproducts" className="nav-link">Add Products</a>
                     
                      
                    </div>
                    {/* put the signup and signin button on right hand side */}
                    <div className='ms-auto'>
                        <a href="/signup" className='btn btn-info me-2'>Sign up</a>
                        <a href="/signin" className='btn btn-outline-dark m-2'>Sign in</a>
                    </div>

                </div>
        </nav>
     </div>
     </section>
  )
}

export default Navbar
import React from 'react'

import { Link } from 'react-router-dom'


const navbar =()=> {
  

  
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              {/* <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li> */}
              <li className="nav-item"><Link to="/business" className="nav-link">business</Link></li>
              <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
              <li className="nav-item"><Link to="/Health" className="nav-link">Health</Link></li>
              <li className="nav-item"><Link to="/Science" className="nav-link">Science</Link></li>
              <li className="nav-item"><Link to="/sports" className="nav-link">sports</Link></li>
              <li className="nav-item"><Link to="/technology" className="nav-link">technology</Link></li>
              
            </ul>
          </div>

           
            
          </div>
        
      </nav>
    )
 
}

export default navbar


import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */} 
              {/* ye anchor tag or href kam to kry ga lakn page reload ho ga is wja se react router dom ka tag Link-to use kry gy  */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/about">{props.AboutText}</Link>
            </li>

          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button> */}
            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
              <input className="form-check-input my-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="dark"?"light":"dark"} Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = { title: PropTypes.string }; // ye types define kr rha hy k isky ilawa koi or type ki value nahi aa skti
//Navbar.defaultProps={title:"Deafult Title"}   //ye tb show ho ga jb apny koi value khud component ki js mai pass na ki ho 
//Navbar.propTypes={title: PropTypes.string.isRequired}; // agr ap ny title pass nhi kya to isrequired ki wja se error aiye ga ...ye lazmi kr daita hy is prop ka pass krwana. or default prop bhi pass na ho agr tb verna error nhi aiye ga 
Navbar.defaultProps = { title: "Deafult Title", AboutText: "Default About" }  //Suppose agr app.js mai navbar mai koi prop define nhi kya or defaut mai kr dya to wo error nhi dy ga wo default se uski value pick kr ly ga.

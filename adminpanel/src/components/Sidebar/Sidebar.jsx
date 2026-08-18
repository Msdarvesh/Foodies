import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
const Sidebar = ({sidebarVisible}) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible ? '':'d-none'}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">
                  <img src={logo} alt='' height={32} width={35}  /> <p className='d-inline ms-2 '>Admin Panel</p>
                </div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add"><i className="bi bi-plus-circle me-2"></i>
                    Add Food</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list"><i className="bi bi-card-list me-2"></i>
                    List Food</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders"><i className="bi bi-bag-check me-2"></i>
                    Orders</Link>
        
                </div>
            </div>
  )
}

export default Sidebar
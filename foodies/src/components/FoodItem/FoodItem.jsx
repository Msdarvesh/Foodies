// import React from 'react'
// import { Link } from 'react-router-dom'

// const FoodItem = ({ name, description, id, imageUrl, price }) => {
//     return (
//         <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
//             <Link
//                 to={`/food/${id}`}
//                 className="card text-decoration-none text-dark"
//                 style={{ maxWidth: "320px" }}
//             >
//                 <img src={imageUrl} className="card-img-top" alt="Product Image" height={300} width={60}/>
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">{description}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <span className="h5 mb-0">&#8377;{price}</span>
//                         <div>
//                             <i className="bi bi-star-fill text-warning"></i>
//                             <i className="bi bi-star-fill text-warning"></i>
//                             <i className="bi bi-star-fill text-warning"></i>
//                             <i className="bi bi-star-fill text-warning"></i>
//                             <i className="bi bi-star-half text-warning"></i>
//                             <small className="text-muted">(4.5)</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card-footer d-flex justify-content-between bg-light">
//                     <Link className="btn btn-primary btn-sm " to={`/food/${id}`}>View Food</Link>
//                     <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-heart"></i></button>
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default FoodItem
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'

const FoodItem = ({ name, description, id, imageUrl, price }) => {
    const {incrementQuantity,decrementQuantity,quantities}=useContext(StoreContext);
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
            <div
                
                className="card text-dark w-100 d-flex flex-column"
                style={{ maxWidth: "320px", margin: "0 auto" }}
            >
                <Link to={`/food/${id}`}>
                <img 
                    src={imageUrl} 
                    className="card-img-top" 
                    alt={name}
                    style={{ 
                        height: "250px", 
                        objectFit: "cover",
                        width: "100%" 
                    }}
                /></Link>
                <div className="card-body d-flex flex-column flex-grow-1">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="h5 mb-0">&#8377;{price}</span>
                        <div className="text-nowrap">
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                            <small className="text-muted ms-1">(4.5)</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border-top">
                    <Link className="btn btn-primary btn-sm" to={`/food/${id}`}>View Food</Link>
                    {quantities[id] > 0 ? (
                        <div className="d-flex align-items-center gap-2">
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => decrementQuantity(id)}>-</button>
                            <span>{quantities[id]}</span>
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => incrementQuantity(id)}>+</button>
                        </div>
                    ) : (
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => incrementQuantity(id)}>
                            <i className="bi bi-cart-plus"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FoodItem
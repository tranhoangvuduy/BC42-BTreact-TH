import React from 'react'

function ShoeItem({ item }) {
  return (
    <div className="card">
        <img src={item.image} alt={item.name} className="card-image" />
        <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.price}</p>
        <button className="btn btn-dark">Add to cart</button>
        </div>
       
    </div>
  );
}

export default ShoeItem
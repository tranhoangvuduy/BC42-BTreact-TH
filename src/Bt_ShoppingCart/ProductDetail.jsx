import React from 'react'

function ProductDetail({ product }) {
  if(!product) {
    return null;
  }

  return (
    <div className="mt-3 row">
      <div className="col-sm-4">
        <h3 className="text-center">
          {product.name}
        </h3>
        <img src={product.image} alt={product.name} width="100%" height="300px" />
      </div>
      <div className="col-sm-8">
        <h3>CHI TIẾT SẢN PHẨM</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Alias</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>ShortDescription</td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetail
import React from 'react'

function UserList({ products, onDeleteProduct, onSelectProduct }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>


        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.description}</td>
              <td>
                <img src={product.image} alt="" height={70} width={70}/>
              </td>
              <td>{product.price}</td>
              <td>
                <button className='btn btn-warning me-2' onClick={() => onSelectProduct(product)}>Edit</button>
                <button className='btn btn-danger' onClick={() => onDeleteProduct(product.id)} >Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default UserList
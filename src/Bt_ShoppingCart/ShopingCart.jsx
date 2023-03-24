import React, {useState} from 'react'
import data from "./data.json";
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

function ShopingCart() {
   
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const handleGetProduct = (product) => {
        setSelectedProduct(product);
    }
  return (
    <div className="container">
        <h1 className='text-center'>Shoe Shop</h1>
        <ProductList products={data} onSelectProduct={handleGetProduct}/>
        <ProductDetail product={selectedProduct}/>
    </div>
  )
}

export default ShopingCart
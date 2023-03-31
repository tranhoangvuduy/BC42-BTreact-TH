import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Search from './Search';
import UserForm from './UserForm'
import UserList from './UserList'

function UserManagement() {
  //  State quản lý danh sách sản phẩm
  const [products, setProducts] = useState([]);

  // State quản lý product đang được chọn
  const [selectedProduct, setSelectedProduct] = useState({});

  // State quản lý giá trị tìm kiếm
  const [searchByName, setSearchByName] = useState("");

  // Viết hàm call API để lấy danh sách products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://63f6e87eab76703b15c677f7.mockapi.io/api/Products", {
        params: {
          name: searchByName || undefined,
        },
      });
      setProducts(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  //  Viết hàm xử lý nhận vào object product và thêm hoặc cập nhật product
  const handleSubmit = async (product) => {
    const { id, ...payload } = product;
    try {
      if (id) {
        // Cập nhật
        await axios.put(`https://63f6e87eab76703b15c677f7.mockapi.io/api/Products/${id}`, payload);
      } else {
        // Thêm mới
        await axios.post("https://63f6e87eab76703b15c677f7.mockapi.io/api/Products", payload);
      }
      // Gọi hàm fetchProducts sau khi call API (create/update)
      fetchProducts();
    } catch (error) {
      console.log(error);
    }



  };

  //  viết hàm xử lý nhận productId và xóa product 
  const handleDeleteProduct = async (productId) => {
    // const newProducts = products.filter((product) => product.id !== productId);
    // setProducts(newProducts);
    try {
      await axios.delete(`https://63f6e87eab76703b15c677f7.mockapi.io/api/Products/${productId}`);

      // Sau khi xóa thành công dữ liệu chỉ thay đổi ở phía server
      // Cần gọi lại hàm fetchProducts để gọi API lấy danh sách products mới nhất và set lại cho state products
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào Object product và lưu vào state selectedProduct
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByName(searchString);

    // khi state searchByName thay đổi, ta muốn gọi lại hàm fetchProduct
    // Đưa state searchByName vào array của useEffect

  };

  useEffect(() => {
    fetchProducts();
  }, [searchByName]);

  return (
    <div className='container-fluid'>
      <h1 className='text-center text-primary'>Products Management</h1>
      <div className="card">
        <div className="card-header bg-dark text-white">Products Form</div>
        <div className="card-body">
          <UserForm onSubmit={handleSubmit} product={selectedProduct} onReset={() => setSelectedProduct({})} />
        </div>

      </div>
      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <UserList products={products} onDeleteProduct={handleDeleteProduct} onSelectProduct={handleSelectProduct} />
      </div>

    </div>
  )
}

export default UserManagement
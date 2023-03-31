import React, { useState, useEffect } from 'react'

function UserForm({ onSubmit, product, onReset }) {
  // State quản lý các giá trị của các input trong form

  const [values, setValues] = useState({
   
    name: "",
    type: "",
    description: "",
    image: "",
    price: "",
  });

  // Hàm setup của useEffect sẽ được chạy ở lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop product bị thay đổi
  useEffect(() => {
    
    // Dùng giá trị mới của prop product để cập nhật cho state values
    setValues(product);
  }, [product]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    // Chặn hành vi submit mặc định của form
    evt.preventDefault();
    // tạo object product từ các giá trị của input
    // const product = { ...values, id: Math.floor(Math.random() * 100) };
    // Gọi prop onSubmit và truyền vào Object values 
    onSubmit(values);
    
    // Gọi hàm  handleResetForm để set giá trị trên các input về rỗng
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      name: "",
      type: "",
      description: "",
      image: "",
      price: "",
    });
    onReset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" value={values.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Type</label>
        <input type="text" name="type" className="form-control" value={values.type} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input type="text" name="description" className="form-control" value={values.description} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input type="text" name="image" className="form-control" value={values.image} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" name="price" className="form-control" value={values.price} onChange={handleChange} />
      </div>
      <button type='submit' className='btn btn-success me-2'>Submit</button>
      <button type='button' className='btn btn-secondary' onClick={handleResetForm}>Reset</button>
    </form>
  )
}

export default UserForm
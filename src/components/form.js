import React, { useState, useEffect } from 'react';
import Electronics from './ElectronicItem';
import SkinCare from './SkinCare';
import FoodItem from './FoodItem';

const Form = () => {
  const initialProductState = {
    productId: '',
    sellingPrice: '',
    productName: '',
    category: 'food',
  };

  const [product, setProduct] = useState(initialProductState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input fields
    if (!product.productId || !product.sellingPrice || !product.productName) {
      alert('Please fill out all fields.');
      return;
    }

    // Add the new product to the products array
    setProducts([...products, product]);

    // Clear the form and set initial state
    setProduct(initialProductState);

    // Save the products to local storage
    localStorage.setItem('products', JSON.stringify([...products, product]));
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Id:
          <input
            type="text"
            name="productId"
            value={product.productId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Selling Price:
          <input
            type="text"
            name="sellingPrice"
            value={product.sellingPrice}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Choose Category:
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
            <option value="skincare">Skincare</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Product</button>
        
      </form>

      <h2>Added Products</h2>
      {/* <ul>
        {products.map((p, index) => (
          <li key={index}>
            {`Product Id: ${p.productId}, Selling Price: ${p.sellingPrice}, Product Name: ${p.productName}, Category: ${p.category}`}
          </li>
        ))}
       </ul> */}
          <Electronics data ={product} />
           <SkinCare data ={product}/>
           <FoodItem data ={product}/>
           
    </div>
  );
};

export default Form;

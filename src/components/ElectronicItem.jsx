import React from 'react'

const Electronics = (props) => {
  const [products, setProducts] = React.useState()

 
  React.useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

  }, [props]);

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    // Update state and local storage after deleting
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };
  
  if(!products){
    return <h1>Electronics</h1>
  }
  return (
    <div>
      <h1>Electronics</h1>
      {
    products.map((p, index) => (
          (p.category ===  "electronics"?        <li key={index}>
            {`Product Id: ${p.productId}, Selling Price: ${p.sellingPrice}, Product Name: ${p.productName}, Category: ${p.category}`}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>: "")
      ))}
    </div>
  )
}

export default Electronics

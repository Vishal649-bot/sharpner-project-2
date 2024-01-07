import React from 'react'

const SkinCare = (props) => {
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
    return <h1>SkinCare</h1>
  }
  return (
    <div>
      <h1>SkinCare</h1>
      {
    products.map((p, index) => (
          (p.category ===  "skincare"?        <li key={index}>
            {`Product Id: ${p.productId}, Selling Price: ${p.sellingPrice}, Product Name: ${p.productName}, Category: ${p.category}`}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>: "")
      ))}
    </div>
  )
}

export default SkinCare

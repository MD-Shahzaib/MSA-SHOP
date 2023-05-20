import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch All Products.
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/product/getProducts');
      const data = await response.json();
      setProducts(data.data);
      console.log('data.data ==> ', data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="col" key={index}>
            <div className="product-card bg-white border rounded-3" onClick={() => { navigate(`/product/${item._id}`) }}>
              <div className="Product-Image-box">
                <img src={item.productImage} alt="Product-Img" className='Product-image' />
              </div>
              <div className="py-2 px-2">
                <h5>{item.title}</h5>
                <span>{item.category}</span>
                {/* <h6 className="mt-2">{item.description.slice(0, 40)}...</h6> */}
                <h5 className="mt-2">Rs : {item.price}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card;
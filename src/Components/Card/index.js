import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';
// import data from '../../Config/Data.js';
// import '../../globalStyle.css';

const Card = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/product/getProducts');
      const data = await response.json();
      setProducts(data);
      console.log('data ==> ', data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  console.log('products ==> ', products);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="col" key={item._id}>
            <div className="product-card bg-white border rounded-3" onClick={() => { navigate(`/product/${item._id}`) }}>
              <div className="Product-Image-box">
                <img src={item.productImage} alt="Product-Img" />
              </div>
              <div className="py-2 px-2">
                <h5>{item.data.title}</h5>
                <h6 className="mt-2">{item.description.slice(0, 40)}...</h6>
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
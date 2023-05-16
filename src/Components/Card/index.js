import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../Config/Data.js'
import './card.css'

const Card = () => {

  // GET PRODUCTS FROM DATABASE
  useEffect(() => {
    async function allProducts() {
      try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await fetch("http://localhost:4000/product/getProducts");
        const json = await response.json();
        console.log("json ===> ", json);
      } catch (error) {
        console.log("error ===> ", error);
      }
    }
    allProducts();
  }, []);

  const navigate = useNavigate()

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col" key={index}>
            <div className="product-card bg-white border rounded-3" onClick={() => { navigate(`/product/${item.productId}`) }}>
              <div className="Product-Image-box">
                <img src={item.productImage} alt="Product-Img" />
              </div>
              <div className="py-2 px-2">
                <h5>{item.productTitle}</h5>
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
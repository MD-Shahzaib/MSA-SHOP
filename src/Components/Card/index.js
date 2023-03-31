import React from 'react'
import './card.css'
import data from '../../Config/Data.js'
import { Link, useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate()
  console.log('data', data);
  return (
    <>
      <div className="container bg-primary px-4 py-4">
        <div className="row row-cols-md-4 g-4">
          {data.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="product-card bg-white" onClick={() => { navigate('/detail') }}>
                  <div className="Product-Image-box">
                    <img src={item.productImage} alt="Product-Image" />
                  </div>
                  <div className="card-text">
                    <h5>{item.productTitle}</h5>
                    <h6 className="mt-2">{item.description.slice(0, 40)}...</h6>
                    <h5 className="mt-2">Rs : {item.price}</h5>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Card;
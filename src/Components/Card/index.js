import React from 'react'
import './card.css'
import data from '../../Config/Data.js'
import { useNavigate } from 'react-router-dom'

const Card = () => {

  const navigate = useNavigate()

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col" key={index}>
            <div className="product-card bg-white border rounded-3" onClick={() => { navigate(`/detail/${item.productId}`) }}>
              <div className="Product-Image-box">
                <img src={item.productImage} alt="Product-Image" />
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
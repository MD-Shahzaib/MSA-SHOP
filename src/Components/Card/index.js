import React from 'react'
import './card.css'
import data from '../../Config/Data.js'

const Card = () => {
  console.log('data', data);
  return (
    <>
      <div className="container bg-primary px-4 py-4">
        <div className="row row-cols-md-4 g-4">
          {data.map((item, index) => {
            return (
              <div className="col" key={item.productId}>
                <div className="card">
                  <img src={item.productImage} className="card-img" alt="Product-Image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.productTitle}</h5>
                    <p className="card-text">{item.description.slice(0, 40)}...</p>
                    <h5 className="card-title">Rs : {item.price}</h5>
                    <a href="/" className="btn btn-primary">Details...</a>
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
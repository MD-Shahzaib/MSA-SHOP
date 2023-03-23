import React from 'react'
import data from '../../Config/Data.js'

const Card = () => {
  console.log('data', data);
  return (
    <>
      <div className="container bg-primary px-4 py-4">
        <div className="row row-cols-md-3 g-4">
          {data.map((item, index) => {
            return (
              <div className="col" key={item.productId}>
                <div className="card" style={{ width: "18rem" }}>
                  <h5 className="fs-2">{item.productId}</h5>
                  <img src={item.productImage} className="card-img-top" alt="Product-Image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.productTitle}</h5>
                    <p className="card-text">{item.description.slice(0, 15)}</p>
                    <a href="/" className="btn btn-primary">Details...</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <div className="container bg-primary px-4 py-4">
        {data.map((item, index) => {
          return (
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={item.productImage} className="card-img-top" alt="Product-Image" />
                  <div className="card-body">
                    <h5 className="fs-2">{item.productId}</h5>
                    <h5 className="card-title">{item.productTitle}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="/" className="btn btn-primary">Details...</a>
                  </div>
                </div>
              </div>
            </div>)
        })}
      </div> */}
    </>
  )
}

export default Card;
import React from 'react'
// import { useParams } from 'react-router-dom';
import './detail.css'
// Components.
import Navbar from '../Navbar';
import Footer from '../Footer';

const data = {
    "productId": 1,
    "productImage": "https://cdn.homeshopping.pk/product_images/m/134/1__22526_thumb.jpg",
    "productTitle": "product 1",
    "description": "React class-based components: In this react course, we will see how to learn react using projects.",
    "price": "10000",
    "seller": "product seller 1",
    "email": "seller email",
    "phone": "seller no 23423423",
    "quantity": "1 to 10",
    "condition": "New",
    "address": "street 1 city 1 zipcode 1",
}

const Detail = () => {
    // const { id } = useParams();
    return (
        <>
            <Navbar />
            {/* Main-Container */}
            <div className='container border border-dark my-2'>

                <h1>{data.productTitle}</h1><hr />
                <div className='detailBox'>
                    {/* left side */}
                    <div className='border border-dark'>
                        <div className='productImageBox border border-dark'>
                            <img src={data.productImage} className='productImage' alt="productImage" />
                        </div>
                        <div>
                            <div className='border border-dark'>
                                <h2>Details</h2>
                                <h5>Title : {data.productTitle}</h5>
                                <h5>Price : {data.price}</h5>
                                <h5>Condition : {data.condition}</h5>
                                <h5>Quantity : {data.quantity}</h5>
                            </div>
                            <div className='border border-dark'>
                                <h2>Description</h2><hr />
                                <h5>{data.description}</h5>
                                <div className="btn btn-primary">Add to Cart</div>
                                <div className="btn btn-primary">Buy Now</div>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='border border-dark'>
                        <div className='border border-dark'>
                            <h5>{data.price}</h5>
                            <h5>{data.productTitle}</h5>
                        </div>
                        <div className='border border-dark'>
                            <h2>Seller Detail</h2><hr />
                            <h5>Seller : {data.seller}</h5>
                            <h5>Seller Email : {data.email}</h5>
                            <h5>Seller Phone NO : {data.phone}</h5>
                            <h5>Seller Adress : {data.address}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail;
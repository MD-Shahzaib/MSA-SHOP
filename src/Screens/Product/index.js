import React from 'react'
import './product.css'
// Components.
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const data = {
    "productId": 1,
    "productImage": "https://cdn.homeshopping.pk/product_images/m/134/1__22526_thumb.jpg",
    "productTitle": "IPhone XR",
    "productPrice": "10,000",
    "productQuantity": "10",
    "productCondition": "New",
    "productDescription": "React class-based components In this react course, we will see how to learn react using projects.",
    "sellerName": "Shayan Akhter",
    "sellerPicture": "https://olx-pak-clone.netlify.app/images/iconProfilePicture.png",
    "sellerEmail": "shayan@gmail.com",
    "sellerPhone": "34234534534",
    "sellerAddress": "Saddar, Karachi, Pakistan",
}

const Product = () => {

    // Get Seconds.
    const date = new Date();
    const minutes = date.getSeconds()

    return (
        <>
            <Navbar />
            {/* Detail Conatainer */}
            <div className="container py-2 px-2 my-5">
                <h1>{data.productTitle}</h1><hr />
                <div className="detail-container mt-3">
                    {/* left-box  */}
                    <div className="left-box">
                        {/* Image-box */}
                        <div className="image-box border rounded bg-dark mb-2">
                            <img src={data.productImage} className="img-size" alt="Product-Image" />
                        </div>
                        {/* detail-box */}
                        <div className="detail-box border py-2 px-2 rounded">
                            <div className="detail-sub-box1">
                                <h5>Details</h5>
                                <div className='row-detail'>
                                    <p>Title : {data.productTitle}</p>
                                    <p>Price : {data.productPrice}</p>
                                </div>
                                <div className='row-detail'>
                                    <p>Condition : {data.productCondition}</p>
                                    <p>Quantity : {data.productQuantity}</p>
                                </div>
                            </div><hr />
                            <div className="detail-sub-box2">
                                <h5>Description</h5>
                                <p>{data.productDescription}</p>
                            </div>
                        </div>
                    </div>
                    {/* right-box */}
                    <div className="right-box">
                        <div className="border rounded py-2 px-2 mb-2">
                            <h2>Rs : {data.productPrice}</h2>
                            <h5>{data.productTitle}</h5>
                            <div className="d-flex justify-content-between align-item-center">
                                <span>{data.sellerAddress}</span>
                                <span>{minutes} days ago</span>
                            </div>
                        </div>
                        <div className="seller-detail border rounded py-2 px-2 mb-2">
                            <h5>Seller Desciption</h5>
                            <div className="seller-profile d-flex align-items-md-center">
                                <img src={data.sellerPicture} className="seller-pic" alt="seller-profile-pic" />
                                <p className="m-2">{data.sellerName}</p>
                            </div><hr />
                            <p>Email : {data.sellerEmail}</p>
                            <p>Phone : {data.sellerPhone}</p>
                            <p>Address : {data.sellerAddress}</p>
                            <div className="button-box">
                                <Link to="/chat/productId">
                                    <button className="btn btn-primary mx-1 my-1">Chat with Seller</button>
                                </Link>
                                <Link to="/cart">
                                    <button className="btn btn-dark mx-1 my-1">Add to Cart</button>
                                </Link>
                                <Link to="/checkout">
                                    <button className="btn btn-success mx-1 my-1">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="service-detail border rounded py-2 px-2">
                            <h5>Services</h5><hr />
                            <p>Nationwide Delivery</p>
                            <p>Buyer Protection Guarantee</p>
                            <h5>Guarantee</h5><hr />
                            <p>Trusted Sellers Only</p>
                            <p>7 days Return Policy</p>
                            <p>Customer Service   03-111-476-725</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product;
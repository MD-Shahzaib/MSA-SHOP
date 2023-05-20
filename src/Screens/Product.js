import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// Components.
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Product = () => {

    const [singleProduct, setSingleProduct] = useState({});
    // Grab Id.
    const { id } = useParams();
    // Get Seconds.
    const date = new Date();
    const minutes = date.getSeconds();

    // Fetch Single Products by Id.
    const fetchSingleProduct = async () => {
        try {
            const response = await fetch(`http://localhost:4000/product/getSingleProduct/${id}`);
            const singleData = await response.json();
            setSingleProduct(singleData.data);
            console.log('singleData.data ==> ', singleData.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchSingleProduct();
    }, []);

    const data = {
        "productQuantity": "10",
        "productCondition": "New",
        "sellerName": "Shayan Akhter",
        "sellerPicture": "https://olx-pak-clone.netlify.app/images/iconProfilePicture.png",
        "sellerEmail": "shayan@gmail.com",
        "sellerPhone": "34234534534",
        "sellerAddress": "Saddar, Karachi, Pakistan",
    }

    // Destructuring-singleProduct.
    const { _id, title, category, price, description, productImage } = singleProduct;

    return (
        <>
            <Navbar />
            {/* Detail Conatainer */}
            <div className="container py-2 px-2 my-5">
                <h1>{title}<span className='text-muted fs-5'> | {category} | </span><span className='text-muted fs-5'>{_id}</span></h1><hr />
                <div className="detail-container mt-3">
                    {/* left-box  */}
                    <div className="left-box">
                        {/* Image-box */}
                        <div className="image-box border rounded bg-dark mb-2">
                            <img src={productImage} className="img-size" alt="Product-pic" />
                        </div>
                        {/* detail-box */}
                        <div className="detail-box border py-2 px-2 rounded">
                            <div className="detail-sub-box1">
                                <h5>Details</h5>
                                <div className='row-detail'>
                                    <p>Title : {title}</p>
                                    <p>Price : {price}</p>
                                </div>
                                <div className='row-detail'>
                                    <p>Condition : {data.productCondition}</p>
                                    <p>Quantity : {data.productQuantity}</p>
                                </div>
                            </div><hr />
                            <div className="detail-sub-box2">
                                <h5>Description</h5>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    {/* right-box */}
                    <div className="right-box">
                        <div className="border rounded py-2 px-2 mb-2">
                            <h2>Rs : {price}</h2>
                            <h5>{title}</h5>
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
};

export default Product;
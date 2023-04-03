import React from 'react'
import './detail.css'
// Components.
import Navbar from '../Navbar';
import Footer from '../Footer';

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

const Detail = () => {

    // Get Seconds.
    const date = new Date();
    const minutes = date.getSeconds()

    return (
        <>
            <Navbar />
            {/* Detail Conatainer */}
            <div className="container py-2 px-2 my-5">
                <h1>{data.productTitle}</h1><hr />
                <div className="detail-container">
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
                                <h5 className="m-2">{data.sellerName}</h5>
                            </div><hr />
                            <h6>Email : {data.sellerEmail}</h6>
                            <h6>Phone : {data.sellerPhone}</h6>
                            <h6>Address : {data.sellerAddress}</h6>
                            <div className="btn btn-dark">Chat with Seller</div>
                        </div>
                        <div className="service-detail border rounded py-2 px-2">
                            <h5>Services</h5><hr />
                            <h6>Nationwide Delivery</h6>
                            <h6>Buyer Protection Guarantee</h6>
                            <h5>Guarantee</h5><hr />
                            <h6>Trusted Sellers Only</h6>
                            <h6>7 days Return Policy</h6>
                            <h6>Customer Service   03-111-476-725</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail;
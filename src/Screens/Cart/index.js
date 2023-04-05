import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
// React-Icons.
import { GrFormDown } from 'react-icons/gr';
import { FaTrash } from 'react-icons/fa';
import { HiPlus, HiMinus } from 'react-icons/hi';

// Todo Fetch from api.
const cartItems = [
    {
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
    }]

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container border rounded my-5 py-3 px-3">

                {/* Cart Template Start*/}
                <section className="h-100 rounded" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100 py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10">
                                {/* Cart-Header */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                    <div>
                                        <p className="mb-0">
                                            <span className="text-muted mx-1">Sort by :</span>
                                            <a href="/" className="text-body text-decoration-none">
                                                <span>price</span>
                                                <GrFormDown />
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Cart-Items */}
                                <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2"
                                                ><HiMinus /></button>
                                                <input
                                                    id="form1" min="0" max="10" name="quantity"
                                                    type="number" placeholder='Quantity'
                                                    className="form-control form-control-sm" />
                                                <button className="btn btn-link px-2"
                                                >
                                                    {/* <HiPlusCircle /> */}
                                                    <HiPlus />
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">$499.00</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="/" className="text-danger"><FaTrash /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2"
                                                ></button>

                                                <input id="form1" min="0" name="quantity"
                                                    type="number"
                                                    className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2"
                                                ></button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">$499.00</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="/" className="text-danger"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2"
                                                ></button>

                                                <input id="form1" min="0" name="quantity"
                                                    type="number"
                                                    className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2"
                                                ></button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">$499.00</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="/" className="text-danger"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2"
                                                ></button>

                                                <input id="form1" min="0" name="quantity"
                                                    type="number"
                                                    className="form-control form-control-sm" />

                                                <button className="btn btn-link px-2"
                                                ></button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">$499.00</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="/" className="text-danger"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Discount-box */}
                                {/* <div className="card mb-4">
                                    <div className="card-body p-4 d-flex flex-row">
                                        <div className="form-outline flex-fill">
                                            <input type="text" id="form1" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1">Discound code</label>
                                        </div>
                                        <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                    </div>
                                </div> */}

                                {/* Button-Box */}
                                <div className="card col-md-12">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-primary btn-block btn-lg">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Cart Template End */}

            </div>
            <Footer />
        </>
    )
}

export default Cart;
import React from 'react'
import { Link } from 'react-router-dom';
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
        "productImage": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
        "productTitle": "Basic T-shirt",
        "productPrice": "$499.00",
        "productSize": "M",
        "productColor": "Grey",
        "productQuantity": "10",
        "productCondition": "New",
    },
]

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
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
                                            <a href="/cart" className="text-body text-decoration-none">
                                                <span>price</span>
                                                <GrFormDown />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/* Cart-Items */}
                                {cartItems.map((item, index) => {
                                    return (
                                        <div className="card rounded-3 mb-4" key={index}>
                                            <div className="card-body p-4">
                                                <div className="row d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={item.productImage} className="img-fluid rounded-3" alt="Product-Image" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <p className="lead fw-normal mb-2">{item.productTitle}</p>
                                                        <p>
                                                            <span className="text-muted">
                                                                Size: <span className="mx-1 text-dark">{item.productSize}</span>
                                                            </span>
                                                            <span className="text-muted">
                                                                Color: <span className="mx-1 text-dark">{item.productColor}</span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2"
                                                        ><HiMinus /></button>
                                                        <input id="form1" min="0" max="10" name="quantity"
                                                            type="number" placeholder='Quantity' className="form-control form-control-sm" />
                                                        <button className="btn btn-link px-2"><HiPlus /></button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h5 className="mb-0">{item.productPrice}</h5>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="/cart" className="text-danger"><FaTrash /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* Button-Box */}
                                <Link to='/checkout' className='text-decoration-none'>
                                    <div className="card col-md-12">
                                        <button className="btn btn-primary btn-lg">Checkout</button>
                                    </div>
                                </Link>
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





























































/*
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
        "productImage": "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
        "productTitle": "Basic T-shirt",
        "productPrice": "$499.00",
        "productSize": "M",
        "productColor": "Grey",
        "productQuantity": "10",
        "productCondition": "New",
    }]

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                {/ Cart Template Start/}
                <section className="h-100 rounded" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100 py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10">

                                {/ Cart-Header /}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                    <div>
                                        <p className="mb-0">
                                            <span className="text-muted mx-1">Sort by :</span>
                                            <a href="/cart" className="text-body text-decoration-none">
                                                <span>price</span>
                                                <GrFormDown />
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/ Cart-Items /}
                                <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                    className="img-fluid rounded-3" alt="Product-Image"
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                                                <p><span className="text-muted">Size: </span>M<span className="text-muted">Color: </span>Grey</p>
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

                                {/ Button-Box /}
                                <div className="card col-md-12">
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-lg">Checkout</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/ Cart Template End /}
            </div>
            <Footer />
        </>
    )
}

export default Cart;
*/


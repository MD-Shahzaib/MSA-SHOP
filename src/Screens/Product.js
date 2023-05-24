import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// Components.
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// Icons.
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaHeart } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';

const Product = () => {

  const [singleProduct, setSingleProduct] = useState({});
  // Grab Id.
  const { id } = useParams();
  // Destructuring-singleProduct.
  const { _id, title, category, price, description, productImage } = singleProduct;

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


  return (
    <>
      <Navbar />
      {/* Product Container */}
      <div className="container d-flex justify-content-evenly flex-wrap my-5">
        {/* Product Image Box */}
        <div className="product-image-container">
          {/* https://dummyimage.com/400x400 */}
          <img src={productImage} className="rounded w-100 h-100" alt="product" />
        </div>
        {/* Product Content Box */}
        <div className="product-content-box">
          <h2 className="brand-name">BRAND NAME</h2>
          <h1 className="product-title mb-2">{title}</h1>
          <p className="product-category mb-1">Category ( {category} )</p>
          {/* Product Rewiews */}
          <div className='d-flex align-items-center'>
            <AiFillStar color='#97b1cc' /><AiFillStar color='#97b1cc' /><AiFillStar color='#97b1cc' /><AiFillStar color='#97b1cc' /><AiOutlineStar color='#97b1cc' />
            <span className="px-2 me-2 border-end fs-product-text">4 Reviews</span>
            <FaFacebookF color='#97b1cc' /><FaTwitter className='mx-1' color='#97b1cc' /><BsChatFill color='#97b1cc' />
          </div>
          <p className="fs-product-text my-3">{description}</p>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <span className='fs-product-text me-3 m-0'>Color</span>
              <div className=" d-flex me-4">
                <div className="circle border rounded-circle bg-light"></div>
                <div className="circle border rounded-circle bg-secondary mx-1"></div>
                <div className="circle border rounded-circle bg-info"></div>
              </div>
              <span className='fs-product-text me-3 m-0'>Size</span>
              <select className='p-2 border rounded-3'>
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center border-top mt-3 pt-3'>
            <h4 className='m-0'>${price}</h4>
            <div className='d-flex justify-content-between align-items-center'>
              <Link to="/cart">
                <button className="btn btn-primary">Add to Cart</button>
              </Link>
              <Link to="/checkout">
                <button className="btn btn-primary mx-2">Buy Now</button>
              </Link>
              <span className='border py-1 px-2 rounded-circle'><FaHeart /></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Product;
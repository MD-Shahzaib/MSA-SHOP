import React from 'react';
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

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 border rounded py-4">
                <div className="border rounded d-flex justify-content-center align-items-center mb-3">
                    <img src={data.sellerPicture} style={{ width: "15%" }} alt="sellerPicture" />
                    <div className='mx-2'>
                        <h2>{data.sellerName}</h2>
                        <p className="text-primary">Change Profile Photo</p>
                    </div>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="userName" />
                        <div id="emailHelp" className="form-text">Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                        <div id="passwordHelp" className="form-text">Atleast 8 characters</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNo" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Gender</label>
                        <select className="form-select form-select-md" aria-label=".form-select-md example">
                            <option value="1">Prefer not to say</option>
                            <option value="2">Male</option>
                            <option value="3">Female</option>
                            <option value="4">Custom</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control" id="address" rows="3"></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Profile;
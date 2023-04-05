import React from 'react'
// Components.
import Navbar from '../Navbar';
import Card from '../../Components/Card';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <div className="row row-cols-md-4 g-4">
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;
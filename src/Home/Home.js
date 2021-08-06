import React from 'react';
import './Home.css';
import Product from '../Product/Product'
import productMaker from '../data';

function Home() {
    const products = productMaker().map((product) => {
        const {id, title, image, price, rating, description} = product;

        return <Product title={title} id={id} image={image} price={price} rating={rating} description={description} />
    })
    



    return (
        <div className="home">
            <div className="home__container">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    className="home__image"
                    alt="Hero"
                />
            </div>
            <div className="home__row">
                {products[0]}
                {products[1]}
                {products[2]}
            </div>
            <div className="home__row">
                {products[3]}
                {products[4]}
                {products[5]}
            </div>
            <div className="home__row">
                {products[6]}
            </div>
        </div>
    )
}

export default Home

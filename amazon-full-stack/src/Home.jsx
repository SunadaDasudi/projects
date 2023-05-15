import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    let productId = 1617;
    let productTitle = 'boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)';
    let productPrice = 99.99;
    let productRating = 2;
    let productImage = 'https://m.media-amazon.com/images/I/61H5PEqBBAL._AC_UL320_.jpg'
    return (
        <div className='Home'>
            <div className="home__conatiner">
                <img className='home__image' src="/assets/banner/1.png" alt="" />

                <div className="home__row">
                    <Product id={productId} title={productTitle} price={productPrice} rating={productRating} image={productImage} />
                    <Product
                        id="1234"
                        title="Sure From Aquaguard Delight NXT RO+UV+Taste Adjuster(MTDS) 6L storage Water Purifier,7 stages purification,suitable for borewell,tanker,municipal water(Black) from Eureka Forbes"
                        price="8,199"
                        rating="4"
                        image="https://m.media-amazon.com/images/I/41s8QuuF6GL._SY355_.jpg" />
                </div>

                <div className="home__row">
                    <Product id="5678"
                        title="AO Smith Z9 Hot+ normal RO |Baby-Safe Water |Hot Water |10 L Storage|8-Stage Purification |100%RO+SCMT (Silver Charged Membrane Tech.)|Wall mount Water Purifier"
                        price="25,299"
                        rating="3"
                        image="https://m.media-amazon.com/images/I/513dMV3+hUL._SY355_.jpg" />
                    <Product id="91011"
                        title="Tecno Spark 10 5G (Meta Blue, 8GB RAM,256GB Storage)|16GB Expandable RAM | Ultra Clear 50MP Superior Rear Camera| Dimensity 6020 7nm Powerful 5G Processor"
                        price="14,999"
                        rating="0"
                        image="https://m.media-amazon.com/images/I/61Xxll9moyL._SX679_.jpg" />
                    <Product id="1213"
                        title="cer One 14 Business Laptop AMD Ryzen 3 3250U Processor (8GB RAM/256GB SSD/AMD Radeon Graphics/Windows 11 Home/MS Office Home and Student) Z2-493 with 35.56 cm (14.0) HD Display"
                        price="28,990"
                        rating="4"
                        image="https://m.media-amazon.com/images/I/7192azUcPgL._SY450_.jpg" />
                </div>

                <div className="home__row">
                    <Product id="1415" title={productTitle} price={productPrice} rating={productRating}
                        image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/30ffa82b-ba15-41ea-ad31-ea479a9bcc35.__CR10,0,4307,1765_PT0_SX1464_V1___.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home
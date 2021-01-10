import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/02/kindle/merch/2016/campaign/lucida/D/doppler-assoc_banner-d-uk-portal-banner-470x200._CB279654735_.jpg"
            alt=""
            />

            {/** Product id, title, price,rating,image */}
            <div className="home__row">
                <Product id="12333"
                title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)
                "
                price={1299}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
                />
                <Product id="12333"
                title="United Colors of Benetton Men's Sneakers"
                price={1919}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71GSZbX-skL._UL1500_.jpg"
                />
                
            </div>
            
            <div className="home__row">
                <Product id="12333"
                title="Apple iPhone 12 (128GB) - Red"
                price={84150}
                rating={5}
                image="https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product id="12333"
                title="IFB 1.5 Ton 5 Star Inverter Split AC (Copper, IACI18GB5G3C, Ivory)
                "
                price={35000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/5104nZlG7QL._SL1000_.jpg"
                />
                <Product id="12333"
                title="Lenovo 27-inch QHD IPS Panel Near Edgeless Monitor with 16:9 Aspect Ratio, 75Hz, 4ms, 300 nits Brightness, AMD FreeSync, TUV Certified Eye Comfort -Q27q-10"
                price={24199}
                rating={4}
                image="https://m.media-amazon.com/images/I/71QsqXR-IRL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
            <Product id="12333"
                title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69           "
                price={17860}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SL1500_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home

import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="388747835"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="73254825385"
            title="Kenwood KMM021 7QT Chef Titanium Kitchen Machine"
            price={349.05}
            image="https://m.media-amazon.com/images/I/81tCWi0BusL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4874489"
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA)"
            price={549.99}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="869889598"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa"
            price={122.98}
            image="https://m.media-amazon.com/images/I/51nq9JT2lcL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="806008580"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) "
            price={1099.0}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            price={349}
            rating={4}
            image="https://m.media-amazon.com/images/I/51odsYyURHL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

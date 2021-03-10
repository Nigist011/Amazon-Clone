import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/C2A2_2021_GWBleedingHero_1500x600_DATE_Final_en-US_HO_Generic_EN_NoBurst._CB660481903_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Like-new computers with a guarantee"
            price={499.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumer_Electronics/XCM_Manual_1309885_1580149_US_us_ce_gw_3682938_379x304_1X_en_US._SY304_CB660205298_.jpg"
          />
          <Product
            id="49538094"
            title="Michael Kors Women's Jet Set Travel - Large Chain Shoulder Tote"
            price={142.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51lnYI0nPBL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Habesha Dress Women's Dashiki African Bodycon Bohemian Vintage Print Club Midi V-Neck Pockets"
            price={34.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61x+waH-kGL._MCnd_AC_UL800_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Micheal Kors MK2024 Sunglasses"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41v5g8boOzL._AC_SY200_.jpg"
          />
          <Product
            id="3254354345"
            title="Juvale Golf Trophy - Sports Award Trophy Small Optical Crystal Golf Ball Trophy with Separable Base Stand, Includes Gift Box, 2 x 2.6 x 2 Inches"
            price={10.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41PLd2GoytL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;


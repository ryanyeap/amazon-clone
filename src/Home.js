import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt="Hero Image"
        />
      </div>

      <div className="home__row">
        <Product
          id={12321314}
          title='Acer Predator XB273K Gpbmiipprzx 27" UHD (3840 x 2160) IPS NVIDIA G-SYNC Compatible Monitor with VESA Certified DisplayHDR 400, Quantum Dot, 144Hz, DCI-P3 , Delta E<1 (Display Port & HDMI Port),Black'
          image="https://m.media-amazon.com/images/I/71KaGlmHBSL._AC_UY436_FMwebp_QL65_.jpg"
          price={829.99}
          rating={5}
        />
        <Product
          id={49538094}
          title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
          image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY436_FMwebp_QL65_.jpg"
          price={118.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={12321341}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
          price={29.99}
          rating={5}
        />
        <Product
          id={23141341}
          title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band"
          image="https://m.media-amazon.com/images/I/71mbZF8PT1L._AC_UY436_FMwebp_QL65_.jpg"
          price={383.99}
          rating={4}
        />
        <Product
          id={23149941}
          title="Echo Studio – High-fidelity smart speaker with Philips Hue Bulb – Alexa smart home starter kit"
          image="https://m.media-amazon.com/images/I/61FPZMMCqzL._AC_UY436_FMwebp_QL65_.jpg"
          price={199.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={92149941}
          title='Samsung CJ89 43" Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black'
          image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SX679_.jpg"
          price={1048.99}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;

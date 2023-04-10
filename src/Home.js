import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://assets.aboutamazon.com/dims4/default/56ba1c8/2147483647/strip/true/crop/1698x956+1+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fad%2Ff0%2F644e53ce452c932552ae07a21525%2Fwhen-is-amazon-prime-day-2022.jpg"
          alt=""
        />
        <div className="home__row">
          
          {/* Product */}
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={1}
            id = {123456}
          />
           <Product
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
            price={549.99}
            image={
              "https://m.media-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg"
            }
            rating={4}
            id = {123457}
          />
          {/* Product */}
        </div>
        <div className="home__row">
        
          {/* Product */}
            <Product
            title="Amazon Echo Dot (3rd Gen) - Smart speaker with Alexa, Charcoal"
            price={36.45}
            image={"https://m.media-amazon.com/images/I/710qS6Y+dhL._SL1000_.jpg"
            }
            rating={5}
            id = {123458}
            />
          {/* Product */}
          <Product
            title="Samsung Electronics Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Black"
            price={139.99}
            image={
              "https://m.media-amazon.com/images/I/61u7JSp4PUL._AC_SL1500_.jpg"
            }
            rating={5}
            id = {123459}
          />
          {/* Product */}
          <Product
            title="Apple 2021 12.9-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Space Gray with AppleCare+ (2 Years)"
            price={1236.90}
            image={
              "https://m.media-amazon.com/images/I/718bHN0IHGL._AC_SL1500_.jpg"
            }
            rating={5}
            id = {123460}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            title="SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR,Black"
            price={499.99}
            image={"https://m.media-amazon.com/images/I/81Butfqtj5L._AC_SL1500_.jpg"
            }
            rating={5} 
            id = {123461}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

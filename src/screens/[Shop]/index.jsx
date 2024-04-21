import React, { useState } from "react";
import data from "../../data.json";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Shop() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const [filterdata, setFilterdata] = useState(
    data.filter((item) => item.category === path)
  );

  return (
    <>
      <div className="shop__main__banner">
        {path === "women" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://cdn.shopify.com/videos/c/o/v/4dbc40b539ca4d79ba8f23b0862c5984.mp4"
          />
        ) : path === "men" ? (
          <img
            src="https://www.limelight.pk/cdn/shop/collections/Men-Suits.jpg?v=1698647265"
            alt="men suit"
          />
        ) : (
          <>
            <img
              src="https://www.limelight.pk/cdn/shop/collections/Unstitched-banners.jpg?v=1697623007"
              alt="sale"
            />
          </>
        )}
      </div>
      <div className="shop__products__container">
        <div className="shop__products__filter__wraper">
          <div className="shop__filter__heading">
            Total Products: <span>230</span>
          </div>
          <div className="shop__filter__items">
            <button className="shop__filter__item">Newest</button>
            <button className="shop__filter__item">Oldest</button>
            <button
              className="shop__filter__item"
              onClick={() => {
                const sortedData = [...filterdata];
                sortedData.sort((a, b) => a.price - b.price);
                setFilterdata(sortedData);
              }}
            >
              Small to heigh Price
            </button>
            <button
              className="shop__filter__item"
              onClick={() => {
                const sortedData = [...filterdata];
                sortedData.sort((a, b) => b.price - a.price);
                setFilterdata(sortedData);
              }}
            >
              Heigh to Samall Price
            </button>
          </div>
          <div className="shop__price__range">
            <div className="shop__price__range__heading">Price Range</div>
            <div className="price__entry">
              <div className="price__entry__text">0 Min</div>
              <div className="price__entry__text">40000 Max</div>
            </div>
            <input className="shop__price__range__input" type="range" />
          </div>
        </div>
        <div className="shop__products__items">
          {filterdata.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
function ProductCard({ item }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={`${item.id}`}
      state={item}
      className="item__container__filter"
    >
      <div className="product__frt__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="item__filter__container__img">
        <img src={item.images[0]} alt="fashion_style" />
      </div>
      <div className="item__container__name">{item.title}</div>
      <div className="item__container__price">Rs:{item.price}</div>
    </Link>
  );
}

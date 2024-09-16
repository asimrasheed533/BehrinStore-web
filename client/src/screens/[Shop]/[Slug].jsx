import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
export default function Detail() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log(cart);

  return (
    <>
      <div className="detail__container">
        <div className="detail__container__col__mobile">
          <img
            className="detail__container__col__main__image__mobile"
            src={state.img}
            alt="product men"
          />
        </div>
        <div className="detail__container__col">
          <div className="detail__img__warper">
            {/* {state.images.map((img, index) => (
              <div key={index} className="detail__img__entry">
                <img src={img} alt="women" />
              </div>
            ))} */}
            <div className="detail__img__entry">
              <img src={state.img} alt="women" />
            </div>
          </div>
          {/* <div className="detail__content">
            <div className="detail__content__heading">Description</div>
            <div className="detail__content__entry">Kurta</div>
            <div className="detail__content__entry">Dyed kurta</div>
            <div className="detail__content__entry">Two side pockets</div>
            <div className="detail__content__entry">
              Full sleeves with cuffs
            </div>
            <div className="detail__content__entry">
              <span>Fabric:</span> Jacquard
            </div>
            <div className="detail__content__entry">
              <span>Code:</span> P8949KR-SLS-RBL
            </div>
          </div> */}
        </div>
        <div className="detail__container__col">
          <img
            className="detail__container__col__main__image"
            src={state.img}
            alt="product men"
          />
        </div>

        <div className="detail__container__col">
          <div className="detail__price__free">Name</div>
          <div className="detail__container__name">{state.name}</div>
          <div className="detail__price__entry">
            <div className="detail__price">Rs.{state.price}</div>
            <div className="detail__price__free">FREE DELIVERY</div>
          </div>
          <div className="detail__size__title">Size</div>
          <div className="detail__size__warper">
            <button
              onClick={() => setSize("XS")}
              className={`detail__size__entry ${
                size === "XS" ? "detail__size__entry__active" : ""
              } `}
            >
              XS
            </button>
            <button
              onClick={() => setSize("S")}
              className={`detail__size__entry ${
                size === "S" ? "detail__size__entry__active" : ""
              } `}
            >
              S
            </button>
            <button
              onClick={() => setSize("M")}
              className={`detail__size__entry ${
                size === "M" ? "detail__size__entry__active" : ""
              } `}
            >
              M
            </button>
            <button
              onClick={() => setSize("L")}
              className={`detail__size__entry ${
                size === "L" ? "detail__size__entry__active" : ""
              } `}
            >
              L
            </button>
          </div>
          <div className="detail__quantity">
            <div className="detail__quantity__title">Quantity</div>
            <div className="detail__value">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="detail__value__inc"
              >
                -
              </button>
              <div className="detail__value__num">{quantity}</div>
              <button
                className="detail__value__inc"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              const productExist = cart.some((item) => item.id === state._id);
              if (productExist) {
                alert("product already add");
              }
              dispatch(
                addToCart({
                  id: state._id,
                  img: state.img,
                  size: size,
                  name: state.title,
                  price: state.price,
                  quantity: quantity,
                })
              );
              alert("Add TO Cart");
            }}
            className="add__cart__btn"
            disabled={!size}
          >
            ADD TO CADT
          </button>
          <div className="disclaimer__title">Disclaimer</div>
          <div className="disclaimer__detail">{state.description}</div>
        </div>
      </div>
    </>
  );
}

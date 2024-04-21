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
      <div className="detial__container">
        <div className="detial__container__col__mobile">
          <img
            className="detial__container__col__main__image__mobile"
            src={state.images[0]}
            alt="product men"
          />
        </div>
        <div className="detial__container__col">
          <div className="deatail__imgs__wraper">
            {state.images.map((img, index) => (
              <div className="deatail__imgs__entry">
                <img src={img} alt="women" />
              </div>
            ))}
          </div>
          <div className="detail__content">
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
          </div>
        </div>
        <div className="detial__container__col">
          <img
            className="detial__container__col__main__image"
            src={state.images[0]}
            alt="product men"
          />
        </div>

        <div className="detial__container__col">
          <div className="detial__container__name">{state.title}</div>
          <div className="detial__price__entry">
            <div className="detial__price">Rs.{state.price}</div>
            <div className="detial__price__free">FREE DELIVERY</div>
          </div>
          <div className="detail__size__title">Size</div>
          <div className="detail__size__wraper">
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
            onClick={() =>
              dispatch(
                addToCart({
                  id: state.id,
                  img: state.images[0],
                  size: size,
                  name: state.title,
                  price: state.price,
                  quantity: quantity,
                })
              )
            }
            className="add__cart__btn"
          >
            ADD TO CADT
          </button>
          <div className="disclaimer__title">Disclaimer</div>
          <div className="disclaimer__detail">
            Actual colors of the product may vary from the colors being
            displayed on your device.olors of the product may vary from the
            colors being displayed on your device.
          </div>
        </div>
      </div>
    </>
  );
}

import { SliderBanner } from "@components";
import salebanner from "../assets/salebanner.png";
import pr1 from "../assets/pr-01.png";
import pr2 from "../assets/pr-02.png";
import pr3 from "../assets/pr-03.png";
import { Link } from "react-router-dom";
import useQuery from "../utils/useQuery";

export default function Index() {
  const { data: categories, isLoading } = useQuery("/categories");
  console.log(categories, isLoading);
  return (
    <>
      <SliderBanner />
      <div className="cate__line" />
      <div className="categories__container">
        {categories?.map((category) => (
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to={`/${category.name}`}
            state={{ id: category._id }}
            className="categories__item"
            key={category._id}
          >
            <div className="categories__item__img">
              <img src={category.img} alt="fashion_style" />
            </div>
            <div className="categories__item__name">{category.name}</div>
          </Link>
        ))}
      </div>
      <div className="cate__line" />
      <div className="sale__banner">
        <img src={salebanner} alt="fashionstyle" />
      </div>
      {/* //new arival */}
      <div className="arival__container">
        <div className="arival__heading">New Arrivals</div>
        <div className="item__container__wraper">
          <ProductCard pr1={pr1} />
          <ProductCard pr1={pr2} />
          <ProductCard pr1={pr3} />
          <ProductCard pr1={pr1} />
          <ProductCard pr1={pr1} />
          <ProductCard pr1={pr1} />
          <ProductCard pr1={pr1} />
        </div>
      </div>
    </>
  );
}

function ProductCard({ pr1 }) {
  return (
    <div className="item__container">
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
      <div className="item__container__img">
        <img src={pr1} alt="fashion_style" />
      </div>
      <div className="item__container__name">
        3 Piece Lawn Suit-Embroidered (Unstitched)
      </div>
      <div className="item__container__price">Rs. 7,5000</div>
    </div>
  );
}

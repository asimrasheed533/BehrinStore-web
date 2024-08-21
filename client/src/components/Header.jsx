import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });
  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setIsOpen(false);
        }}
      >
        <div className="header__container">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="header__container__menu__icon"
          >
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
              class="feather feather-align-left"
            >
              <line x1="17" y1="10" x2="3" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="17" y1="18" x2="3" y2="18"></line>
            </svg>
          </button>
          {isOpen ? (
            <div className="header__menu__warper">
              <NavLink
                to="/men"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="header__container__menu__entry"
              >
                Men
              </NavLink>
              <NavLink
                to="/women"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="header__container__menu__entry"
              >
                Women
              </NavLink>
              <NavLink
                to="/sale"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="header__container__menu__entry"
              >
                Sales
              </NavLink>
            </div>
          ) : null}
          <Link to="/" className="header__container__logo">
            <svg
              width="156"
              height="115"
              viewBox="0 0 156 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.4697 26.811C45.0647 27.4245 47.9787 30.7986 50.7394 34.0194C54.267 37.8537 57.4877 37.8537 61.0153 34.0194C63.776 30.952 66.9968 28.6514 71.1378 27.4245C75.1254 26.3509 76.3524 23.7436 74.6653 19.9093C74.2052 18.9891 73.7451 18.0688 73.4383 17.1486C71.7513 13.4677 72.058 10.2469 75.2788 7.48622C77.1193 6.10588 79.1131 5.95251 80.9535 7.33285C84.3277 9.78679 85.0946 13.3143 83.1007 16.8419C79.2664 23.7436 81.7204 26.5042 88.6221 28.9582C96.2906 31.7189 105.646 32.179 112.395 28.3447C113.008 28.038 113.775 28.1913 115.615 27.8846C111.474 32.7925 108.254 37.2402 104.419 41.0745C100.738 44.7554 97.671 41.2279 95.0637 39.2341C90.4625 35.7065 88.162 34.4795 85.5547 41.8414C83.2541 48.5897 83.1007 53.9577 87.0884 59.6324C90.1558 64.0802 90.7693 68.9881 89.2356 74.2027C85.8614 85.2454 82.4872 96.4415 78.0395 107.638C74.3586 94.4477 67.7636 82.4847 66.2299 68.8347C65.7698 64.6937 68.2237 61.0128 70.2176 57.4852C73.4383 51.9639 72.3648 42.1481 68.6838 37.3936C66.5366 34.7863 65.1563 36.9335 63.4692 37.7003C54.1136 42.915 54.1136 42.915 46.7518 34.7863C44.6046 32.3324 42.1506 30.3385 38.4697 26.811Z"
                fill="url(#paint0_linear_1591_821)"
              />
              <path
                d="M37.8573 78.6514C33.5629 68.8357 26.2011 62.8542 15.3118 62.0873C14.8516 62.0873 14.2382 61.934 13.7781 61.7806C6.72298 60.0935 -1.09895 52.1182 0.128018 48.1306C1.35499 44.2963 14.0848 40.9221 19.7595 42.9159C26.968 45.5232 31.2624 50.7379 33.7163 59.3266C28.5017 57.4862 26.3545 52.4249 21.2932 51.9648C33.5629 65.3081 45.2191 78.9581 60.5563 89.0806C69.145 94.602 72.8259 103.344 74.6664 115C61.6298 99.5099 45.3725 91.2278 30.9556 80.6452C29.882 79.8784 28.8084 79.2649 27.7348 78.498C26.5079 77.4244 25.8944 75.8907 26.8146 74.357C27.7348 72.6699 29.4219 73.13 30.8022 74.0503C33.2562 75.584 35.5568 77.1177 37.8573 78.6514Z"
                fill="url(#paint1_linear_1591_821)"
              />
              <path
                d="M82.4883 113.313C83.1018 105.184 85.5557 97.3619 91.9973 92.4541C107.488 80.7979 121.598 67.7613 133.408 53.3444C129.266 54.2647 129.266 54.2647 121.598 62.8534C124.052 45.3691 138.162 37.7006 152.886 45.5225C156.72 47.5163 156.567 49.3568 154.726 52.5776C151.352 58.4057 146.597 61.1664 140.002 62.24C128.653 63.927 123.592 67.7613 117.61 79.2642C120.678 77.2703 122.825 75.7366 125.125 74.3563C126.506 73.436 128.346 71.749 129.88 73.7428C131.26 75.7366 130.187 77.7304 128.346 78.9574C127.119 79.8776 125.586 80.3377 124.359 81.258C110.095 91.3805 94.1445 99.3558 82.4883 113.313Z"
                fill="url(#paint2_linear_1591_821)"
              />
              <path
                d="M117.303 62.2397C110.401 48.4363 112.855 36.6267 123.284 26.6576C124.511 25.4306 125.738 23.7435 127.272 23.2834C130.493 22.3632 131.72 15.6148 136.321 19.4491C139.695 22.2098 138.622 34.4795 134.787 36.1666C124.205 40.9211 119.297 49.3565 117.303 62.2397Z"
                fill="url(#paint3_linear_1591_821)"
              />
              <path
                d="M39.2365 61.9331C36.6292 49.3566 32.1815 40.6145 21.4455 36.0133C17.9179 34.4796 17.3045 23.2835 19.4517 19.756C20.3719 18.2223 21.2921 17.9155 23.1326 18.6824C39.0832 25.2774 46.9051 44.2954 39.2365 61.9331Z"
                fill="url(#paint4_linear_1591_821)"
              />
              <path
                d="M90.1562 13.7748C94.4506 15.922 98.5917 18.3759 103.193 19.6029C108.254 20.9832 112.242 19.4495 115.156 15.1551C116.996 12.5478 116.383 9.48038 113.469 7.94667C110.708 6.56633 108.407 7.94667 107.947 11.0141C107.487 14.5416 105.187 15.6152 102.733 14.0815C99.8186 12.5478 102.886 10.8607 103.653 9.32701C105.493 5.95284 106.874 2.4253 110.861 0.738222C114.696 -0.79549 117.916 0.278108 120.524 3.03879C124.051 6.7197 124.971 11.0141 122.824 15.6152C119.143 23.1304 112.395 24.5108 104.88 24.204C97.5181 23.8973 92.6102 20.8298 90.1562 13.7748Z"
                fill="url(#paint5_linear_1591_821)"
              />
              <path
                d="M65.9237 14.0811C62.7029 22.2098 57.9484 24.6637 47.5192 24.2036C40.4641 23.8969 35.2495 20.6761 33.1023 13.7744C31.2618 8.25301 33.5624 3.65188 38.777 1.04457C43.8383 -1.56274 47.5192 1.04457 50.4332 5.18559C51.6602 6.87267 52.5804 8.55976 53.654 10.4002C54.4209 11.7806 56.5681 13.4676 53.5006 14.5412C51.8136 15.1547 49.6664 15.1547 49.2062 12.8541C48.4394 9.47998 47.5192 6.7193 43.2248 7.94627C41.2309 8.40639 40.4641 10.0935 40.4641 12.0873C40.6175 15.9216 42.918 18.0688 46.2922 19.1424C53.5006 21.2896 59.4821 17.3019 65.9237 14.0811Z"
                fill="url(#paint6_linear_1591_821)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1591_821"
                  x1="77.0426"
                  y1="6.37109"
                  x2="77.0426"
                  y2="107.638"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1591_821"
                  x1="37.3332"
                  y1="42.3242"
                  x2="37.3332"
                  y2="115"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1591_821"
                  x1="119.235"
                  y1="42.4619"
                  x2="119.235"
                  y2="113.313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1591_821"
                  x1="125.878"
                  y1="18.2803"
                  x2="125.878"
                  y2="62.2397"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1591_821"
                  x1="30.2073"
                  y1="18.2783"
                  x2="30.2073"
                  y2="61.9331"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1591_821"
                  x1="107.064"
                  y1="0.0361328"
                  x2="107.064"
                  y2="24.243"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1591_821"
                  x1="49.1992"
                  y1="0"
                  x2="49.1992"
                  y2="24.2568"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D3020E" />
                  <stop offset="1" stopColor="#85070B" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="header__container__right">
            <div className="header__container__right__search">
              <input
                className="header__container__right__search__input"
                type="text"
                placeholder="search item"
              />
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
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <Link to="/cart" className="header__container__right__cart">
              <div className="header__container__right__cart__num">
                {totalQuantity}
              </div>
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
                class="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}

import { Link, NavLink } from "router";
import { sidebarcategories, sidebarEnteries } from "global";

import { Fragment } from "react";
import { X } from "react-feather";
import { logo } from "assets";
import { useState } from "react";

export default function Sidebar({ setSidebarOpen }) {
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <Link to="/dashboard" className="container__sidebar__logo">
          <svg
            width="174"
            height="30"
            viewBox="0 0 174 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_57)">
              <path
                d="M46 1.5C46 7.46737 44 13.5 41 17.4099C37 21.5 37 24 25.5222 24C14.0444 24 14 22.1151 9.61232 17.4099C5.22463 12.7047 5 7.96737 5 2H9C9 10.5 12.4388 14.5834 12.4388 14.5834C12.4388 14.5834 15.5222 20.0027 25.5222 20.0027C35.5222 20.0027 38 14.5834 38 14.5834C38 14.5834 41.4321 8.5 41.4321 1.5H46Z"
                fill="#2F2105"
              />
              <path
                d="M41.4596 9.52725C41.8656 10.8567 42.6895 12.0199 43.8091 12.844C44.9286 13.6681 46.2841 14.1093 47.6742 14.1019C49.0643 14.0945 50.415 13.639 51.5258 12.8031C52.6365 11.9672 53.4481 10.7953 53.84 9.46159C54.2319 8.12781 54.1832 6.70321 53.7012 5.39929C53.2192 4.09537 52.3296 2.98164 51.1643 2.22345C49.9991 1.46527 48.6205 1.10305 47.2331 1.19056C45.8457 1.27808 44.5235 1.81067 43.4628 2.70927L45.6146 5.24918C46.1289 4.81347 46.77 4.55523 47.4427 4.51279C48.1154 4.47037 48.7838 4.646 49.3488 5.01362C49.9138 5.38124 50.3452 5.92125 50.5789 6.55349C50.8126 7.18572 50.8362 7.87646 50.6462 8.52317C50.4561 9.16988 50.0626 9.73808 49.5241 10.1433C48.9855 10.5487 48.3306 10.7695 47.6566 10.7731C46.9825 10.7767 46.3253 10.5628 45.7825 10.1632C45.2396 9.76365 44.8401 9.19967 44.6433 8.55501L41.4596 9.52725Z"
                fill="#2F2105"
              />
              <path
                d="M39 1.59495C39 5.94584 37.525 10.1185 34.8995 13.1951C32.274 16.2716 28.713 18 25 18C21.287 18 17.726 16.2716 15.1005 13.1951C12.475 10.1185 11 5.94584 11 1.59495C11 1.59495 19 5.18358 25 1.59495C31 -1.99369 39 1.59495 39 1.59495Z"
                fill="#FF912B"
              />
              <path
                d="M43.7553 27H7.24468C6.55726 27 6 27.6716 6 28.5C6 29.3284 6.55726 30 7.24468 30H43.7553C44.4427 30 45 29.3284 45 28.5C45 27.6716 44.4427 27 43.7553 27Z"
                fill="#2F2105"
              />
              <path
                d="M78.992 23L72.536 15.536V23H69.8V6.32H72.536V13.928L79.016 6.32H82.448L75.2 14.672L82.568 23H78.992ZM90.7235 23.216C89.4755 23.216 88.3475 22.936 87.3395 22.376C86.3315 21.8 85.5395 21 84.9635 19.976C84.3875 18.936 84.0995 17.736 84.0995 16.376C84.0995 15.032 84.3955 13.84 84.9875 12.8C85.5795 11.76 86.3875 10.96 87.4115 10.4C88.4355 9.84 89.5795 9.56 90.8435 9.56C92.1075 9.56 93.2515 9.84 94.2755 10.4C95.2995 10.96 96.1075 11.76 96.6995 12.8C97.2915 13.84 97.5875 15.032 97.5875 16.376C97.5875 17.72 97.2835 18.912 96.6755 19.952C96.0675 20.992 95.2355 21.8 94.1795 22.376C93.1395 22.936 91.9875 23.216 90.7235 23.216ZM90.7235 20.84C91.4275 20.84 92.0835 20.672 92.6915 20.336C93.3155 20 93.8195 19.496 94.2035 18.824C94.5875 18.152 94.7795 17.336 94.7795 16.376C94.7795 15.416 94.5955 14.608 94.2275 13.952C93.8595 13.28 93.3715 12.776 92.7635 12.44C92.1555 12.104 91.4995 11.936 90.7955 11.936C90.0915 11.936 89.4355 12.104 88.8275 12.44C88.2355 12.776 87.7635 13.28 87.4115 13.952C87.0595 14.608 86.8835 15.416 86.8835 16.376C86.8835 17.8 87.2435 18.904 87.9635 19.688C88.6995 20.456 89.6195 20.84 90.7235 20.84ZM103.028 11.72C103.492 11.112 104.124 10.6 104.924 10.184C105.724 9.768 106.628 9.56 107.636 9.56C108.788 9.56 109.836 9.848 110.78 10.424C111.74 10.984 112.492 11.776 113.036 12.8C113.58 13.824 113.852 15 113.852 16.328C113.852 17.656 113.58 18.848 113.036 19.904C112.492 20.944 111.74 21.76 110.78 22.352C109.836 22.928 108.788 23.216 107.636 23.216C106.628 23.216 105.732 23.016 104.948 22.616C104.164 22.2 103.524 21.688 103.028 21.08V29.288H100.292V9.776H103.028V11.72ZM111.068 16.328C111.068 15.416 110.876 14.632 110.492 13.976C110.124 13.304 109.628 12.8 109.004 12.464C108.396 12.112 107.74 11.936 107.036 11.936C106.348 11.936 105.692 12.112 105.068 12.464C104.46 12.816 103.964 13.328 103.58 14C103.212 14.672 103.028 15.464 103.028 16.376C103.028 17.288 103.212 18.088 103.58 18.776C103.964 19.448 104.46 19.96 105.068 20.312C105.692 20.664 106.348 20.84 107.036 20.84C107.74 20.84 108.396 20.664 109.004 20.312C109.628 19.944 110.124 19.416 110.492 18.728C110.876 18.04 111.068 17.24 111.068 16.328ZM117.95 8.024C117.454 8.024 117.038 7.856 116.702 7.52C116.366 7.184 116.198 6.768 116.198 6.272C116.198 5.776 116.366 5.36 116.702 5.024C117.038 4.688 117.454 4.52 117.95 4.52C118.43 4.52 118.838 4.688 119.174 5.024C119.51 5.36 119.678 5.776 119.678 6.272C119.678 6.768 119.51 7.184 119.174 7.52C118.838 7.856 118.43 8.024 117.95 8.024ZM119.294 9.776V23H116.558V9.776H119.294ZM132.078 23L125.622 15.536V23H122.886V6.32H125.622V13.928L132.102 6.32H135.534L128.286 14.672L135.654 23H132.078ZM139.465 8.024C138.969 8.024 138.553 7.856 138.217 7.52C137.881 7.184 137.713 6.768 137.713 6.272C137.713 5.776 137.881 5.36 138.217 5.024C138.553 4.688 138.969 4.52 139.465 4.52C139.945 4.52 140.353 4.688 140.689 5.024C141.025 5.36 141.193 5.776 141.193 6.272C141.193 6.768 141.025 7.184 140.689 7.52C140.353 7.856 139.945 8.024 139.465 8.024ZM140.809 9.776V23H138.073V9.776H140.809ZM147.594 12.008V19.328C147.594 19.824 147.706 20.184 147.93 20.408C148.17 20.616 148.57 20.72 149.13 20.72H150.81V23H148.65C147.418 23 146.474 22.712 145.818 22.136C145.162 21.56 144.834 20.624 144.834 19.328V12.008H143.274V9.776H144.834V6.488H147.594V9.776H150.81V12.008H147.594ZM152.419 16.328C152.419 15 152.691 13.824 153.235 12.8C153.795 11.776 154.547 10.984 155.491 10.424C156.451 9.848 157.507 9.56 158.659 9.56C159.699 9.56 160.603 9.768 161.371 10.184C162.155 10.584 162.779 11.088 163.243 11.696V9.776H166.003V23H163.243V21.032C162.779 21.656 162.147 22.176 161.347 22.592C160.547 23.008 159.635 23.216 158.611 23.216C157.475 23.216 156.435 22.928 155.491 22.352C154.547 21.76 153.795 20.944 153.235 19.904C152.691 18.848 152.419 17.656 152.419 16.328ZM163.243 16.376C163.243 15.464 163.051 14.672 162.667 14C162.299 13.328 161.811 12.816 161.203 12.464C160.595 12.112 159.939 11.936 159.235 11.936C158.531 11.936 157.875 12.112 157.267 12.464C156.659 12.8 156.163 13.304 155.779 13.976C155.411 14.632 155.227 15.416 155.227 16.328C155.227 17.24 155.411 18.04 155.779 18.728C156.163 19.416 156.659 19.944 157.267 20.312C157.891 20.664 158.547 20.84 159.235 20.84C159.939 20.84 160.595 20.664 161.203 20.312C161.811 19.96 162.299 19.448 162.667 18.776C163.051 18.088 163.243 17.288 163.243 16.376Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_57">
                <rect width="174" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <button
          className="container__sidebar__button"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__sidebar__content">
        {sidebarcategories.map((category) => (
          <Fragment key={category}>
            {category === "" ? (
              sidebarEnteries
                .filter((entry) => entry.category === category)
                .map((entry) => (
                  <NavLink
                    key={entry.path}
                    onClick={() => {
                      if (window.innerWidth < 820) {
                        setSidebarOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    end
                    to={entry.path}
                    className="container__sidebar__entry__content__entry"
                  >
                    {entry.icon}
                    {entry.name}
                  </NavLink>
                ))
            ) : (
              <SidebarEntry
                category={category}
                sidebarEnteries={sidebarEnteries}
                setSidebarOpen={setSidebarOpen}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function SidebarEntry({ category, sidebarEnteries, setSidebarOpen }) {
  const [collepse, setCollepse] = useState(true);
  return (
    <div className="container__sidebar__entry">
      <div
        className="container__sidebar__entry__label"
        onClick={() => {
          setCollepse(!collepse);
        }}
        style={!collepse ? { marginBottom: 0 } : null}
      >
        {category}
      </div>
      {collepse && (
        <div className="container__sidebar__entry__content">
          {sidebarEnteries
            .filter((entry) => entry.category === category)
            .map((entry) => (
              <NavLink
                key={entry.path}
                to={entry.path}
                onClick={() => {
                  if (window.innerWidth < 820) {
                    setSidebarOpen(false);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="container__sidebar__entry__content__entry"
              >
                {entry.icon}
                {entry.name}
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
}

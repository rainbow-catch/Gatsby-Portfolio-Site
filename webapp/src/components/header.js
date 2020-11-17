import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from '../constants/images'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      <Location>
        {({ location }) => {

          const lastPos = location.pathname.lastIndexOf('/');
          const len = location.pathname.length;
          const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

          return (
            <div className="flex flex-wrap items-center justify-between bg-white px-10 lg:px-20 z-50">
              <div className="my-auto">
                <Link to="/" className="">
                  <img
                    src={images.IMAGE_LOGO}
                    className="w-logo h-logo smd:w-logosmd smd:h-logosmd pt-1"
                    alt="page elements shape"
                  />
                </Link>
              </div>
              <button
                className="flex my-auto float-right w-10 h-10 items-center px-3 py-2 text-black border border-black rounded smd:hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              <nav
                className={`${
                  isExpanded ? `block` : `hidden`
                  } smd:flex smd:items-center w-full smd:w-auto`}
              >
                {[
                  {
                    route: `/`,
                    title: `Home`,
                  },
                  {
                    route: `/about`,
                    title: `About Me`,
                  },
                  {
                    route: `/projects`,
                    title: `Projects`,
                  },
                  {
                    route: `/resume`,
                    title: `Resume`,
                  },
                  {
                    route: `/contact`,
                    title: `Let's talk`,
                  }
                ].map((link) => (
                  <div className="relative">
                    <Link
                      className={"block text-center text-xl smd:inline-block smd:mx-6 mb-2 smd:mb-0 no-underline  hover:bg-gray-300 smd:hover:bg-white"
                        + (link.route == pathName ? " text-primary font-bold hover:text-primary " : " text-black hover:text-gray-900")}

                      key={link.title}
                      to={link.route}
                    >
                      {link.title}
                    </Link>
                    {link.route == pathName &&
                      <div className="bg-primary absolute hidden smd:block w-full h-1 rounded-t-xl object-fill" style={{ bottom: "-30px" }}></div>
                    }
                  </div>
                ))}
              </nav>
            </div>
          );
        }}
      </Location>
    </header >
  );
}


export default Header;


import React, { useState } from "react"
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from '../constants/images'
import { IsMobile } from './deviceDetect';
import Modal from 'react-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function Header() {
  const [modal, setModal] = useState(false);
  const [isExpanded, toggleExpansion] = useState(false);
  
  const toggleModal = () => setModal(!modal);
  const isMobile = IsMobile();

  Modal.setAppElement("body");
  return (
    <header>
      <Location>
        {({ location }) => {

          const lastPos = location.pathname.lastIndexOf('/');
          const len = location.pathname.length;
          const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

          const checkUrl = (url) => {
            if(location.pathname.includes('case') && url=='/projects') return true; 
            return url == pathName;
          };

          return (
            <div className={"flex flex-wrap items-center justify-between bg-white z-40 " + (isMobile ? "px-3" : "px-10 lg:px-20")}>
              <div className="my-auto">
                <Link to="/" className="">
                  <img
                    src={images.IMAGE_LOGO}
                    className={"pt-1 " + (isMobile ? "w-logomobile h-logomobile" : "w-logo h-logo smd:w-logosmd smd:h-logosmd")}
                    alt="page elements shape"
                  />
                </Link>
              </div>
              <button
                className="flex my-auto float-right items-center  text-lightBlack rounded smd:hidden"
                onClick={() => (isMobile ? toggleModal() : toggleExpansion(!isExpanded))}
              >
                <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="37.4428" height="32.9906" transform="translate(0.228882 0.181305)" fill="white" />
                  <path d="M29.6717 11.957C29.6717 12.2178 29.4584 12.429 29.1952 12.429H8.70538C8.44212 12.429 8.22888 12.2178 8.22888 11.957V8.65327C8.22888 8.39251 8.44212 8.1813 8.70538 8.1813H29.1952C29.4584 8.1813 29.6717 8.39251 29.6717 8.65327V11.957Z" fill="#83523B" />
                  <path d="M29.6717 18.3286C29.6717 18.5894 29.4584 18.8006 29.1952 18.8006H8.70538C8.44212 18.8006 8.22888 18.5894 8.22888 18.3286V15.0246C8.22888 14.7639 8.44212 14.5526 8.70538 14.5526H29.1952C29.4584 14.5526 29.6717 14.7639 29.6717 15.0246V18.3286Z" fill="#83523B" />
                  <path d="M29.6717 24.7C29.6717 24.9607 29.4584 25.1719 29.1952 25.1719H8.70538C8.44212 25.1719 8.22888 24.9607 8.22888 24.7V21.3962C8.22888 21.1355 8.44212 20.9243 8.70538 20.9243H29.1952C29.4584 20.9243 29.6717 21.1355 29.6717 21.3962V24.7Z" fill="#83523B" />
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
              ].map((link, index) => (
                <div className="relative" key={ index }>
                  <Link
                    className={"block text-center text-xl smd:inline-block smd:mx-6 mb-2 smd:mb-0 no-underline  hover:bg-gray-300 smd:hover:bg-white"
                      + (checkUrl(link.route) ? " text-primary font-bold hover:text-primary " : " text-lightBlack hover:text-gray-900")}

                    key={link.title}
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                  {checkUrl(link.route) &&
                    <div className="bg-primary absolute hidden smd:block w-full h-1 rounded-t-xl object-fill" style={{ bottom: "-30px" }}></div>
                  }
                </div>
              ))}
            </nav>
            <Modal
               style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                    position: 'fixed',
                    top: '0',
                    left: isMobile ? '0' : '',
                    right: '0',
                    bottom: '0',
                    width: isMobile ? '100%' : '400px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '0',
                    zIndex: 50
                }
            }}
            isOpen={modal}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            >
              <div className="flex flex-col min-h-screen items-center justify-center" style={{ margin: '-15px' }}>
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
                ].map((link, index) => (
                  <div className="relative items-center" key={index}>
                    <Link
                      className={"block text-center text-xl mb-2 no-underline"
                        + (checkUrl(link.route) ? " text-primary font-bold hover:text-primary " : " text-lightBlack hover:text-gray-900")}

                      key={link.title}
                      to={link.route}
                    >
                      <div className="h-16 w-48 flex flex-col justify-center items-center border-b border-lighterBrown">
                      {link.title}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Modal>
            </div>
          );
        }}
      </Location>
    </header >
  );
}


export default Header;


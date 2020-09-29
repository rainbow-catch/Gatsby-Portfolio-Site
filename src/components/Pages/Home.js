import React from "react";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <img
          src="./assets/page-shape-elements.svg"
          className="img-homeElement my-5"
          alt="page elements shape"
        />
        <h1 className="large">Everything is</h1>
        <h2 className="x-large">Design</h2>
        <h3 className="medium">...Simple I believe is beautiful</h3>
        {/* <a href="#project" className="btn btn-secondary">
          About Me
        </a> */}
        <a href="#project" className="btn btn-primary my-2">
          View Projects
        </a>
      </div>

      <div>
        <img
          src="./assets/tempImg.svg"
          className="homePageImg"
          alt="page"
          style={{ objectFit: "none" }}
        />
      </div>
    </div>
  );
};

export default Home;

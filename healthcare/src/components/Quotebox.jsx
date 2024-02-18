import React from "react";
import heroImage from "../assets/img/landing.jpg"; // Importing the image

const Quotebox = () => {
  return (
    <section className="py-xxl-10 pb-0" id="home">
      <div
        className="bg-holder bg-size"
        style={{
          backgroundImage: `url(${heroImage})`, // Using the imported image
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.7,
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row min-vh-xl-100 min-vh-xxl-25">
          <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
            <img
              className="pt-7 pt-md-0 w-100"
              src={heroImage} // Using the imported image
              alt="hero-header"
            />
          </div>
          <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
            <h1 className="fw-light font-base fs-6 fs-xxl-7">
              Empowering<strong> Wellness</strong>
              <br />
              Enriching&nbsp;<strong>Lives</strong>
            </h1>
            <p className="fs-1 mb-5">
              Where Compassion Meets Expertise
              <br />{" "}
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill"
              href="https://meet.google.com/vgo-jwdx-icc"
              role="button"
              target="_blank"
            >
              Connect with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotebox;

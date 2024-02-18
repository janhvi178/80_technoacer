import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="bg-primary">
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: "url(assets/img/gallery/cta-bg.png)",
            backgroundPosition: "center right",
            marginTop: "-8.125rem",
            backgroundSize: "contain",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fw-bold text-light">The Timely Updates</h2>
              <p className="text-soft-primary">
                Get updates of your next vaccine on your SMS.{" "}
                <br />
                Know your next appointment on your dashboard!
              </p>
            </div>
            <div className="col-lg-6">
              <h5 className="mb-3 text-soft-primary">
                Sign in for Vaccine Drives{" "}
              </h5>
              <form className="row gx-2 gy-2 align-items-center">
                <div className="col">
                  <div className="input-group-icon">
                    <label className="visually-hidden" htmlFor="inputEmailCta">
                      Address
                    </label>
                    <input
                      className="form-control form-livedoc-control form-cta-control text-soft-primary"
                      id="inputEmailCta"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="d-grid gap-3 col-sm-auto">
                  <button
                    className="btn btn-lg btn-light rounded-3 px-5 py-3"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 bg-secondary">
        <div
          className="bg-holder opacity-25"
          style={{
            backgroundImage: "url(assets/img/gallery/dot-bg.png)",
            backgroundPosition: "top left",
            marginTop: "-3.125rem",
            backgroundSize: "auto",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row py-8">
            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
              <a className="text-decoration-none" href="#">
                <img
                  src="assets/img/gallery/footer-logo.png"
                  height={51}
                  alt=""
                />
              </a>
              <p className="text-light my-4">
                The world's most trusted <br />
                telehealth company.
              </p>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
              <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">
                Services
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Eye care
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Cardiac care
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Child care
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                Other's
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Locate
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Network
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Collaborators
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                {" "}
                More Info
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    About Us
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Contact US
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="footer-link" href="#!">
                    Get Update
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="py-0 bg-primary">
          <div className="container">
            <div className="row justify-content-md-between justify-content-evenly py-4">
              <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                <p className="fs--1 my-2 fw-bold text-200">
                  All rights Reserved
                </p>
              </div>
              <div className="col-12 col-sm-8 col-md-6">
                <p className="fs--1 my-2 text-center text-md-end text-200">
                  {" "}
                  Made By TechnoAcer
                  <svg
                    className="bi bi-suit-heart-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="#F95C19"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                  </svg>
                  {/* &nbsp;by&nbsp; */}
                  <a
                    className="fw-bold text-info"
                    href="#"
                    // target="_blank"
                  >
                    Love{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer
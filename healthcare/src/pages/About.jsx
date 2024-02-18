import React from 'react'

const About = () => {
  return (
    <>
      <>
        <title>80_TECHNOACER</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/style.css" />
        {/* <link rel="stylesheet" href="/healthcare/src/assets/css/theme.css"> */}
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/gallery/logo.png" width={118} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2">
                  <a className="nav-link" aria-current="page" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#departments">
                    Departments
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Membership
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Help{" "}
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link" href="#findUs">
                    Contact
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4"
                href="#!"
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>
        <div
          className="hero-wrap"
          style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center">
              <div className="col-md-6 ftco-animate d-flex align-items-end">
                <div className="text w-100">
                  <h1 className="mb-4">Counseling For Your Better Life</h1>
                  <p className="mb-4">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Contact us
                    </a>{" "}
                    <a href="#" className="btn btn-white py-3 px-4">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
              <a
                href="https://vimeo.com/45830194"
                className="img-video popup-vimeo d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-play" />
              </a>
            </div>
          </div>
        </div>
        <section className="ftco-intro">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex">
                <div className="intro aside-stretch d-lg-flex w-100">
                  <div className="icon">
                    <span className="flaticon-checklist" />
                  </div>
                  <div className="text">
                    <h2>100% Confidential</h2>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="intro color-1 d-lg-flex w-100">
                  <div className="icon">
                    <span className="flaticon-employee" />
                  </div>
                  <div className="text">
                    <h2>Qualified Team</h2>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="intro color-2 d-lg-flex w-100">
                  <div className="icon">
                    <span className="flaticon-umbrella" />
                  </div>
                  <div className="text">
                    <h2>Individual Approach</h2>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Services</span>
                <h2>How It Works</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                <div className="services-2 text-center">
                  <div className="icon-wrap">
                    <div className="number d-flex align-items-center justify-content-center">
                      <span>01</span>
                    </div>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-calendar" />
                    </div>
                  </div>
                  <h2>Make Schedule</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                <div className="services-2 text-center">
                  <div className="icon-wrap">
                    <div className="number d-flex align-items-center justify-content-center">
                      <span>02</span>
                    </div>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-qa" />
                    </div>
                  </div>
                  <h2>Start Discussion</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                <div className="services-2 text-center">
                  <div className="icon-wrap">
                    <div className="number d-flex align-items-center justify-content-center">
                      <span>03</span>
                    </div>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-checklist" />
                    </div>
                  </div>
                  <h2>Enjoy Plan</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb ftco-no-pt">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(images/about-1.jpg)" }}
              ></div>
              <div className="col-md-6 wrap-about px-md-5 ftco-animate py-5 bg-light">
                <div className="heading-section">
                  <span className="subheading">Welcome to Counselor</span>
                  <h2 className="mb-4">
                    Best Counseling Funding Network Worldwide.
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country.
                  </p>
                  <a
                    href="https://vimeo.com/45830194"
                    className="play-video popup-vimeo d-flex align-items-center mt-4"
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-play" />
                    </div>
                    <span className="watch">Watch Our Consultant Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <span className="subheading">Our Services</span>
                <h2 className="mb-3">We Can Help You With This Situation</h2>
              </div>
            </div>
            <div className="row tabulation mt-4 ftco-animate">
              <div className="col-md-4">
                <ul className="nav nav-pills nav-fill d-md-flex d-block flex-column">
                  <li className="nav-item text-left">
                    <a
                      className="nav-link active py-4"
                      data-toggle="tab"
                      href="#services-1"
                    >
                      Relation Problem
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#services-2"
                    >
                      Couples Counseling
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#services-3"
                    >
                      Depression Treatment
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#services-4"
                    >
                      Family Problem
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#services-5"
                    >
                      Personal Problem
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#services-6"
                    >
                      Business Problem
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                <div className="tab-content">
                  <div
                    className="tab-pane container p-0 active"
                    id="services-1"
                  >
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-1.jpg)" }}
                    />
                    <h3>
                      <a href="#">Relation Problem</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="tab-pane container p-0 fade" id="services-2">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-2.jpg)" }}
                    />
                    <h3>
                      <a href="#">Couples Counseling</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="tab-pane container p-0 fade" id="services-3">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-3.jpg)" }}
                    />
                    <h3>
                      <a href="#">Depression Treatment</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="tab-pane container p-0 fade" id="services-4">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-4.jpg)" }}
                    />
                    <h3>
                      <a href="#">Family Problem</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="tab-pane container p-0 fade" id="services-5">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-5.jpg)" }}
                    />
                    <h3>
                      <a href="#">Personal Problem</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="tab-pane container p-0 fade" id="services-6">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/services-6.jpg)" }}
                    />
                    <h3>
                      <a href="#">Business Problem</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section">
          <div
            className="img img-bg border"
            style={{ backgroundImage: "url(images/bg_4.jpg)" }}
          />
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left" />
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(images/person_1.jpg)",
                            }}
                          />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left" />
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(images/person_2.jpg)",
                            }}
                          />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left" />
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(images/person_3.jpg)",
                            }}
                          />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left" />
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(images/person_1.jpg)",
                            }}
                          />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left" />
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(images/person_2.jpg)",
                            }}
                          />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Price &amp; Plans</span>
                <h2>Affordable Packages</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ftco-animate d-flex">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <sup>$</sup> <span className="number">49</span>{" "}
                      <sub>/mo</sub>
                    </span>
                    <span className="excerpt d-block">For Adults</span>
                    <ul className="pricing-text mb-5">
                      <li>
                        <span className="fa fa-check mr-2" />
                        Individual Counseling
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Couples Therapy
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Family Therapy
                      </li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate d-flex">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <sup>$</sup> <span className="number">79</span>{" "}
                      <sub>/mo</sub>
                    </span>
                    <span className="excerpt d-block">For Children</span>
                    <ul className="pricing-text mb-5">
                      <li>
                        <span className="fa fa-check mr-2" />
                        Counseling for Children
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Behavioral Management
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Educational Counseling
                      </li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate d-flex">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <sup>$</sup> <span className="number">109</span>{" "}
                      <sub>/mo</sub>
                    </span>
                    <span className="excerpt d-block">For Business</span>
                    <ul className="pricing-text mb-5">
                      <li>
                        <span className="fa fa-check mr-2" />
                        Consultancy Services
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Employee Counseling
                      </li>
                      <li>
                        <span className="fa fa-check mr-2" />
                        Psychological Assessment
                      </li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ftco-appointment ftco-section img"
          style={{ backgroundImage: "url(images/bg_2.jpg)" }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 half ftco-animate">
                <h2 className="mb-4">Send a Message &amp; Get in touch!</h2>
                <form action="#" className="appointment">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down" />
                            </div>
                            <select name="" id="" className="form-control">
                              <option value="">Services</option>
                              <option value="">Relation Problem</option>
                              <option value="">Couple Counseling</option>
                              <option value="">Depression Treatment</option>
                              <option value="">Family Problem</option>
                              <option value="">Personal Problem</option>
                              <option value="">Business Problem</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          rows={7}
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Send message"
                          className="btn btn-primary py-3 px-4"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <div className="text text-center">
                    <a
                      href="blog-single.html"
                      className="block-20 img"
                      style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                    ></a>
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">18</span>
                        <span className="mos">April</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                    <h3 className="heading mb-3">
                      <a href="#">Social Media Risks To Mental Health</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <div className="text text-center">
                    <a
                      href="blog-single.html"
                      className="block-20 img"
                      style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                    ></a>
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">18</span>
                        <span className="mos">April</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                    <h3 className="heading mb-3">
                      <a href="#">Social Media Risks To Mental Health</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <div className="text text-center">
                    <a
                      href="blog-single.html"
                      className="block-20 img"
                      style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                    ></a>
                    <div className="meta text-center mb-2 d-flex align-items-center justify-content-center">
                      <div>
                        <span className="day">18</span>
                        <span className="mos">April</span>
                        <span className="yr">2020</span>
                      </div>
                    </div>
                    <h3 className="heading mb-3">
                      <a href="#">Social Media Risks To Mental Health</a>
                    </h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <h2 className="fw-bold text-light">Get an update every week</h2>
                <p className="text-soft-primary">
                  Livedoc was created in order to improve the patient
                  experience.
                  <br />
                  Providing world-class tests, and a wide range of other
                  services.
                </p>
              </div>
              <div className="col-lg-6">
                <h5 className="mb-3 text-soft-primary">
                  SUBSCRIBE TO NEWSLETTER{" "}
                </h5>
                <form className="row gx-2 gy-2 align-items-center">
                  <div className="col">
                    <div className="input-group-icon">
                      <label
                        className="visually-hidden"
                        htmlFor="inputEmailCta"
                      >
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
                      Subscribe
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
                  Departments
                </h5>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Eye care
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Cardiac are
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Heart care
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                  Membership
                </h5>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Free trial
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Silver
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="footer-link" href="#!">
                      Premium
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">
                  {" "}
                  Customer Care
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
                    All rights Reserved ©{" "}
                  </p>
                </div>
                <div className="col-12 col-sm-8 col-md-6">
                  <p className="fs--1 my-2 text-center text-md-end text-200">
                    {" "}
                    Made with&nbsp;
                    <svg
                      className="bi bi-suit-heart-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="#F95C19"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                    </svg>
                    &nbsp;by&nbsp;
                    <a className="fw-bold text-info" href="#" target="_blank">
                      Love
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    </>
  );
}

export default About
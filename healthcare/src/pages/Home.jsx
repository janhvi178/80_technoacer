import React from 'react'
import Quotebox from '../components/Quotebox'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Quotebox></Quotebox>
      <Services></Services>
      <>
        <section className="bg-secondary">
          <div
            className="bg-holder"
            style={{
              backgroundImage: "url(assets/img/gallery/bg-eye-care.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 col-xxl-6">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/eye-care.png"
                  alt="..."
                />
              </div>
              <div className="col-md-7 col-xxl-6 text-center text-md-start">
                <h2 className="fw-bold text-light mb-4 mt-4 mt-lg-0">
                  Lorem ipsum dolor sit amet.
                  <br className="d-none d-sm-block" />
                  Lorem, ipsum dolor.
                </h2>
                <p className="text-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                  <br className="d-none d-sm-block" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et.{" "}
                  <br className="d-none d-sm-block" />
                  you and your loved ones.{" "}
                </p>
                <div className="py-3">
                  <a
                    className="btn btn-lg btn-light rounded-pill"
                    href="#!"
                    role="button"
                  >
                    Learn more{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0" id="about">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/about-us.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                {/*/.bg-holder*/}
                <h1 className="text-center">ABOUT US</h1>
              </div>
            </div>
          </div>
          {/* end of .container*/}
        </section>
        <section className="py-5">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/about-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "contain",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 mb-5 mb-lg-0">
                <img
                  className="fit-cover rounded-circle w-100"
                  src="assets/img/gallery/health-care.png"
                  alt="..."
                />
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h2 className="fw-bold mb-4">
                  We are developing a healthcare{" "}
                  <br className="d-none d-sm-block" />
                  system around you
                </h2>
                <p>
                  We think that everyone should have easy access to excellent{" "}
                  <br className="d-none d-sm-block" />
                  healthcare. Our aim is to make the procedure as simple as{" "}
                  <br className="d-none d-sm-block" />
                  possible for our patients and to offer treatment no matter
                  <br className="d-none d-sm-block" />
                  where they are — in person or at their convenience.{" "}
                </p>
                <div className="py-3">
                  <button
                    className="btn btn-lg btn-outline-primary rounded-pill"
                    type="submit"
                  >
                    Learn more{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/doctors-us.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                {/*/.bg-holder*/}
                <h1 className="text-center">OUR DOCTORS</h1>
              </div>
            </div>
          </div>
          {/* end of .container*/}
        </section>
        <section className="py-5">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/doctors-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "contain",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="container">
            <div className="row flex-center">
              <div className="col-xl-10 px-0">
                <div
                  className="carousel slide"
                  id="carouselExampleDark"
                  data-bs-ride="carousel"
                >
                  <a
                    className="carousel-control-prev carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next carousel-icon z-index-2"
                    href="#carouselExampleDark"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval={10000}
                    >
                      <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/anita.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Anita Deshai</h5>
                              <p className="mb-0 fs-xxl-1">
                                Pediatrics, Gochi Medicine
                              </p>
                              <p className="text-600 mb-0">
                                Florida, United States
                              </p>
                              <p className="text-600 mb-4">
                                10 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/jane.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Jane Flakis</h5>
                              <p className="mb-0 fs-xxl-1">
                                Gynaecology, Abenka Care
                              </p>
                              <p className="text-600 mb-0">
                                Melbourne, Australia
                              </p>
                              <p className="text-600 mb-4">
                                12 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/leo-mario.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Leo Mario</h5>
                              <p className="mb-0 fs-xxl-1">
                                Physiotherapy, FitCare
                              </p>
                              <p className="text-600 mb-0">London, England</p>
                              <p className="text-600 mb-4">
                                25 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-secondary hover-top rounded-pill border-0"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                      <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/anita.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Anita Deshai</h5>
                              <p className="mb-0 fs-xxl-1">
                                Pediatrics, Gochi Medicine
                              </p>
                              <p className="text-600 mb-0">
                                Florida, United States
                              </p>
                              <p className="text-600 mb-4">
                                10 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/jane.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Jane Flakis</h5>
                              <p className="mb-0 fs-xxl-1">
                                Gynaecology, Abenka Care
                              </p>
                              <p className="text-600 mb-0">
                                Melbourne, Australia
                              </p>
                              <p className="text-600 mb-4">
                                12 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/leo-mario.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Leo Mario</h5>
                              <p className="mb-0 fs-xxl-1">
                                Physiotherapy, FitCare
                              </p>
                              <p className="text-600 mb-0">London, England</p>
                              <p className="text-600 mb-4">
                                25 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-secondary hover-top rounded-pill border-0"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/anita.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Anita Deshai</h5>
                              <p className="mb-0 fs-xxl-1">
                                Pediatrics, Gochi Medicine
                              </p>
                              <p className="text-600 mb-0">
                                Florida, United States
                              </p>
                              <p className="text-600 mb-4">
                                10 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/jane.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Jane Flakis</h5>
                              <p className="mb-0 fs-xxl-1">
                                Gynaecology, Abenka Care
                              </p>
                              <p className="text-600 mb-0">
                                Melbourne, Australia
                              </p>
                              <p className="text-600 mb-4">
                                12 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-outline-secondary rounded-pill"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-8 mb-md-0">
                          <div className="card card-span h-100 shadow">
                            <div className="card-body d-flex flex-column flex-center py-5">
                              <img
                                src="assets/img/gallery/leo-mario.png"
                                width={128}
                                alt="..."
                              />
                              <h5 className="mt-3">Leo Mario</h5>
                              <p className="mb-0 fs-xxl-1">
                                Physiotherapy, FitCare
                              </p>
                              <p className="text-600 mb-0">London, England</p>
                              <p className="text-600 mb-4">
                                25 years experience
                              </p>
                              <div className="text-center">
                                <button
                                  className="btn btn-secondary hover-top rounded-pill border-0"
                                  type="submit"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
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
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/people.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                {/*/.bg-holder*/}
                <h1 className="text-center">PEOPLE WHO LOVE US</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/people-bg-1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="container">
            <div className="row align-items-center offset-sm-1">
              <div
                className="carousel slide"
                id="carouselPeople"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval={10000}
                  >
                    <div className="row h-100">
                      <div className="col-sm-3 text-center">
                        <img
                          src="assets/img/gallery/people-who-loves.png"
                          width={100}
                          alt=""
                        />
                        <h5 className="mt-3 fw-medium text-secondary">
                          Edward Newgate
                        </h5>
                        <p className="fw-normal mb-0">Founder Circle</p>
                      </div>
                      <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                        <h2>Fantastic Response!</h2>
                        <div className="my-2">
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star-half-alt me-2" />
                          <i className="far fa-star" />
                        </div>
                        <p>
                          This medical and health care facility distinguishes
                          itself from the competition by providing
                          technologically advanced medical and health care. A
                          mobile app and a website are available via which you
                          can easily schedule appointments, get online
                          consultations, and see physicians, who will assist you
                          through the whole procedure. And all of the
                          prescriptions, medications, and other services they
                          offer are 100% genuine, medically verified, and
                          proved. I believe that the Livedoc staff is doing an
                          outstanding job. Highly recommended their health care
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <div className="row h-100">
                      <div className="col-sm-3 text-center">
                        <img
                          src="assets/img/gallery/people-who-loves.png"
                          width={100}
                          alt=""
                        />
                        <h5 className="mt-3 fw-medium text-secondary">
                          Jhon Doe
                        </h5>
                        <p className="fw-normal mb-0">UI/UX Designer</p>
                      </div>
                      <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                        <h2>Fantastic Response!</h2>
                        <div className="my-2">
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star-half-alt me-2" />
                          <i className="far fa-star" />
                        </div>
                        <p>
                          This medical and health care facility distinguishes
                          itself from the competition by providing
                          technologically advanced medical and health care. A
                          mobile app and a website are available via which you
                          can easily schedule appointments, get online
                          consultations, and see physicians, who will assist you
                          through the whole procedure. And all of the
                          prescriptions, medications, and other services they
                          offer are 100% genuine, medically verified, and
                          proved. I believe that the Livedoc staff is doing an
                          outstanding job. Highly recommended their health care
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100">
                      <div className="col-sm-3 text-center">
                        <img
                          src="assets/img/gallery/people-who-loves.png"
                          width={100}
                          alt=""
                        />
                        <h5 className="mt-3 fw-medium text-secondary">
                          Jeny Doe
                        </h5>
                        <p className="fw-normal mb-0">Web Designer</p>
                      </div>
                      <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                        <h2>Fantastic Response!</h2>
                        <div className="my-2">
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star me-2" />
                          <i className="fas fa-star-half-alt me-2" />
                          <i className="far fa-star" />
                        </div>
                        <p>
                          This medical and health care facility distinguishes
                          itself from the competition by providing
                          technologically advanced medical and health care. A
                          mobile app and a website are available via which you
                          can easily schedule appointments, get online
                          consultations, and see physicians, who will assist you
                          through the whole procedure. And all of the
                          prescriptions, medications, and other services they
                          offer are 100% genuine, medically verified, and
                          proved. I believe that the Livedoc staff is doing an
                          outstanding job. Highly recommended their health care
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="position-relative z-index-2 mt-5">
                    <ol className="carousel-indicators">
                      <li
                        className="active"
                        data-bs-target="#carouselPeople"
                        data-bs-slide-to={0}
                      />
                      <li
                        data-bs-target="#carouselPeople"
                        data-bs-slide-to={1}
                      />
                      <li data-bs-target="#carouselPeople" data-bs-slide-to={2}>
                        {" "}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/people.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                <h1 className="text-center">APPOINTMENT</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container">
            <div className="row">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(assets/img/gallery/dot-bg.png)",
                  backgroundPosition: "bottom right",
                  backgroundSize: "auto",
                }}
              ></div>
              <div className="col-lg-6 z-index-2 mb-5">
                <img
                  className="w-100"
                  src="assets/img/gallery/appointment.png"
                  alt="..."
                />
              </div>
              <div className="col-lg-6 z-index-2">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="inputName">
                      Name
                    </label>
                    <input
                      className="form-control form-livedoc-control"
                      id="inputName"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="inputPhone">
                      Phone
                    </label>
                    <input
                      className="form-control form-livedoc-control"
                      id="inputPhone"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label visually-hidden"
                      htmlFor="inputCategory"
                    >
                      Category
                    </label>
                    <select className="form-select" id="inputCategory">
                      <option selected="selected">Category</option>
                      <option> Category One</option>
                      <option> Category Two</option>
                      <option> Category Three</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label visually-hidden"
                      htmlFor="inputEmail"
                    >
                      Email
                    </label>
                    <input
                      className="form-control form-livedoc-control"
                      id="inputEmail"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      className="form-label visually-hidden"
                      htmlFor="validationTextarea"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control form-livedoc-control"
                      id="validationTextarea"
                      placeholder="Message"
                      style={{ height: 250 }}
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-primary rounded-pill"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <div
                  className="bg-holder bg-size"
                  style={{
                    backgroundImage: "url(assets/img/gallery/blog-post.png)",
                    backgroundPosition: "top center",
                    backgroundSize: "contain",
                  }}
                ></div>
                <h1 className="text-center">RECENT BLOGPOSTS</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(assets/img/gallery/dot-bg.png)",
              backgroundPosition: "top left",
              backgroundSize: "auto",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/covid-19.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 21, 2021</span>
                    <span className="fs--1" />
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      COVID-19: The Most Up-to-Date Information
                    </h5>
                    <a className="stretched-link" href="#!">
                      read full article
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/laboratories.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Lifestyle</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 25, 2021</span>
                    <span className="fs--1" />
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      Importance of Accreditation for Laboratories
                    </h5>
                    <a className="stretched-link" href="#!">
                      read full article
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/nicotine.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 28, 2021</span>
                    <span className="fs--1" />
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      The dangers of nicotine are addressed in depth
                    </h5>
                    <a className="stretched-link" href="#!">
                      read full article
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4">
                <div className="card h-100 shadow card-span rounded-3">
                  <img
                    className="card-img-top rounded-top-3"
                    src="assets/img/gallery/treatment.png"
                    alt="news"
                  />
                  <div className="card-body">
                    <span className="fs--1 text-primary me-3">Health</span>
                    <svg
                      className="bi bi-calendar2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                        {" "}
                      </path>
                    </svg>
                    <span className="fs--1 text-900">Nov 30, 2021</span>
                    <span className="fs--1" />
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                      Treatment of patients with diabetes during COVID-19
                    </h5>
                    <a className="stretched-link" href="#!">
                      read full article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer></Footer>
    </>
  );
}

export default Home
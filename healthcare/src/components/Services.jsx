import React from 'react'

const Services = () => {
  return (
    <>
      <section className="py-5" id="departments">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(assets/img/gallery/bg-departments.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              {/*/.bg-holder*/}
              <h1 className="text-center">OUR SERVICES</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container">
          <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/neurology.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/neurology.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Neurology</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/eye care.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/eye care.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Eye care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/cardiac care.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/cardiac care.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Cardiac care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/child health.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/child health.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Child care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/osteo.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/osteo.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Osteoporosis</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <img
                      className="mb-3 deparment-icon"
                      src="../src/assets/img/ent.jpg"
                      alt="..."
                    />
                    <img
                      className="mb-3 deparment-icon-hover"
                      src="../src/assets/img/ent.jpg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">ENT</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services

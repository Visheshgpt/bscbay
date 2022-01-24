import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ now }) => {
  return (
    <div className="card-box-information  project-card bg-gradient p-4">
      <div>
        <div className="mb-4">
          <div className="d-flex flex-column mb-3">
            <div className="me-2">
              <Link to="/projects/item">
                <div class="icon-box">
                  <span>
                    <img
                      className="d-block h-100 w-100"
                      src="https://i.ibb.co/3B3r3Kg/VERVE.jpg"
                      alt="..."
                    />
                  </span>
                </div>
              </Link>
            </div>
            <div className="title-box mt-2">
              <div className="d-flex flex-row justify-content-between">
                <div className="mb-1">
                  <Link to="/projects/item">
                    <h4 className="mb-0 fw-bold text-white">Verve</h4>
                  </Link>
                </div>
                <div className="item-social d-flex gap-2 mb-1">
                  <a
                    className="d-block"
                    href="https://vervetv.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      class="d-block icon-hover"
                      height="20"
                      src="./assets/icons/sm-icon-3.png"
                      alt=".."
                    />
                  </a>
                  <a
                    className="d-block"
                    href="https://twitter.com/Verve_TV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      class="d-block icon-hover"
                      height="20"
                      src="./assets/icons/sm-icon-0.png"
                      alt=".."
                    />
                  </a>
                  <a
                    className="d-block"
                    href="https://t.me/VerveOfficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      class="d-block icon-hover"
                      height="20"
                      src="./assets/icons/sm-icon-3.png"
                      alt=".."
                    />
                  </a>
                </div>
              </div>
              <div>
                <Link
                  className="items-morex d-flex justify-content-between"
                  to="/projects/item"
                >
                  <div className="mb-1">
                    <span className="badge bg-primary bg-opacity-50 text-primary rounded-pill">
                      <span className="badge p-1 bg-primary d-inline-block rounded-circle" />{" "}
                      Opens in TBA
                    </span>
                  </div>
                  <div>
                    <span className="badge bg-primary bg-opacity-50 text-primary rounded-pill">
                      BUSD
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h6>Interactive streaming, reimagined on the Velas blockchain!</h6>
          </div>
        </div>
        <div className="mt-auto">
          <div>
            <div className="pp-card-col d-flex justify-content-between">
              <h5 className="text-white-3">Swap rate</h5>
              <b class="nowrap">1 BUSD = 200 WWY</b>
            </div>
            <div className="pp-card-col d-flex   justify-content-between">
              <h5 className="text-white-3">Cap</h5>
              <b>300000</b>
            </div>
            <div className="pp-card-col text-end text-capitalize d-flex   justify-content-between">
              <h5 className="text-white-3">Access</h5>

              <b>Private</b>
            </div>
          </div>
          <div className="mt-3 detail-design p-0">
            <Link to="/projects/item">
              <div className="mt-2 detail-design-color">
                <span>Details</span>
              </div>
            </Link>
          </div>
          <div className="mt-3">
            <div className="small text-white-50">Progress</div>
            <div className="my-2 progress-radius">
              <ProgressBar variant="color-3" now={now} />
            </div>
            <div className="nav justify-content-between gap-2 small">
              <span>{now}%</span>
              <span>0.0000/0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

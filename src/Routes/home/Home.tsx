import * as React from "react";
import { Button } from "../../UI/button/Button";

export const Home: React.FC = props => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button buttonType="link" href="#" label="Learn more" />
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>

									
                  <button type="button" className="btn btn-danger bmd-btn-fab">
                    <i className="material-icons">grade</i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>

                  <button type="button" className="btn btn-primary bmd-btn-fab">
                    <i className="material-icons">grade</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

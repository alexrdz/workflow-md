import * as React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { UserProfile } from "../../Components/userprofile/UserProfile";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <UserProfile />
      <Container className="py-4 bg-light">
        <Row>
          <Col sm="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="info" className="active">Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="info" className="active">Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <div className="container">
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
      </div> */}
    </React.Fragment>
  );
};

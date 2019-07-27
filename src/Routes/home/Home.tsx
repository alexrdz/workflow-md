import * as React from "react";
// import { Button } from "../../UI/button/Button";
// import { Button } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
	CardSubtitle, CardBody } from 'reactstrap';


export const Home: React.FC = () => {
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
          <Button color="danger" className="btn-raised">Learn More</Button>
        </p>
      </div>

			<div className="container">
			<CardColumns>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/256x180.png?text=Visit+WhoIsHostingThis" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="primary">Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/256x180.png?text=Visit+WhoIsHostingThis" alt="Card image cap" />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary" className="btn-raised">Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/256x180.png?text=Visit+WhoIsHostingThis" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
			</div>

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

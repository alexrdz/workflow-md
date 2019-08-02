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
  Button,
  CardLink,
  ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

import { UserProfile } from "../../Components/userprofile/UserProfile";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <UserProfile />
      <Container className="py-4 bg-light">
        <Row className="mb-4">
          <Col sm="4">
            <Card body inverse className="bg-info shadow-sm">
              <CardText>
                987,459
                <br />
                <small>Total Website Traffics</small>
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body inverse className="bg-warning shadow-sm">
              <CardText>
                356,785K
                <br />
                <small>Total Website Impressions</small>
              </CardText>
            </Card>
          </Col>
          <Col sm="4">
            <Card body inverse className="bg-danger shadow-sm">
              <CardText>
                $58,778
                <br />
                <small>Total Online Sales</small>
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="6" className="mb-4">
            <Card className="shadow-none border">
              <CardImg
                top
                width="100%"
                src="https://placeimg.com/640/480/any"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" className="mb-4">
            <Card className="shadow-none border">
              <CardImg
                top
                width="100%"
                src="https://placeimg.com/640/480/any"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button color="secondary">Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <Card className="shadow-none border">
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src="https://placeimg.com/640/480/any"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <blockquote className="mt-4">
              <h3>Aside title</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat hic minus commodi, nobis mollitia repellat sed inventore
                atque rem deleniti provident laborum aliquam odio, molestiae
                minima unde quibusdam veritatis? Possimus.
              </p>
            </blockquote>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="6">
            <Card className="shadow-none border">
              <CardBody>
                <ListGroup>
                  <ListGroupItem active className="shadow-none">
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem className="shadow-none">
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem className="shadow-none">
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <blockquote className="mt-4">
              <h3>Aside title</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat hic minus commodi, nobis mollitia repellat sed inventore
                atque rem deleniti provident laborum aliquam odio, molestiae
                minima unde quibusdam veritatis? Possimus.
              </p>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

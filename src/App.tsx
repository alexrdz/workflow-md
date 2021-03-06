import * as React from "react";
import "./App.css";
import { Router, RouteComponentProps, Link } from "@reach/router";
import { NavBar } from "./UI/nav/NavBar";
import { SideNav } from "./UI/nav/SideNav";
import { Home } from "./Routes/home/Home";
import { Contact } from "./Routes/contact/Contact";
import { NavItem, Container, Row, Col } from "reactstrap";
import { Footer } from "./Components/footer/Footer";

type Props = { component: React.ComponentType } & RouteComponentProps;
const Route: React.FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;

class App extends React.Component<{}, { toggle: boolean }> {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;

    return (
      <React.Fragment>
        <NavBar />
        <Container fluid>
          <Row>
            <Col md="3">
              <SideNav>
                <NavItem>
                  <Link className="nav-link" to="#">
                    Link
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="#">
                    Link
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="#">
                    Another Link
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="#">
                    Last Link
                  </Link>
                </NavItem>
              </SideNav>
            </Col>

            <Col md="9">
              <Router>
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
              </Router>
            </Col>
          </Row>
        </Container>

				<Footer />
      </React.Fragment>
    );
  }
}

export default App;

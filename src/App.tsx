import * as React from "react";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min";
import { Router, RouteComponentProps } from "@reach/router";
import { NavBar } from "./UI/nav/NavBar";
import { SideNav } from "./UI/nav/SideNav";
import { Home } from "./Routes/home/Home";
import { Contact } from "./Routes/contact/Contact";

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
        <div className="container-fluid">
          <div className="row">
            <SideNav />
						<div className="col-12 col-md-9">
							<Router>
								<Route path="/" component={Home} />
								<Route path="/contact" component={Contact} />
							</Router>
						</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

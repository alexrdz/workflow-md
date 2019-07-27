import * as React from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min';
import { Router, RouteComponentProps } from "@reach/router";
import {Nav} from './UI/nav/Nav';
import {Home} from './Routes/home/Home';
import {Contact} from './Routes/contact/Contact';

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
      <div className="App">
				<Nav />

				<Router>
					<Route path="/" component={Home}/>
					<Route path="/contact" component={Contact}/>
    		</Router>
			</div>
    );
  }
}

export default App;

import * as React from 'react';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min';
import { Router, Link } from "@reach/router";
import {Nav} from './UI/nav/Nav';
import {Home} from './Routes/home/Home';
import {Contact} from './Routes/contact/Contact';

class App extends React.Component<{}, { toggle: boolean }> {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
				<Nav />

				<Router>
					<Home path="/" />
					<Contact path="/contact" />
    		</Router>
			</div>
    );
  }
}

export default App;

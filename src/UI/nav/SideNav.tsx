import * as React from "react";
import {Link} from '@reach/router';
import { Nav, NavItem, NavLink } from "reactstrap";
import './sidenav.css';

export const SideNav: React.FunctionComponent = () => {
  return (
		<div className="col-12 col-md-3 side-nav border-right">
			<Nav vertical>
				<NavItem>
					<Link className="nav-link" to="#">Link</Link>
				</NavItem>
				<NavItem>
					<Link className="nav-link" to="#">Link</Link>
				</NavItem>
				<NavItem>
					<Link className="nav-link" to="#">Another Link</Link>
				</NavItem>
				<NavItem>
					<Link className="nav-link" to="#">
						Last Link
					</Link>
				</NavItem>
			</Nav>
		</div>
  );
};

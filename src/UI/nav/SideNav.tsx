import * as React from "react";
import {Link} from '@reach/router';
import { Nav, NavItem, NavLink } from "reactstrap";
import './sidenav.css';

export const SideNav: React.FunctionComponent = props => {
  return (
		<div className="col-12 col-md-3 side-nav border-right">
			<Nav vertical>
			{props.children}
			</Nav>
		</div>
  );
};

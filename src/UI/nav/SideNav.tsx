import * as React from "react";
import { Nav } from "reactstrap";
import {SideNavContainer} from './SideNavContainer';

export const SideNav: React.FunctionComponent = props => {
  return (
		<SideNavContainer theme="default" className="position-sticky col-12 col-md-3 border-right">
			<Nav vertical>
			{props.children}
			</Nav>
		</SideNavContainer>
  );
};

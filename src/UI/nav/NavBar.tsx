import * as React from "react";
import {Link} from '@reach/router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {Drawer} from '../drawer/Drawer';
import {StickyHeader} from './NavBarHeader';



export const NavBar: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
	};

	return (
		<Navbar color="primary" dark expand="md" className="shadow-none border-bottom position-sticky fixed-top">
          <NavbarBrand href="/">MSI React Starter</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
							<Link className="nav-link" to="/contact">Contact</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
						<Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Login</Link>
              </NavItem>
						</Nav>
					</Collapse>
        </Navbar>
	);
};

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
		<Navbar color="secondary" dark expand="md" className="shadow-none border-bottom position-sticky fixed-top">
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
	)

  // return (
	// 	<StickyHeader>
  //   <nav className="main-nav navbar navbar-light bg-light navbar-expand-lg shadow-none border-bottom">
  //     <a className="navbar-brand" href="#">
  //       MSI React Seed
  //     </a>
	// 		<Drawer />

  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav mr-auto">

  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">
  //             Home <span className="sr-only">(current)</span>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link" to="/contact">
  //             Contact
  //           </Link>
  //         </li>
	// 				<Dropdown isOpen={isOpen} toggle={toggle}>
  //       <DropdownToggle caret>
  //         Dropdown
  //       </DropdownToggle>
  //       <DropdownMenu>
  //         <DropdownItem header>Header</DropdownItem>
  //         <DropdownItem>Some Action</DropdownItem>
  //         <DropdownItem disabled>Action (disabled)</DropdownItem>
  //         <DropdownItem divider />
  //         <DropdownItem>Foo Action</DropdownItem>
  //         <DropdownItem>Bar Action</DropdownItem>
  //         <DropdownItem>Quo Action</DropdownItem>
  //       </DropdownMenu>
  //     </Dropdown>
  //         {/* <li className="nav-item dropdown">
  //           <Link
  //             className="nav-link dropdown-toggle"
  //             to="#"
  //             id="navbarDropdown"
  //             role="button"
  //             data-toggle="dropdown"
  //             aria-haspopup="true"
  //             aria-expanded="false"
  //           >
  //             Dropdown
  //           </Link>
  //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //             <a className="dropdown-item" href="#">
  //               Action
  //             </a>
  //             <a className="dropdown-item" href="#">
  //               Another action
  //             </a>
  //             <div className="dropdown-divider" />
  //             <a className="dropdown-item" href="#">
  //               Something else here
  //             </a>
  //           </div>
  //         </li> */}
  //         <li className="nav-item">
  //           <Link className="nav-link disabled" to="#">
  //             Disabled
  //           </Link>
  //         </li>

	// 			</ul>
  //       <form className="form-inline my-2 my-lg-0">
  //         <input
  //           className="form-control mr-sm-2"
  //           type="search"
  //           placeholder="Search"
  //           aria-label="Search"
  //         />
  //         <button
  //           className="btn btn-outline btn-light my-2 my-sm-0"
  //           type="submit"
  //         >
  //           Search
  //         </button>
  //       </form>
  //     </div>
  //   </nav>
	// 	</StickyHeader>
  // );
};

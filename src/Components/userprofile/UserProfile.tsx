import * as React from "react";
import {
  Media,
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export const UserProfile: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
	};

  return (
    <Media className="p-4 border-bottom">
      <Media left href="#" className="pr-2 mr-3 border-right">
        <Media
          object
          src="https://i.pravatar.cc/150?img=48"
					alt="Generic placeholder image"
					className="mb-4"
        />
				<br/>
			<Button color="primary" className="active mr-2">View Full Profile</Button>
      </Media>
      <Media body>
        <Media heading>User Profile</Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.

        <div className="my-4">
          <Button color="success" className="active mr-2">Edit Profile</Button>
          <ButtonDropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle color="danger" className="active" caret>Actions</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Dropdown Link</DropdownItem>
              <DropdownItem>Dropdown Link</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
				{/* <ButtonGroup>
        </ButtonGroup> */}
				</div>
      </Media>
    </Media>
  );
};

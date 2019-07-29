import * as React from 'react';
import {Button} from 'reactstrap';

export const RippleButton = (props) => {
	const [rippleOn, setRippleOn] = React.useState(false);
	const toggleRipple = () => {
		setRippleOn(!rippleOn);
	};
	return (
		<Button onMouseOver={toggleRipple} onMouseOut={toggleRipple}>
			{props.children}
			<div className="ripple-container">
			<div className={`ripple-decorator ese ${rippleOn ? 'ripple-on' : 'ripple-out'}`}></div>
			</div>
		</Button>
	)
};

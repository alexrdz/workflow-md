import * as React from 'react';
import {Button} from 'reactstrap';

export const Hero: React.FunctionComponent = () => {
	return (
	<div className="jumbotron col-12">
	<h1 className="display-4">Hello, world!</h1>
	<p className="lead">
		This is a simple hero unit, a simple jumbotron-style component for
		calling extra attention to featured content or information.
	</p>
	<hr className="my-4" />
	<p>
		It uses utility classes for typography and spacing to space content
		out within the larger container.
	</p>
	<p className="lead">
		<Button color="danger" className="btn-raised">Learn More</Button>
	</p>
	</div>
	);
};


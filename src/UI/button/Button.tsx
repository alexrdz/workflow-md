import * as React from 'react';
import './button.css';

interface IProps {
	buttonType: string;
	label: string;
	href?: string;
	size?: 'lg | sm';
}

export const Button = (props: IProps) => {
	const {label} = props;

	if (props.buttonType === 'link') {
		return (
			<a className="btn btn-primary btn-lg" href={props.href} role="button">
				{label}
			</a>
		);
	} else {
		return (
			<button className="btn btn-primary btn-lg" type="button">{label}</button>
		)
	}
};

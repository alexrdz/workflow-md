import * as React from 'react';
import {
  Button
} from "reactstrap";

interface IProps extends React.Props<any> {
	children?: string;
	className?: string;
};

export const PrimaryButton: React.FunctionComponent<React.HTMLAttributes<HTMLButtonElement>> = (props: IProps) => {
	return (
		<Button color="primary">
			{props.children}
		</Button>
	)
};

export const SuccessButton: React.FunctionComponent<React.HTMLAttributes<HTMLButtonElement>> = (props: IProps) => {
	console.log(props);
	return (
		<Button color="success" className={`${props.className}`}>
			{props.children}
		</Button>
	)
};

export const DangerButton: React.FunctionComponent<React.HTMLAttributes<HTMLButtonElement>> = (props: IProps) => {
	console.log(props);
	return (
		<Button color="danger" className={`${props.className}`}>
			{props.children}
		</Button>
	)
};

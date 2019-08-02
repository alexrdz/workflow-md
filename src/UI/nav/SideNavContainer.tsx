import styled from '@emotion/styled';
import theme from '../theme/';

let sticky = {
	top: '4rem',
	zIndex: 10,
	height: 'calc(100vh - 4rem)',
}

export const SideNavContainer = styled.div(props => {

	let styles = {};

	if (props.theme && props.theme === 'dark') {
		styles = {
			...theme.dark
		}
	}

	if (props.theme === 'light') {
		styles = {
			...theme.light
		}
	}

	if (props.className.includes('position-sticky')) {
		styles = {
			...styles,
			...sticky
		}
	}

	return styles;
});

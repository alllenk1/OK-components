export type ButtonProps = {
	text?: string;
	type?: 'primary' | 'secondary';
	size?: '28' | '36' | '56';
	state?: 'enabled' | 'loading' | 'disabled';
	quantityCounter?: string;
	onClick?: () => void;
};

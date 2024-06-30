export type CounterSize = '8' | '12' | '16' | '20' | '24';

export type CounterProps = {
	type?: 'primary' | 'secondary';
	size?: CounterSize;
	quantity?: string;
	pulse?: boolean;
};

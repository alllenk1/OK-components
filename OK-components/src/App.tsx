import React from 'react';

import { Counter } from './components/Counter/Counter.tsx';
import { Button } from './components/Button/Button.tsx';

import './App.css';

function App() {
	return (
		<>
			<Counter size="12" pulse="true" />
			<Button text="Что сделать" />
		</>
	);
}

export default App;

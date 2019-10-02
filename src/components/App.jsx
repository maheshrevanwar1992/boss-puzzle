import React, {useState} from 'react';
import Puzzle from './Puzzle/Puzzle';
import {SIZES, DEFAULT_SIZE} from './App.constants';

import './App.scss';

const App = () => {
	const [selectedSize, setSize] = useState(DEFAULT_SIZE);
	return (
		<div className="App">
			<div className='header'>
				<h1>Puzzle Game</h1>
				<select onChange={e => setSize(Number(e.target.value))} value={selectedSize}>
					{SIZES.map(size => (
						<option key={size} value={size}>{`${size} X ${size}`}</option>
					))}
				</select>
			</div>
			<Puzzle key={selectedSize} size={selectedSize}/>
		</div>
	);
};

export default App;

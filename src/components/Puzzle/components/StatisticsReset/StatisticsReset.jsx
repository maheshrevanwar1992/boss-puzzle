import React, {memo} from 'react';
import './StatisticsReset.scss';

const StatisticsReset = ({moves, onReset}) => {
	return (
		<div className='statistics-reset'>
			<div className='moves'>
				<label>Moves</label>
				<div className='count'>{moves}</div>
			</div>
			<div className='button' onClick={onReset}>
				Reset
			</div>
		</div>
	);
};

export default memo(StatisticsReset);
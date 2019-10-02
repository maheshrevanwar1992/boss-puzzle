import React from 'react';
import {getArrayOfXRandomElementsWith1Null, isClickedIndexValid, isPuzzleSolved} from './Puzzle.utils';
import StatisticsReset from './components/StatisticsReset/StatisticsReset';

import './Puzzle.scss';

export default class Puzzle extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = Puzzle.getInitialState(props.size);
	}

	static getInitialState = (size) => ({
		numbers: getArrayOfXRandomElementsWith1Null(size * size),
		solved: false,
		moves: 0,
	});

	handleOnReset = () => {
		const {size} = this.props;
		this.setState(Puzzle.getInitialState(size));
	};

	moveTile = (clickedIndex) => {
		const {size} = this.props;
		const {numbers, moves} = this.state;
		const nullIndex = numbers.findIndex(n => n === null);

		if (isClickedIndexValid(clickedIndex, nullIndex, size)) {
			const newNumbers = [...numbers];
			newNumbers[nullIndex] = newNumbers[clickedIndex];
			newNumbers[clickedIndex] = null;


			this.setState({
				numbers: newNumbers,
				solved: isPuzzleSolved(newNumbers),
				moves: moves + 1,
			});
		}
	};

	render() {
		const {size} = this.props;
		const {numbers, solved, moves} = this.state;
		return (
			<div className='puzzle-wrapper'>
				<StatisticsReset onReset={this.handleOnReset} moves={moves}/>
				<div className='puzzle' style={{gridTemplateColumns: `repeat(${size}, 1fr)`}}>
					{
						numbers.map((num, i) => {
							return (<div key={num} className='space'>
								{
									num &&
									<div className='tile' onClick={() => this.moveTile(i)}>
										{num}
									</div>
								}
							</div>);
						})
					}
				</div>
				{
					solved &&
					<div className='winner'>
						<div className='message'>
							WINNER
						</div>
					</div>
				}
			</div>
		);
	}
}
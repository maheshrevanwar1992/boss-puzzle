const shuffle = (array) => {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
	//return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null, 15];
};

const getArrayOfXRandomElements = (count) => {
	const arr = [];
	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}
	return arr;
};

export const getArrayOfXRandomElementsWith1Null = (count) => {
	if (count > 0) {
		return shuffle([...getArrayOfXRandomElements(count - 1), null]);
	}
	return [];
};


const isIndexFromSameRow = (firstIndex, secondIndex, size) => {
	return Math.floor((firstIndex / size)) === Math.floor((secondIndex / size))
};

const isIndexFromSameColumn = (firstIndex, secondIndex, size) => {
	return (firstIndex % size) === (secondIndex % size)
};

export const isClickedIndexValid = (clickedIndex, nullIndex, size) => {

	const leftIndex = nullIndex - 1;
	const rightIndex = nullIndex + 1;

	const topIndex = nullIndex - size;
	const bottomIndex = nullIndex + size;

	const validIndex = [];

	if (isIndexFromSameRow(leftIndex, nullIndex, size)) {
		validIndex.push(leftIndex);
	}

	if (isIndexFromSameRow(rightIndex, nullIndex, size)) {
		validIndex.push(rightIndex);
	}

	if (isIndexFromSameColumn(topIndex, nullIndex, size)) {
		validIndex.push(topIndex);
	}

	if (isIndexFromSameColumn(bottomIndex, nullIndex, size)) {
		validIndex.push(bottomIndex);
	}

	return validIndex.indexOf(clickedIndex) !== -1;
};

export const isPuzzleSolved = (numbers) => {
	for (let i = 0; i < numbers.length - 1; i++) {
		if (i + 1 !== numbers[i]) {
			return false;
		}
	}
	return true;
};
const array = [5, 2, 9, 1, 5, 6];

function bubbleSort(array, order = 'asc') {
	const result = [...array];

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			const shouldSwap =
				(order === 'asc' && result[j] > result[j + 1]) ||
				(order === 'desc' && result[j] < result[j + 1]);

			if (shouldSwap) {
				const temp = result[j];
				result[j] = result[j + 1];
				result[j + 1] = temp;
			}
		}
	}

	return result;
}

console.log(bubbleSort(array, 'asc'));
console.log(bubbleSort(array, 'desc'));

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

const sortedArray = bubbleSort(array, 'asc');
console.log(sortedArray);
console.log(binarySearch(sortedArray, 5));

function checkBracketsPlacing(str) {
	const memory = [];
	const brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	for (const char of str) {
		if (brackets[char]) {
			memory.push(char);
		} else if (Object.values(brackets).includes(char)) {
			const last = memory.pop();

			if (brackets[last] !== char) {
				return false;
			}
		}
	}

	return memory.length === 0;
}

console.log(checkBracketsPlacing("(){}[]"));
console.log(checkBracketsPlacing("(){}]["));
console.log(checkBracketsPlacing("({[]})"));
console.log(checkBracketsPlacing("({[)]}"));
console.log(checkBracketsPlacing("((())"));

















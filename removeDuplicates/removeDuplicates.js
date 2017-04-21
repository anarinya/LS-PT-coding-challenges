/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */

const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 1, 1, 1, 2, 2, 3, 4, 5, 5];

const removeDuplicates = (arr) => {
	let found = {};
	let arr2 = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		if (!found[arr[i]]) {
			found[arr[i]] = 1;
			arr2.push(arr[i]);
		}
	}
	return arr2;
};

console.log(removeDuplicates(arr));

'use strict';

/* Realizēsim šķirošanas algoritmus, izmantojot šādus algoritmus: Izvēles algoritmu, Burbuļa šķirošanas algoritmu un Ātrās šķirošanas algoritmu: . */

/* Izvēles šķirošanas algoritma pieraksts: . */

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for(let j = i + 1; j < array.length; j++) {
			if (array[i] < array[indexMin]) {
				indexMin = j;
			}
			count += 1;
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}

console.log(selectionSort(array));
console.log(array.length);
console.log('count = ', count);
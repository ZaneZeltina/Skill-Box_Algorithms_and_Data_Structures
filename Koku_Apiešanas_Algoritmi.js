'use strict';

/* Izskatīsim rekursīvos un destruktīvos koku apiešans algoritmus. Kas tad ir koki? Koki ir: Tā ir rekusrsīva datu sistēma, kur katrs mezgls arī ir koks, bet dotajam kokam katrs mezglas ir apakškoks. Realizēsim personīgā binārā koka klasi. Bet tagad ķersimies klāt algoritmiem. Mums ir koks, un mums nepieciešams apiet katra koka mezglu, aprēķināt katra koka mezgla summu. Izskatīsim to ar piemēru: . */

const tree = [
	{
		v: 5,
		c: [
			{
				v: 10,
				c: [
					{
						v: 11,
					}
				]
			},
			{
				v: 7,
				c: [
					{
						v: 5,
						c: [
							{
								v: 1
							}
						]
					}
				]
			}
		]
	},
	{
		v: 5,
		c: [
			{
				v: 10
			},
			{
				v: 15
			}
		]
	}
];

const recursive = (tree) => {
	let sum = 0;
	tree.forEach(node => {
		sum += node.v;
		if (!node.c) {
			return node.v;
		}
		sum += recursive(node.c);
	});
	return sum;
};

const iteratiom = (tree) => {
	if (!tree.length) {
		return 0;
	}
	let sum = 0;
	let stack = [];
	tree.forEach(node => stack.push(node));
	while (stack.length) {
		const node = stack.pop();
		sum += node.v;
		if (node.c) {
			node.c.forEach(child => stack.push(child));
		}
	}
	return sum;
};

console.log(recursive(tree));
console.log(iteratiom(tree));

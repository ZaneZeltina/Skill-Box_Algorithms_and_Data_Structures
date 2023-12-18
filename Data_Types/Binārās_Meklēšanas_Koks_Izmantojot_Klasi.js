'use strict';

/* Binārais koks: Tā ir datu struktūra, kur katrs binārā koka mezgls arī ir koks, jo struktūra ir rekursīva. Binārā koka īpatnība ir tā, ka katram mezglam var būt tikai divi pēcnācēji, sekotāji. Šie mezgli tiek pievienoti izmantojot īpašu metodi. Ja pievienojamā koka vērtība ir mazāka nekā dotais stūris (esošais tā atrašanās vietas stūris), tad vērtība aiziet uz kreiso koka pusi, bet, ja lielāka, tad tā aiziet uz labo pusi. Salīdzināšana tiek izpildīta katram Binārā koka mezglam. Un sanāk tā, ka Binārā koka labajā pus: ir lielākās vērtības, bet kreisajā pusē: mazākās vērtības. */

/* Šis koks tiek saukts par: Binārās meklēšanas koku, jo analoģiski binārās meklēšanas algoritmam šeit var atrast datus algoritmiskā laikā. Izskatīsim Binārā koka pieraksta piemēru: . */

class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(value) {
		if (!this.root) {
			this.root = new TreeNode(value);
		} else {
			let node = this.root;
			let newNode = new TreeNode(value);
			while (node) {
				if (value > node.value) {
					if (!node.right) {
						break;
					}
					node = node.right;
				} else {
					if (!node.left) {
						break;
					}
					node = node.left;
				}
			}
			if (value > node.value) {
				node.right = newNode;
			} else {
				node.left = newNode;
			}
		}
	}

	print(root = this.root) {
		if (!root) {
			return true;
		}
		console.log(root.value);
		this.print(root.left);
		this.print(root.right);
	}
}

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();
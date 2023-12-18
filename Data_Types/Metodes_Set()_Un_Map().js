'use strict';

/* JavaScript programmēšanas valodā ir divas iebūvētas struktūras: Set() un Map(). Struktūra: Map() sevī glabā atslēgas un to nozīmes, pāra tipa datus, kodā tas izskatās šādi: key: value; . Atslēgas vērtību mēs iegūstam pēc atslēgas nosaukuma. Galvenā šādas struktūras: Map() izmantošanas priekšrocība ir tā, ka mēs varam pa konstantu laiku pievienot objektu struktūras, un izvilkt tās. Struktūra: Set() tā ir sava veida daudzskatlība datu masīvos, kas sevī glabā tikai unikālas vērtības. izskatīsim šīs abas struktūras ar piemēriem: . */

const map = new Map();
const objKey = { id: 5 };

map.set('vārds', 'Zane');
map.set(objKey, 'Zane');

console.log(map.get('vārds'));
console.log(map.get(objKey));

/* Šinī kodā mēs izmantojam divus pieraksta veidus, izmantojot parasto deklarēšanu: const ar metodi: Map(), izmantojam metodi: map.set(), izpildām konsoles izvadē metodi: map.get(). To pašu rezultātu mēs panākam izmantojot pierakstu ar objektu: {}. */

/* Izskatīsim struktūras: Set() pieraksta piemēru: */

const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(4);
set.add(3);

console.log(set);

/* Kā redzam mēs iegūstam unikālu vērtību datus, kuri neatkārtojās, mēs iegūstam objektu. */
'use strict';

/* Šinī lekcijā mēs izpildīsim ļoti vienkāršu uzdevumu: Atrast unikālus elementus datu masīvā, kas ir jau sašķirots. Izskatīsim šāda uzdevuma atrisinājumu ar piemēru: . */

const phoneNumbers = [
	+79000000001,
	+79000000001,
	+79000000002,
	+79000000003,
	+79000000003,
	+79000000004,
	+79000000004,
	+79000000004,
	+79000000004,
	+79000000005
];
const uniqueNumbers = [];
let prevNumber = phoneNumbers[0];

for (let i = 1; i < phoneNumbers.length; i++) {
	if (prevNumber !== phoneNumbers[i]) {
		uniqueNumbers.push(prevNumber);
		prevNumber = phoneNumbers[i];
	}
}

uniqueNumbers.push(prevNumber);
console.log(uniqueNumbers);

/* Šis piemērs arī ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai algoritms pareizi darbotos un mēs konsolē saņemtu vēlamo rezultātu. Šī algoritma piemēra darbība ir gluži vienkārša: Mēs nosakām trīs mainīgos, izmantojam ciklu for, lai katru datu masīva elementu salīdzinātu savā starpā, un, ja tāda elementa vēl nav iekš mainīgā: uniqueNumbers, tad mēs to ieliekam iekš tā no mainīgā: prevNumber. Izpildot šādu kodu mēs konsolē redzam piecus dažādus telefona numurus. Redzam, ka mūsu algoritms strādā pareizi. */

/* Mēs varējām atrast visus datu masīva unikālos elementus vienā algoritma izpildes reizē. Šis algoritms nostrādāja daudz ātrāk nekā iepriekšējais, kura izpildes laiks bija: N2/2;. Strādāt ar jau sašķirotu datu masīvu ir daudz ērtāk un ātrāk. Kļūst aktuāls jautājums kādu pieeju mums izmantot šāda uzdevuma risināšanai? Vai mums ņemt iepriekšējo algoritmu, kur ir cikls iekš cikla, un kas izpildās diez gan lēni, jeb mums sašķirot datu masīvu un izmantot šo algoritmu. Lai atbildētu uz šo jautājumu mums ir jāiemācās salīdzināt algoritmus un salīdzināt to izpildes laikus. Tālāk kursā mēs uzzināsim kā katrs algoritms ir uzbūvēts no iekšienes un iemācīsimies tos salīdzināt. Mēs tikko sakām izskatīt algoritmus, un izskatīt to izpildes laikus. Mēs izskatījām vienkāršākos algoritmus, lai atrastu kādā datu masīvā maksimālās vērtības, gan nesašķirotā datu masīvā, gan jau sašķirotā datu masīvā. Nedaudz saskārāmies ar dinamisko programmēšanu un rupjā spēka pielietošanu. Nākošajā lekciju modulī mēs izskatīsim elementu atrašanu datu masīvā. Kā arī ļoti svarīgu algoritmu: Binārās meklēšanas algoritmu. */
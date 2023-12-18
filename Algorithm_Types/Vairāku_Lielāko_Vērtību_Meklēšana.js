'use strict';

/* Parunāsim atkal par to cik ilgā laikā izpildās mūsu kods, un cik ļoti šo laiku ietekmē datu masīva lielums. Atceramies koda piemēru no iepriekšējās lekcijas. Mums bija piemērā datu masīvs no septiņiem elementiem, mēs izmantojām ciklu: for. Bet cik ilgā laikā izpildītos kods, ja datu masīvs sastāvētu no 7 tūkt elementiem. Tas izpildītos 7 tūkt reižu ilgākā laikā. */

/* Algoritma lineārā sarežģītība ir algoritma darbības laika lineāra atkarība no ievades datu lieluma. */

/* Mēs daudz strādāsim ar šo jēdzienu, algoritma izpildes laika atkarību no datu lieluma. Tādēļ ir tik svarīgi šo saprast jau tagad. Tas palīdzēs mums salīdzināt dažādus algoritmus savā starpā, kurš izpildās ātrāk, bet kurš lēnāk. Veicot detalizētu salīdzināšanu: cik sekundēs tie izpildās. */

/* Sarežģīsim mūsu iepriekšējo uzdevumu, kad mums vajadzēja atrast vienu lielāko vērtību. Tagad mums ir uzdevums, kur mums jātrod divas jeb trīs lielākās vērtības. Kā mēs to varam izdarīt? iedomājamies to pašu piemēru par ģimeni, kur ir 7 locekļi, un mums no visiem septiņiem jāatrod divi vecākie ģimenes locekļi. Ja dati būtu jau sašķiroti, tad tas būtu vieglāk, bet atceramies ko mācījāmies par datu šķirošanu: ja mums ir ļoti daudz -ļoti lieli dati, tad šķirošana var aizņemt daudz laika. Izskatīsim situāciju ar ģimenes divu vecāko locekļu atrašanu to ar piemēru: . */

const ages = [10, 6, 15, 93, 42, 7, 32];
let maxAge = 0;

for (let i = 0; i < ages.length; i++) {
	maxAge = Math.max(maxAge, ages[i]);
}

let maxAge2 = 0;

for(let i = 0; i < ages.length; i++) {
	if(ages[i] < maxAge) {
		maxAge2 = Math.max(maxAge2, ages[i]);
	}
}

console.log(maxAge);
console.log(maxAge2);

/* Mēs veicam visas tās pašas darbības, ko iepriekšējā uzdevumā, tikai šinī piemērā mēs deklarējam, izmantojot atslēgvārdu: let vēl vienu mainīgo: maxAge2, kam pievienojam vērtību: 0. Izmantojam vēl vienu ciklu: for, iekš tā izmantojam nosacījumus, ja mainīgā: ages iterators ir mazāks par mainīgā: maxAge vērtību, tad mēs iekš mainīgā: maxAge2 pievienojam jaunu vērtību izmantojot konstrukciju: Math un metodi: max(), kuras iekavās rakstām mainīgo: (maxAge2, ages[i]). Izpildām konsoles izvadi divas reizes. Vienu reizi izvadot: maxAge un otro reizi: maxAge2. Redzam, ka konsole mums atgriež divas lielākās vērtības no datu masīva. */

/* Bet kas notika ar koda izpildes laiku. Tā kā mēs pievienojām vēl vienu ciklu, koda izpildes laiks palielinājās 2 reizes. */

/* Sarežģīsim mūsu uzdevumu. Izskatīsim tādu kodu, kas mums ļaus atrast nenoteikta skaita lielākās vērtības. Lai noteiktu katru reizi jaunu lielāko vērtību, mēs ņemam vērā iepriekšējo lielāko vērtību. Un atkal, lai atrisinātu šo sarežģīto uzdevumu mēs trenējāmies risinot mazus vienkāršus uzdevumus. Šādi mēs apvienojam risināšanas tehniku, kuru izmantojot mēs varam atrast nenoteikta skaita lielākās vērtības. Mēs varam izmantot mainīgo deklarēšanu nosakot: minValue un maxValue. Šo mainīgo izmantošana ir ļoti ērta, jo ar to palīdzību mēs varam garantēt, ka mūsu mainīgais ir noteikti lielāks jeb noteikti mazāks par pārējiem skaitļiem, kas ir datu masīvā. Izskatīsim to ar piemēru: . */

class ArrayMax {
	static findMaxUnderBoundary(inputArray, topBoundary) {
		let currentMax = Number.MIN_VALUE;

		for (let i = 0; i < inputArray.length; i++) {
			if (inputArray[i] < topBoundary) {
				currentMax = Math.max(currentMax, inputArray[i]);
			}
		}

		return currentMax;
	}
	static findTopElement(inputArray, numberOfElements) {

		let topElements = new Array(numberOfElements);
		let previousMax = Number.MAX_VALUE;

		for (let i = 0; i < numberOfElements; i++) {
			let currentMax = ArrayMax.findMaxUnderBoundary(inputArray, previousMax);
			previousMax = currentMax;
			topElements[i] = currentMax;
		}

		return topElements;
	}

	static main() {

		let ages = [34, 94, 33, 102, 45, 10, 14];
		let top3ages = ArrayMax.findTopElement(ages, 7);

		console.log(top3ages);
	}
}

ArrayMax.main();

/* Šis piemērs ir konvertēts no oriģināla piemēra pieraksta Java programmēšanas valodā uz pierakstu JavaScript programmēšanas valodā, lai iegūtu vēlamo rezultātu. Tas ir darīts tikai tādēļ, lai mēs labāk saprastu konkrētā algoritma darbību, un lai mēs redzētu rezultātu. Šinī piemērā tiek izmantots klašu pieraksts, iekš kura tiek izmantotas statistiskas metodes. Par static izmantošanu iekš klasēm mēs vēl mācīsimies javaScript Developer kursā. */

/* paskatīsimies detalizēti kā mūsu uzrakstītais kods darbojās. Ja mēs ieliekam breakPoint iekš koda vietas, kur tiek izpildīts cikls: for, iekš rindiņas: previousMax = currentMax;, tad mēs redzam, ka sākotnējā vērtība ir maksimālais iespējamais skaitlis, un datu masīva lielākais skaitlis: 102. Nākošajā cikla iterācijā jua tiek izmantots skaitlis: 102 un 94, bet trešajā cikla iterācija jua tiek izmantoti skaitļi: 94 un 45. Ar šādu darbību mēs varējām atrast trīs lielākos datu masīva elementus. */

/* Atgriezīsimies atkal pie jautājuma: cik ilgā laikā izpildās mūsu kods? Vispirms mums jāizpilda iekšējais cikls tik reizes, cik elementu maksimālās vērtības mums ir vajadzīgas, cik vērtības mums ir jāatrod. Un katru reizi iekš šī cikla mēs izpildām vēl vienu ciklu, tik reizes, cik elementu ir mūsu datu masīvā, mūsu gadījumā tas ir: 7 reizes. Lai atrastu 1 maksimumu iekš 100 elementiem mums ir jāizpilda 100 darbības. Lai atrastu 5 maksimumus iekš 100 elementiem mums ir jāizpilda 500 darbības utt. Mēs redzam, ka šāda algoritma izpildes laiks ir atkarīgs no diviem parametriem. No: masīva lieluma un meklējamo elementu skaita. Tādā gadījumā varam teikt, ka šāda algoritma izpildes laiks ir proporcionāls datu masīva izmēram un meklējamo elementu skaitam. */

/* Loģika mums saka priekšā ka: ja mums iekš 7 elementu datu masīva ir jāatrod 7 lielākie elementi, tad rezultātā mēs saņemam sašķirotu datu masīvu. Izskatīsim to mūsu piemērā, kas ir augstāk: . */

/* Izpildot šādu kodu, kur skaitļa: 3 vietā mēs ieliekam skaitli: 7, mēs konsolē saņemam sašķirotu datu masīvu, no lielākā elementa uz mazāko. Šādi mēs paši nemaz nenojaušot esam uzrakstījuši vienkāršu šķirošanas algoritmu. Šāda šķirošana vēl tiek saukta par: izvēles šķirošanu. Mūsu uzrakstītais algoritms nav pilnībā optimālākais, jo mēs jau negribējām rakstīt šķirošanas algoritmu. Bet jau tagad ir skaidrs, ka mūsu pieeja top elementu atrašanā  iekš datu masīva labi strādā tikai tad, ja meklējamo elementu skaits ir mazāks nekā datu masīva elementu skaits. Jo tuvāks kļūst šis meklējamo elementu skaits datu masīva elementu skaitam, jo mazāka jēga no šīm daudzajām koda rindiņām. Jo, ja meklējamo elementu skaits ir vienāds ar datu masīva elementu skaitu, tad to sašķirot mēs varam uzrakstot trīs koda rindas. */

/* Mums kļūst arvien aktuālāka problēma: pareizākā algoritma izvēle, katram uzdevumam. Piemēram, kad mums ir jāsameklē 700 lielākie elementi iekš 1000 elementu datu masīva, tad nav uzreiz redzams, kura pieeja, kura algoritma izmantošana ir pareizākā. Tādēļ ir svarīgi prast salīdzināt katra algoritma izpildes laiku. Un kā šis laiks mainās atšķirībā no ieejošajiem datiem, atšķirībā no datu lieluma, apjoma. */
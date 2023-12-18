'use strict';


/* Mēs jau tagad protam noteikt algoritmu izpildes ātrumu. Apskatīsim tagad datu struktūru: datu masīvs. Izskatīsim dinamiskus datu masīvus. */

/* Praksē, ikdienā visbiežāk tiek izmantota tāda datu struktūra kā: dinamiskie datu masīvi. */

/* Vēl ir sastopami statistiskie datu masīvi. Vienīgā atšķirība starp dinamisku datu masīvu un statistisku datu masīvu ir: Mums nevajag iepriekš zināt dinamiska datu masīva gala izmēru. Mēs varam sākumā glabāt 5 elementus, pēc tam 10 utt. */

/* Parastā statistiskā datu masīvā mēs nevaram dinamiski palielināt tā izmēru. Ja mēs sākumā noteicām, ka tur būs 10 elementi, tad mainīt mēs to nevaram. Kā arī dzēst elementus, pievienot mēs arī nevarēsim, vienīgais, ko mēs varam darīt ir veidot jaunu mūsu prasībām atbilstošu datu masīvu, un veco dzēst, lai nepatērētu lieki operatīvās sistēmas atmiņu. */

/* Daudzi no mums ir lietojuši iepriekš fiksētus datu masīvus - statistiskus datu masīvus. Paskatīsimies kā datora atmiņā izskatās parasts statistisks datu masīvs. Datu masīvs ir nepārtraukts datu gabals. Tam tiek iedalīti noteikta daudzuma baiti, kurus tas var izmantot. Katram elementam tiek piešķirti 4 kilobaiti atmiņas, katram nākošajam elementam atkal tiek piešķirti 4 kilobaiti atmiņas. Un par cik mums šādi ir iedalīta atmiņa datu masīva izmantošanai, mēs nevaram dinamiski to mainīt. */

/* Bet ko darīt gadījumā, kad mums ir statistisks datu masīvs ar noteiktu lielumu, bet mums rodas nepieciešamība to paplašināt, mainot tā izmēru? Vienīgais ko mēs varam darīt ir: Izveidot jaunu datu masīvu, ar mums vajadzīgo elementu daudzumu, un veco datu masīvu izdzēst, lai atbrīvotu atmiņu ko tas aizņem. */

/* Vienīgais jautājums cik daudz atmiņas mums vajadzēs iedalīt datu masīvam? Ja izmantosim kopēšanas iespēju, un katru reizi palielināsim datu masīva apjomu pa vienu elementu, tad mums katru reizi būs jāizpilda pa vienu operāciju vairāk. Šāda algoritma izpildes laiks ir: O(N^2), O no N kvadrātā. */

/* bet mēs mēģināsim šo uzdevumu atrisināt ātrāk. Mūsu galvenā problēma strādājot ar datu masīvu ir tā, ka katru reizi palielinot to pa 1 elementu mums ir jāiedala tam papildus atmiņa. Mēs varam uzrakstīt algoritmu, kas katru reizi palielinās datu masīvu pa 100 elementiem, lai mums nebūtu 100 x jāatkārto darbības, lai to palielinātu pa 1 elementu, mēs izpildām algoritmu, kas palielina datu masīvu uzreiz pa 100 elementiem. */

/* Bet mums joprojām ir jāveic tāds pats operāciju skaits kā iepriekš un līdz ar to algoritma izpildes laiks nemainās, tas paliek tāds pats: O(N^2). Jo mums veidojot jaunu datu masīvu, katru reizi nākas vecā datu masīva elementus kopēt jaunajā datu masīvā. Plus izpildīt operācijas, kas palielina datu masīva izmēru. */

/* Bet svarīgi ir atzīmēt, ka laiks, kad tiek pievienots viens elements datu masīvam mainās. Bet kā mēs varam aprēķināt algoritma asimptomātisko izpildes laiku? Un šeit mēs iepazīstamies ar: Amortizēto sarežģītību. Pamata ideja ir tā: mums ir kāda datu struktūra, mēs izpildām ar to noteiktu operāciju skaitu: N operācijas, un, ja tās izpildās dažādos laikos kā piemērā par datu masīva elementu pievienošanu, kur mums jāizpilda vairākas operācijas, tad mēs neskaitam katru operāciju atsevišķi, bet mēs skaitam kopējo vidējo nepieciešamo operāciju skaitu, lai izpildītu konkrēto uzdevumu: pievienot datu masīvam 1 elementu. */

/* bet, ja mēs izpildīsim datu masīva palielināšanu 2x,, tad šāds algoritms izpildīsies ātrāk, jo mēs izpildām citādāku matemātisku operāciju. Mēs no matemātikas zinām, ka ja mēs saskaitām divnieku pakāpes 1, 2, 4, 8, utt, + N/2, kas lasās plus N dalīts uz pusēm, tad to summa būs vienāda ar N - 1. No šī mēs varam secināt, ka elementu kopēšana no vecā datu masīva uz jauno aizņems šādu laiku: O(N), O no N. Un arī jauna elementa pievienošana datu masīvam mums aizņems O(N) laiku. Asimptomātiskais izpildes laiks mums ir: O(N), un mēs varam teikt, ka amortizētais asimptomātiskais algoritma izpildes laiks, lai pievienotu datu masīvam 1 elementu ir O(1), O no 1. Lai pievienotu N elementus, tas ir: O(N), O no N, un maksimālais atmiņas apjoms, ko mēs iedalījām datu masīvam, bet neizmantojam lineāri pieaugs atkarībā no pievienotu elementu skaita datu masīvā. */

/* Pēc šāda darbības principa ir realizēti dinamiskie datu masīvi vairums programmēšanas valodās, arī javaScript. Mēģināsim paši realizēt dinamisko datu masīvu, kas ļaus mums pievienot beigās elementus amortizētā asimptomātiskā laikā: . */

class DynArray {
	constructor() {
		this.data = new Array(1);
		this.length = 0;
	}

	Size() {
		return this.length;
	}

	set(index, value) {
		this.data[index] = value;
	}

	get(index) {
		return this.data[index];
	}

	add(x) {
		if (this.length === this.data.length) {
			const data2 = new Array(this.length * 2);
			for (let i = 0; i < this.length; ++i) {
				data2[i] = this.data[i];
			}
			this.data = data2;
		}
		this.data[this.length] = x;
		this.length += 1;
	}

	remove() {
		this.length -= 1;
		if (this.length * 4 < this.data.length) {
			const data2 = new Array(Math.floor(this.data.length / 2));
			for (let i = 0; i < this.length; ++i) {
				data2[i] = this.data[i];
			}
			this.data = data2;
		}
	}
}

/* Šis piemērs oriģināli ir rakstīts Java programmēšanas valodā, bet mēs izmantojot mākslīgo intelektu to konvertējam uz JavaScript programmēšanas valodu, lai varētu labāk saprast to, kas notiek kodā. */

/* Mēs esam iemācījušies pievienot datu masīvam 1 elementu, nodzēst 1 elementu un visas šīs operācijas tiek izpildītas laikā: O(1), O no 1. Bet ir viena problēma: mēs protam pievienot jen nodzēst elementu datu masīva beigās, bet ko darīt, ja mums ir nepieciešams pievienot, nodzēst elementu datu masīva vidū. Ko tādā gadījumā darīt? Mēģināsim to realizēt izmantojot iepriekšējo piemēru ar dinamisko datu masīvu. */

class DynArray {
	constructor() {
		this.data = new Array(1);
		this.length = 0;
	}

	Size() {
		return this.length;
	}

	set(index, value) {
		this.data[index] = value;
	}

	get(index) {
		return this.data[index];
	}

	add(x) {
		if (this.length === this.data.length) {
			const data2 = new Array(this.length * 2);
			for (let i = 0; i < this.length; ++i) {
				data2[i] = this.data[i];
			}
			this.data = data2;
		}
		this.data[this.length] = x;
		this.length += 1;
	}

	remove() {
		this.length -= 1;
		if (this.length * 4 < this.data.length) {
			const data2 = new Array(Math.floor(this.data.length / 2));
			for (let i = 0; i < this.length; ++i) {
				data2[i] = this.data[i];
			}
			this.data = data2;
		}
	}

	insert(x, index) {
		this.add(0);
		for (let i = this.length - 1; i > index; --i) {
			this.data[i] = this.data[i - 1];
		}
		this.data[index] = x;
	}
}

/* Mēs ņēmām iepriekšējo piemēru un izveidojām tanī funkciju, kas pievieno 1 elementu datu masīvam pa vidu, pārbīdot pārējos elementus pa 1 indeksu pa kreisi. Bet ir problēma: lieta tāda, ka dotais algoritms tagad strādā šādā asimptomātiskā laikā: O(N), O no N. Tas ir tādēļ, ka mums ir jāveic vairāk kā 1 operācija, lai pievienotu jaunu elementu datu masīva vidū, jo mums visi atlikušie elementi ir jāpārvieto. Un tam ir vajadzīgas papildus operācijas. Tādēļ arī mainās algoritma asimptomātiskais izpildes laiks no O(1) uz O(N). */

/* Mēs pie asimptomātiskas noteikšanas vienmēr ņemam vērā sliktāko iespējamo scenāriju, cik operācijas būs nepieciešamas, lai izpildītu kādu algoritmu, sliktākajā gadījumā. */

/* Mēs šinī lekcijā noskaidrojām, ka strādājot ar dinamisku datu masīvu, lai pievienotu 1 jaunu elementu mums ir vajadzīgs šāds algoritma asimptomātiskais izpildes laiks: O(1), bet lai pie nosacījuma, ka elements tiks pievienots sākumā jeb beigās, bet, ja izpildām elementa pievienošanu vidū, tad algoritma izpildes laiks ir: O(N), bet, ja gribam vērsties pie elementa, to mainīt, jeb uzzināt tā vērtību, tad tas izpildās šādā asimptomātiskā laikā: O(1). */

/* Jauni termini:. */

/* Amortizācijas analīze ir metode, lai aprēķinātu laiku, kas nepieciešams, lai veiktu darbību secību datu struktūrā. Šajā gadījumā tiek aprēķināts vidējais laiks visām veiktajām operācijām un tiek analizēta operāciju vidējā veiktspēja sliktākajā gadījumā. */

/* Pats svarīgākais: . */

/* Amortizācijas asimptotika, palielinot masīva lielumu par vienu elementu, ir O(1). N elementu pievienošanas asimptotiskā uzvedība ir O(N). Maksimālais pašlaik neizmantotās atmiņas apjoms ir O(N). Elementa ievietošana patvaļīgā vietā masīvā ir O(N). Piekļuve elementiem, vērtības maiņa vai iegūšana ir O(1). */
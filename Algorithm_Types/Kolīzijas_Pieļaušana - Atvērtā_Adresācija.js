'use strict';

/* Iepriekšējā lekcijā mēs jau izskatījām, ka hash funkcijās - jaucēja funkcijās ir iespējama kolīzija, sadursme, kad mums tiek atgriezti vienādi datu masīva indeksi, to atkārtošanās iespējamība. */

/* Kolīzijas - has map funkcijas sadursmes iespējamība mums būs vienmēr, lai cik labu kodu mēs neuzrakstītu. Tātad mums ir jāiemācās ar to sadzīvot. Vai mēs varam uzzināt, ka ir notikusi kolīzija - sadursme? Kad hash map funkcija mums atgriež kādu datu masīva indeksu mēs varam pārbaudīt kāda atslēga atbilst šim indeksam. Ja atslēga atšķiras no tās atslēgas, kuras indeksu mēs meklējam, tad mēs zinām ka - ir notikusi kolīzija - sadursme, jo tekošais indekss jau ir aizņemts. Hash funkcija dažādām atslēgām atgriezusi vienu un to pašu indeksu. */

/* Kāds var būt pats vienkāršākais šīs problēmas risinājums? Ja tekošais indekss ir aizņemts, tad ieliksim atslēgu nākošajā indeksā. Izklausās bezatbildīgi, bet patiesībā šis ir pats populārākais problēmas atrisinājuma veids. Un tas ir ļoti vienkāršs kolīzijas - sadursmes risinājums. */

/* Tomēr pastāv daudz uzticamāki, bet daudz sarežģītāki risinājumi. Bet mēs pagaidām apstāsimies pie paša vienkāršākā un populārākā risinājuma. Šī metode vēl tiek saukta pr: Atvērto adresāciju. Atvērtā adresācija ir: Kolīzijas rašanās gadījumā tā atslēgas nosaukumu un vērtību, īsāk sakot - datus ieliek citā indeksā. Piemēram, nākošajā atrastajā indeksā. ja tas ir aizņemts, tad ieliek datus vēl nākošajā indeksā. Un tā turpinās, kamēr netiek atrasts pirmais tukšais indekss.  */

/* Mēģinājumus, kad tiek meklēta tuvējā brīvā vieta vēl sauc par: provēšanu. Mēs itkā ņemam proves no kaimiņa - blakus elementa un provējam tur atrast vietu. Ir vēl citas provēšanas metodes. Bet mūsu provēšanas metode saucās lineārā provēšana, jo mēs ejam lineāri pa datu masīvu un provējam kaut kur ielikt mūsu datus - mūsu elementu. */

/* Kolīzijas pieļaušanas varianti ir vairāki. Mēs tagad izskatām Atvērto adresāciju. Citās kolīzijas atļaušanas metodes elementi netiek ievietoti blakus esošajā brīvajā vietā, bet par to mēs runāsim nākošajās lekcijās. */

/* Mūsu gadījumā, mēs pie kolīzijas ļaujam datus ievietot blakus esošajā datu masīva brīvajā vietā, izmantojot lineāro provēšanas metodi. Mēs izmantojam atvērto adresāciju. Mēs meklēsim brīvo vietu izmantojot lineāro provēšanu, kamēr neatradīsim brīvu vietu, kur ievietot datus. */

/* izskatīsim šo ar reālu koda piemēru. Kā šāds risinājums izskatās koda piemērā: Turpinām papildināt jau esošo piemēru: . */

class HashMap {
	constructor() {
		this.entries = new Array(8);
		this.size = 0;
		this.numberOfElements = 0;
	}

	hashFunction(key) {
		return 0;
	}

	add(key, value) {
		const hash = this.hashFunction(key);
		const index = hash % this.size;
		this.entries[index] = new KeyValuePair(key, value);
		this.numberOfElements++;

		if (this.numberOfElements === this.size) {
			this.resize(this.size * 2);
		}
	}

	resize(newSize) {
		const newEntries = new Array(newSize);

		for (let i = 0; i < this.size; i++) {
			const entry = this.entries[i];
			if (entry) {
				const hash = this.hashFunction(entry.key);
				const index = hash % newSize;
				newEntries[index] = entry;
			}
		}

		this.entries = newEntries;
		this.size = newSize;
	}

	get(key) {
		const hash = this.hashFunction(key);
		const index = hash % this.size;
		const entry = this.entries[index];

		if (!entry) {
			return null;
		}

		return entry.value;
	}

	findGoodIndex(key) {
		const hash = this.hashFunction(key);
		let index = hash % this.size;

		for (let i = 0; i < this.size; i++) {
			let probingIndex = (index + 1) % this.size;
			const entry = this.entries[probingIndex];

			if (!entry || entry.key === key) {
				return probingIndex;
			}

			index = probingIndex;
		}

		return -1;
	}
}

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

/* Mēs uzrakstījām piemēru oriģinālajā Java programmēšanas valodā, pēc tam to konvertējām uz JavaScript programmēšanas valodu izmantojot ChatGPT mākslīgo intelektu, lai tas mums būtu saprotams, lai vieglāk izprastu to, kas notiek kodā. */

/* Mēs redzam, ka esam uzrakstījuši hash map funkciju - jaucēja funkciju, un esam uzrakstījuši kolīzijas vienkāršāko risinājuma variantu ar nelielu koda gabalu. Ir daudz labāki un sarežģītāki risinājumi, bet mēs kamēr mācamies izmantojam vienkāršāko un populārāko hash funkcijas kolīzijas risinājumu. */

/* Bet mums, lai šis kods darbotos pilnvērtīgi, tas ir nedaudz jāizmaina, rakstām oriģinālajā Java programmēšanas valodā, pēc tam izmantojam ChatGPT, lai konvertētu kodu uz JvaScript programmēšanas valodu. Pilnvērtīgs piemēra pieraksts ir šāds: . */

class HashMap {
	constructor() {
		this.entries = new Array(8);
		this.size = 0;
		this.numberOfElements = 0;
	}

	hashFunction(key) {
		return 0;
	}

	add(key, value) {
		const index = this.findGoodIndex(key);
		this.entries[index] = new KeyValuePair(key, value);
		this.numberOfElements++;

		if (this.numberOfElements === this.size) {
			this.resize(this.size * 2);
		}
	}

	resize(newSize) {
		const newEntries = new Array(newSize);

		for (let i = 0; i < this.size; i++) {
			const entry = this.entries[i];
			if (entry) {
				const index = this.findGoodIndex(entry.key);
				newEntries[index] = entry;
			}
		}

		this.entries = newEntries;
		this.size = newSize;
	}

	get(key) {
		const index = this.findGoodIndex(key);

		if (index === -1) {
			return null;
		}

		const entry = this.entries[index];

		if (!entry) {
			return null;
		}

		return entry.value;
	}

	findGoodIndex(key) {
		const hash = this.hashFunction(key);
		let index = hash % this.size;

		for (let i = 0; i < this.size; i++) {
			const probingIndex = (index + 1) % this.size;
			const entry = this.entries[probingIndex];

			if (!entry || entry.key === key) {
				return probingIndex;
			}

			index = probingIndex;
		}

		return -1;
	}
}

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

/* Pareizs, pilnīgāks uzdevuma risinājums ar hash funkcijas izmantošanu, ar pieļaujamās kolīzijas - sadursmes izmantošanu, kad mēs nosakām, ka ja datu masīva indeksā jau ir kādi dati, tad mēs izmantojam atvērto adresāciju jeb izmantojam lineāro zondēšanu, jeb vēl tā saukto provēšanu ievietojam datus tuvākajā brīvajā datu masīva indeksā. */

/* Mēs esam izskatījuši kā var atrisināt kolīzijas iespējamību hash map funkcijās izmantojot pašu vienkāršāko risinājuma variantu: ja datu masīva indekss ir aizņemts, tad izmantojot provēšanu meklējam tuvāko brīvu vietu. */

/* Zināšanas par hash map iekšieni, kā tā ir uzbūvēta no iekšienes, mums palīdzēs mums kā izstrādātājam labāk izmantot šo datu struktūru. Atceramies, ka hash map mūsu JavaScript programmēšanas valodā ir: Object jeb Map(). Kā arī izmantot dažādas realizācijas iespējas, kas ir šai datu struktūrai, pielietojot tās izstrādājot programmas. */

/* Nākošajās lekcijās mēs tiksim skaidrībā ar: Kur un kā mēs varam izmantot hash map - jaucēja funkcijas un kā tās var uzlabot mūsu rakstīto kodu, un padarīt to vienkāršāku. . */

/* Jauni termini: . */

/* Atvērtā adresēšana ir jaucēja funkcijas sadursmes izšķiršanas metode, kuras būtība ir vienkārši “mēģināt” ievietot vērtību kādā citā vērtību masīva indeksā, kad notiek sadursme. Secību, kurā tiek meklētas jaucēj tabulas šūnas, lai atrastu ievietošanas vietu, sauc par zondēšanas secību. */

/* Lineārā zondēšana ir zondēšana, kurā vērtību masīva elementi tiek secīgi meklēti pēc ievietošanas vietas. */
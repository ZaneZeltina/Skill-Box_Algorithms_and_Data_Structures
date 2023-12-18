'use strict';

/* Tā kā mēs izmantosim hash funkciju katru reizi, kad vērtīsimies pie hash map, pie objekta, mums ir jāpiedomā pie šīs funkcijas lietojamības. Jo mums ir svarīgi, lai tās izpildes laiks nebūtu atkarīgs no datu masīva lieluma. Atceramies, ka hash tabulas dati pēc būtības arī ir datu masīvi. Bet tikai ne JavaScript programmēšanas valodā, jo JavaScript programmēšanas valodā visi datu masīvi pēc to būtības ir objekti. javaScript programmēšanas valoda ir uz objektiem bāzēta programmēšanas valoda. */

/* No galvas izdomāt šādu funkciju ir ļoti grūti un tas pat var šķist neiespējami, bet programmēšana nav nekā neiespējama. paskatīsimies kā mēs varam uztaisīt, pagaidām nepilnīgu un nekvalitatīvu hash funkciju. Izskatīsim to ar piemēru: . */

class HashFunction {
	constructor() {
		this.values = new Array(8);
	}

	main() {
		this.values[2] = 14;
		this.values[3] = 99;
		this.values[4] = 30;
		this.values[5] = 42;
		this.values[6] = 87;
		this.values[7] = 71;
		console.log('Values initialized:', this.values);
	}

	getIndexByKey(key) {
		return key.length;
	}

	getValueByKey(key) {
		const index = this.getIndexByKey(key);
		const value = this.values[index];
		console.log(`Value for key "${key}": ${value}`);
		return value;
	}
}

const hashFunction = new HashFunction();
hashFunction.main();

const key = 'exampleKey';
const value = hashFunction.getValueByKey(key);
console.log(`Value for key ${key}: ${value}`);

/* Uzdevuma piemērs ir šāds: Mums ir studentu saraksts ar viņu atzīmēm. Studentu vārdi ir String - rindas tipa dati, kas ir arī datu masīva indeksi, ja atceramies pamatlietu, ka hash tabulas ir tie paši datu masīvi, bet JavaScript valodā tie ir objekti. */

/* Mēs ar doto risinājuma piemēru izpildījām divas ļoti būtiskas hash funkcijas prasības: Pēc studenta vārda var iegūt viņa atzīmi, vienkārši paņemot atslēgas garumu un paskatoties atbilstošo datu masīva - objekta vērtību un: Šo pašu atzīmi mēs varam iegūt neapejot visu hash map. */

/* Tālāk mēs mūsu piemērā veidojam funkciju, kas saņems atbilstošo atslēgas vērtību, atbilstoši atslēgas nosaukumam - indeksam. */

/* Pagaidām mēs esam uzrakstījuši hash funkciju, kas pilda divus svarīgākos nosacījumus. Mēs vēl neesam noteikuši datus, bet tā jau darbojās. Tā nav ideāla, bet mēs kaut kā esam izpildījuši uzdevumu. Atceramies, ka oriģinālais kods tiek rakstīts Java programmēšanas valodā, bet mēs izmantojot konvertētāju to konvertējam uz JavaScript valodu, lai mēs labāk saprastu kā konkrētā datu struktūra strādā, un kā izskatās hash funkcija. */

/* Bet pagaidām mūsu piemēram ir dažas nepilnības. Šī funkcija darbojās tikai tad, ja mūsu atslēgu nosaukumi katrs ir dažāda garuma, bet ko darīt, ja mums būs vienāda garuma dati? Šādā gadījumā neizpildās nosacījums, ka dažādām atslēgām ir dažādas vērtības, tām jāatgriež dažādi masīva indeksi. */

/* Mums šī problēma kaut kā ir jāatrisina. Domāsim kā to atrisināt. Atcerēsimies piemēru par datu masīvu, kur atslēgas mums bija telefonu numuri, bet atslēgu vērtības: konta bilance. Paskatīsimies ko mēs varam izmantot. Mēs nevaram izmantot, to, ka visas atslēgas ir vienādas, jo mums vajag katru reizi izvadīt dažādas vērtības. Bet mēs varam izdomāt kādu matemātisku darbību, atņemot jeb pieliekot kādu vērtību. Mēs izmantojot numurus, varam izveidot datu masīva atslēgas indeksu. Šādu operāciju sauc par: dalījuma  atlikuma vērtības nodalīšanu. Programmēšanas valodās tiek izmantota procentu zīme: %, arī javaScript programmēšanas valodā. Šo zīmi sauc vēl arī par: Module operator - Moduļa operators. Atceramies, ka šī zīme mums atgriež dalījuma atlikumu, skaitli aiz komata. Nejaukt ar parasto dalīšanas zīmi: /. */

/* Svarīga īpatnība, kad mēs izmantojam procenta operatoru - moduļa operatoru, kas atgriež mums dalījuma atlikumu ir tas, ka atlikums nekad nav lielāks par skaitli ar ko tiek dalīts. Ja mēs dalām skaitli 46 % 10 = 9, tas pats attiecas arī uz to ja dalīsim kādu lielu skaitli ar: 123, atlikums nebūs nekad lielāks kā 122; Atlikuma skaitlis maksimums būs par vienu skaitli mazāks nekā tas skaitlis ar kuru mēs dalām.  */

/* Atcerēsimies uzdevumu ar datu masīvu, kam atslēgas nosaukums ir telefona numurs, un atslēgas vērtība ir kontā esošā vērtība. Izskatīsim kā šo uzdevumu mēs varam atrisināt izmantojot hash funkciju. Izskatīsim to ar koda piemēru: . */

class HashFunction {
	static values = new Array(40);

	static main(args) {
		HashFunction.values[30] = 900;
		HashFunction.values[7] = 100;
		HashFunction.values[39] = 999;
		HashFunction.values[24] = 1;
	}

	getIndexByKey(key) {
		return key % 40;
	}

	getValueByKey(key) {
		let index = this.getIndexByKey(key);
		return HashFunction.values[index];
	}
}

HashFunction.main();

/* Šis piemērs oriģināli ir pierakstīts Java valodā, bet mēs izmantojot konvertēšanu to konvertējam uz JavaScript programmēšanas valodu, lai labāk saprastu to, kas notiek kodā, un lai labāk saprastu kā strādā hash funkcija. */

/* Mums atkal izdevās izveidot hash map funkciju, kas pilda divus ļoti svarīgus nosacījumus: Pirmais: Mēs ļoti viegli varam atrast konta bilanci zinot telefona numuru. Otrais: Elementa indeksa izskaitļošana datu masīvā mums neaizņem daudz laika, neatkarīgi no tā vai datu masīvs sastāv no 40 elementiem vai no 4 miljoniem elementu. Secinām, ka mūsu hash funkcija strādā pietiekoši ātri. */

/* Bet arī šis risinājuma piemērs ir ar savām nepilnībām: piemēram: ja mums būs divi skaitļi, kuru dalījuma atlikums ir vienāds,  kas nozīmē, ka tie būs vienādi pēc to indeksa un mums neizpildīsies hash funkcijas prasības. */

/* Mēs redzam, ka ļoti grūti ir panākt to, ka katrai atslēgai ir unikāls indekss. Mums kļūst skaidrs, ka mums ir jāuzraksta tāda funkcija, kas no jebkādas atslēgas datu tipa spēj noteikt datu masīva indeksu, un lai situācijas, kad indekss atkārtojas būtu pēc iespējas mazāk. */

/* Šis ir svarīgs solis, lai atrisinātu algoritmiskus uzdevumus, nepadoties pie pirmajām grūtībām. Bet censties uzdevumu izpildīt, iespējams slikti, bet tomēr izpildīt. */

/* Jauni termini: . */

/* Hash ir jaucēja funkcijas vērtība, kas ir unikāli atkarīga no ievades datiem.. */

/* Jaucēja funkcijas sadursme - kolīzija ir situācija, kad jaucēja funkcija atgriež vienu un to pašu vērtību dažādām atslēgām.. */

/* Svarīgākais, kas ir jāatceras: . */

/* Ir svarīgi, lai jaucēja funkcijas izpildes laiks nebūtu atkarīgs no vērtību masīva lieluma. */

/* Situācijās, kad ievades dati ir lielāki par pašu jaucēja kodu (piemēram, ja nepieciešams iegūt nelielu skaitli no garas virknes), nav iespējams izveidot jaucēja funkciju, kas nekad neizraisīs sadursmes. */

/* Hash - no angļu valodas: Maisījumus, jaucējs. Hash funkcijas tiek sauktas par jaucēja funkcijām. */

/* Galvenais jaucēja funkcijas uzdevums ir sajaukt, izveidot hash ieejošajiem datiem. Tos samaisīt tā, lai pie izejas saņemtu hash - jucekli. Vērtību, kas ir atkarīga no ieejošajiem datiem. Šo iegūto, sajaukto vērtību mēs varēsim izmantot kā datu masīva indeksu. */

/* Bet ir arī tādi gadījumi, kad hash - jaucēja funkcija mums atgriež dažādiem datiem vienādu indeksu. Šādu rezultātu sauc par hash - jaucēja funkcijas kolīziju - sadursmi. */

/* Kad mums ir situācija, kad ieejošie dati ir lielāki par pašu hash - jaucēju, kad no ļoti garas rindas mums vajag iegūt nelielu skaitli, tad ir neiespējami izveidot jaucēja funkciju, kur nekad nenotiktu kolīzija - sadursme. Ts ir vienkārši neiespējami no fizikas un matemātikas viedokļa. */

/* Lai kā arī nebūtu, izpildīt mūsu prasību, kad no dažādām atslēgām tiek atgriezti dažādi indeksi, ne vienmēr tas ir iespējams. */

/* Atslēgas nosaukums parasti aizņem vairāk vietas atmiņā nekā masīva indekss. */

/* Lai pilnvērtīgi strādātu ar hash maps- jaucēja funkcijām mums ir jāiemācās sadzīvot ar hash funkcijas kolīziju - sadursmi. Pie pareizas hash - jaucēja funkcijas pieejas mēs varēsim panākt to, ka kolīzijas - sadursmes mums netraucēs. */

/* Nākošajās lekcijās mēs iemācīsimies risināt hash maps - jaucēja funkcijas kolīzijas problēmas. Izskatīsim dažas populāras hash - jaucēja funkcijas.  */
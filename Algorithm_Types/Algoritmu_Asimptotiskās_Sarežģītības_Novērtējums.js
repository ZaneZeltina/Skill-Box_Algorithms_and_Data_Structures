'use strict';

/* Saistītie saraksti. */

/* Algoritmu asimptotiskās sarežģītības novērtējums. */

/* Mēs turpinām mācīties par algoritmiem un datu struktūrām. Šodien mēs izskatīsim tādas datu struktūras kā: dinamiskais datu masīvs, saraksti, stack. Kā arī izskatīsim pēc kā tike aprēķināts algoritm izpildes laiks. */

/* Kad mēs rakstām kodu, mums ir jādomā ne tikai par to, lai kods labi strādātu, bet arī par to, lai mūsu rakstītais kods strādātu ātri. Piemēram: atverot pārlūku mēs negribam gaidīt minūti kamēr tas atvērs kādu lapu. Tādēļ ir jāiemācās jua savlaicīgi novērtēt cik ilgā laikā kurš algoritms izpildīsies un jāizvēlas piemērotākais, kas ne tikai ir piemērots, lai atrisinātu konkrēto uzdevumu, bet kas konkrēto uzdevumu izpilda visātrāk. */

/* Katra uzdevuma atrisināšanai ir pieļaujamais izpildes laiks, piemēram, lai atrastu visā internetā, kurās lapās ir kaķi, 1 sekunde ir pieļaujams laiks, kad tiek atrastas visas lapas, kurās ir kaķīši, bet cits piemērs: kad mums jāsaskaita divi skaitļi, tad viena sekunde nav pieļaujams izpildes laiks. Mums ir jāuzraksta tāds algoritms, kas šo darbību veic daudz ātrāk - milisekundēs. */

/* Šie bija daži piemēri no dzīves kā mēs varam novērtēt vai algoritms strādā ātri vai lēni. Lai šo tēmu saprastu labāk uzrakstīsim kādu vienkāršu algoritmu ar koda piemēru: Uzrakstīsim funkciju, kas kā ieejas datus pieņem kādu skaitli, bet kā izvades datus, izvada visus skaitļus no 1 līdz 1 miljardam, kas dalās ar doto skaitli. Izskatīsim kā šādu funkciju, algoritmu mēs varam realizēt kodā: . */

class Skillbox {
	static f(x) {
		let count = 0;
		for (let i = 1; i < 1000000000; ++i) {
			if (i % x === 0) {
				count += 1;
			}
		}
		return count;
	}
}

/* Mēs ar vienkārša algoritma pierakstu, izmantojot klases esam uzrakstījuši vienkāršu kodu, vienkāršu darbību ar dažām koda rindām. Atceramies, ka oriģināli šis kods ir rakstīts Java programmēšanas valodā, bet mēs izmantojot mākslīgo intelektu to konvertējam uz JavaScript programmēšanas valodu, lai mums būtu labāk saprotams, kas notiek kodā, un kas mums tiek atgriezts kā rezultāts. */

/* Neatkarīgi no tās vērtības, kuru mēs piešķirsim konkrētajai funkcijai, algoritma izpildes laiks nemainīsies. Jo algoritms strādā konstantu - noteiktu laiku, un tas jebkurā gadījumā izpildīs 1 miljardu operāciju. Šādos gadījumos tiek teikts, ka algoritma izpildes laiks ir konstants. */

/* bet kā ar algoritmiem, kas nestrādā konstantā laikā. Tādi algoritmi ir. Izskatīsim to ar piemēru: Mēs gribam atrast visus pāra skaitļus kādā datu masīvā. Izskatīsim to ar koda pierakstu: . */

class CountNumbers {
	static f(a) {
		let count = 0;
		for (let i = 0; i < a.length; ++i) {
			if (a[i] % 2 === 0) {
				count += 1;
			}
		}
		return count;
	}
}

/* Šis piemērs ir oriģināli uzrakstīts Java programmēšanas valodā, bet mēs ar mākslīgā intelekta palīdzību to pārtulkojam javaScript programmēšanas valodā, lai labāk saprastu koda darbību, lai labāk saprastu ko tas mums atgriež. */

/* izmantojot vienkāršu algoritmu, izmantojot klases mēs esam pierakstījuši funkciju, kas no datu masīva atgriež visus skaitļus, kas dalās ar 2. Bet šī algoritma izpildes laiks ir atkarīgs no ieejošajiem datiem. Šinī piemērā mēs neiedevām datus, bet, jo lielāki dati, jo ilgāk izpildās šis algoritms, jo mazāki, jo ātrāk tiek izpildīts šis algoritms. */

/* Cik ilgā laikā nostrādās šis algoritms? Izpildot šādu algoritmu, kura izpildes laiks ir atkarīgs no ieejošajiem datiem, piemēram, ja mums ir 10 reizes lielāks datu masīvs, tad attiecīgi algoritms strādās 10 reizes ilgāk. */

/* Šādos gadījumos saka, ka algoritms nostrādā lineārā laikā. Laiks mainās lineāri ieejošajiem datiem. */

/* Lai šos izpildes laikus varētu kaut kā formulēt tika izdomāts: Algoritma asimptotiskā sarežģītība, kas saīsinājuma tiek pierakstīts un teikts kā: O, lasīts kā: O Lielais. Angliski šis tiek teikts Big O. */

/* Izskatīsim ar piemēriem kā praktiski darbojās šis formulējums: Algoritma asimptotiskā sarežģītība, jeb O lielais. */

/* Ar lielā O noteikšanu mēs izskatām cik ilgā laikā pieaug algoritma izpildes laiks atkarībā no ieejošajiem datiem. Algoritma darbības laiks ir atkarīgs no izpildāmo operāciju skaita, ko izpildīs mūsu programma, lai iegūtu rezultātu. */

/* Mēs jau runājām, ka ir tādi algoritmi, kas izpildās konstantā laikā. Kā piemērā, kur vienmēr tiek veiktas 1 miljards operācijas. Šādos gadījumos tike teikts, ka algoritma izpildes laiks nav atkarīgs no ieejošajiem datiem. */

/* O lielā notācijā šāda algoritma izpildes laiks, kas izpildās konstantā laikā un nav atkarīgs no ieejošo datu lieluma, tiek pierakstīts kā: O(1). Tas tike lasīts kā: O no viens. */

/* Kāa rī mēs izskatījām algoritmu, kas izpildās lineārā laikā, atkarībā no ieejošo datu lieluma. O lielā notācijā šāda algoritma izpildes laiks ir: O(N). Tas tike lasīts kā O no N. */

/* Ir piemēri, kad algoritmi strādā vēl lēnāk, piemēram kas izpildās kvadrāta laikā. Ko tas nozīmē, tas nozīmē, ka, ja mums ir 10 reizes lielāks datu masīvs, tad algoritms izpildās 100 reizes ilgāk. Desmit kvadrātā ir simts. Šādā gadījumā tiek teikts ka: algoritma izpildes laiks ir: O(N^2), kas tiek lasīts kā O no N kvadrātā. */

/* Jāatzīmē, ka tad, kad mēs nosakām algoritma asimptomātisko izpildes laiku mēs atmetam visus konstantos izpildes laikus. Tas nozīmē, ka ja mums ir operāciju skaits kas izpildās kā 3(N), kur N ir datu masīva izmērs tad tādā gadījumā mēs uzskatām ka tā asimptomātiskā sarežģītība joprojām ir O(N), O no N. */

/* Tā apt arī jāizskata gadījumi, kad mūsu izpildāmo operāciju skaits sastāv no kādas sarežģītas daļas, piemēram kvadrāti plus 212(N) jeb kaut kas tamlīdzīgs, tad mēs algoritma asimptomātisko izpildes laiku vērtējam pēc tā, kas veido lielāku laiku, kas nes klāt papildus laiku. Dotajā gadījumā: N2: N kvadrātā pieaug daudz ātrāk nekā 212N, tāpēc, ka N ir kvadrātā. Šādā gadījumā algoritma asimptomātiskais izpildes laiks tiks aprēķināts pēc formulas: O(N2), kas lasās kā O no N kvadrātā. */

/* Izskatīsim ar koda piemēriem, pēc kuriem mēs varam noteikt algoritma sarežģītību: . */

function f(a) {
	return a.length * 7 + 12;
}

/* Šāda algoritma sarežģītība ir O(1), kas lasās: O no viens. Dotās funkcijas algoritma izpildes laiks nav atkarīgs no ieejošajiem datiem. */

function f(a) {
	let sum = 0;
	for (let i = 0; i < a.length; ++i) {
		sum += a[i];
	}
	return sum;
}

/* Šāda algoritma sarežģītība ir O(N), kas lasās: O no N. Algoritma izpildes laiks ir lineārs ievades datiem. Šī algoritma izpildes laiks ir atkarīgs no ieejošajiem datiem. */

/* Apzīmējums N ir datu masīva lielums, datu lielums, arī citu datu tipa lielums. */

function f(a) {
	let sum = 0;
	for (let i = 0; i < a.length; ++i) {
		for (let j = 0; j < a.length; ++j) {
			sum += a[i] * a[j];
		}
	}
	return sum;
}

/* Šāda algoritma sarežģītība ir: O(N^2), kas lasās kā: O no N kvadrātā. Algoritma izpildes laiks tike reizināts ar N^2. Ja mums ir divreiz lielāks datu masīvs, tad algoritm izpildes laiks būs 4 reizes garāks. par cik reizēm palielinās datu lielums, no tām tiek aprēķināts kvadrāts. Tik ilgā laikā izpildīsies dotais algoritms. Ja dati palielinās 10 reizes, tad algoritma izpildes laiks palielinās 100 reizes. */

function f(a) {
	let sum = 0;
	for (let i = 0; i < a.length; ++i) {
		for (let j = 0; j < i; ++j) {
			sum += a[i] * a[j];
		}
	}
	return sum;
}

/* Šis piemērs ir līdzīgs iepriekšējam piemēram. Šis algoritms arī tiks izpildīts šādā laikā: O(N^2), las lasās kā: O no N kvadrātā. S"'i piemēra atšķirība no iepriekšējā piemēra ir tā, ka šeit mainījās iekšējais cikls, kurš sākās nevis no nulles, bet ni i iepriekšējā indeksa. */

function f(a) {
	let sum = 0;
	for (let i = 0; i < a.length; ++i) {
		for (let j = 0; j < 100; ++j) {
			sum += a[i] * j;
		}
	}
	return sum;
}

/* Šī algoritma sarežģītība ir: O(N), kas lasās kā: O no N. Šeit mēs redzam, ka mums iekšējā ciklā ir konstants darbību skaits. Bet mēs zinām, ka aprēķinot algoritma izpildes laikus, mēs visus konstanto darbību skaitus atmetam. Līdz ar ko mums paliek O(N). */

function f(x) {
	let sum = 0;
	while (x > 0) {
		sum += x % 2;
		x = Math.floor(x / 2);
	}
	return sum;
}

/* Šī algoritma sarežģītība ir: O(log N), kas lasās kā O, no logaritms N. */

function f(x) {
	let sum = 0;
	for (let i = 0; i < x; ++i) {
		let t = x;
		while (t > 0) {
			sum += t % 2;
			t = Math.floor(t / 2);
		}
	}
	for (let i = 0; i < x; ++i) {
		sum += i;
	}
	return sum;
}

/* Šī algoritma piemērs jau ir sarežģītāks. Šāds algoritms izpildās šādā laikā: O(N log N), kas lasās šādi: O no N logaritms N. */

function f(x) {
	let sum = 0;
	for (let i = 0; i < x; ++i) {
		let t = x;
		while (t > 0) {
			sum += t % 2;
			t = Math.floor(t / 2);
		}
		for (let j = 0; j < x; ++j) {
			for (let k = 0; k < 10; ++k) {
				sum += i;
			}
		}
	}
	return sum;
}

/* Šis piemērs ir vēl sarežģītāks par visiem iepriekšējiem piemēriem. Šī piemēra algoritms tiek izpildīts šādā laikā: O(N^2), kas lasās kā O no N kvadrātā. */

/* Dotie piemēri mums varētu šķist izdomāti, ne pārāk piemēroti, bet tie ir izstrādāti tikai lai parādītu mums cik dažādi var būt algoritma izpildes laiki. Šie piemēri mums var šķist nevajadzīgi un muļķīgi, bet tie domāti, lai mēs pamatu pamatos saprastu kā tiek noteikti algoritma izpildes laiki. */

/* bet vai eksistē reāli algoritmu piemēri, kuru izpildes laiks ir netipisks. Jā, tādi piemēri ir. Izskatīsim dažus no tiem: tas varētu būt algoritms, kas sadala kādu skaitli pa atsevišķiem skaitļiem. Mēģināsim šo piemēru uzrakstīt ar kodu: . */

function f(x) {
	let count = 0;
	for (let i = 2; i <= x; ++i) {
		while (x % i === 0) {
			x /= i;
			count += 1;
		}
	}
	return count;
}

/* Šinī piemērā mēs izpildām uzdevumu, kas nosaka kāda skaitļa parastos reizinātājus, bet citus mēs nenosakām. Kādēļ tā? Tādēļ, ka mēs nosakām tikai mazos reizinātājus, ja mums ir skaitlis seši mēs to sadalām kā 3 un 2. Savukārt, kad mums paliek 2 un 3 mēs vairs tālāk neturpinām reizinātāju noteikšanu. Mūsu algoritms sadala veselo skaitli X veselos reizinātājos, un izskaita to skaitu, cik daudz ir šādu reizinātāju. */

/* Tagad padomāsim vai mēs kaut kādā veidā vram šo algoritmu paātrināt, uzlabojot mūsu kodu? Jā, ir viens veids kā mēs varam paātrināt šo algoritmu. Patreiz šī algoritma izpildes ātrums ir lineārs, tas pieaug, ja pieaug ieejošie dati. Konkrētā algoritma izpildes laiks ir: O(N), O no N. Bet mēs varam vēl paātrināt šī algoritma darbību, un tas ir: Mēs izmantojam konkrētu formulu vesela skaitļa sadalīšanai reizinātājos. */

/* Kāda izskatās formula pēc kuras kāds skaitlis tiek sadalīts reizinātājos? Tā izskatās šādi:

C = A * B;
Kvadrātsakne no N = X, X * X = N;
C = A * B => (A >= Kvadrātsakne no C) jeb (B <= Kvadrātsakne no C); */

/* Izmantojot šīs formulas zināšanas mēs varam uzrakstīt kodu, kurā notiek vesela skaitļa sadalīšana reizinātājos. Šis koda piemērs izskatās šādi: . */

class Numbers {
	static f(x) {
		let count = 0;
		for (let i = 2; i * i <= x; ++i) {
			while (x % i === 0) {
				x /= i;
				count += 1;
			}
		}
		if (x > 1) {
			x /= x;
			count += 1;
		}
		return count;
	}
}

/* Šis piemērs oriģināli ir pierakstīts Java programmēšanas valodā, bet mēs izmantojot mākslīgo intelekta to konvertējām uz JavaScript programmēšanas valodu, lai labāk saprastu to, kas notiek šinī kodā. Mēs nedaudz pamainot funkcijas darbību esam panākuši to, ka mainās algoritma izpildes laiks. Ja iepriekšējā uzdevuma risinājuma algoritma piemēra izpildes ātrums bija: O(N), O no N, tad šī piemēra algoritms izpildās daudz īsākā laikā: O no N saknes, kas ir 2. Dotajā piemērā mēs skrienam no skaitļa 2 līdz ieejošā skaitļa kvadrātam. Tādēļ arī šāds izpildes ātrums. */

/* Turpināsim izskatīt algoritmus izskatot kāds ir binārā algoritma izpildes laiks un hash tabulu algoritma izpildes laiks. Binārais algoritms izpildās šādā laikā: O(log N), kas lasās šādi: O no logaritma N. Kāpēc tā? Tāpēc, ka mēs katru reizi dalām jeb nu datu masīvu uz pusēm, jeb nu skaitli uz pusēm, izmantojam logaritmu. */

/* Hash tabulas algoritma izpildes laiks ir: O(1), kas lasās šādi: O no 1. Jo mēs izpildām vienkāršu darbību: jeb pievienojam elementu, jeb aizstājam elementu, jeb dzēšam elementu. Tādēļ arī tāds izpildes ātrums. Mēs sasniedzam rezultātu izpildot vienu operāciju. */

/* Logaritms: Tā ir funkcija, kas izskaitļo cik reizes mēs varam kādu skaitli izdalīt ar 2. */

/* Novērtējot algoritma asimptotisko sarežģītību, konstantes netiek ņemtas vērā. Bet mēs vienmēr varam pierādīt, ka spējam noteikt tik lielu konstanti, kas būs lielāka nekā N^2, nekā N kvadrātā. Pateicoties konstantei mēs varam atmest tās daļas, kuru vērtība pieaug lēnāk nekā N^2, nekā N kvadrātā. */

/* Izskatīsim nelielu papildus informāciju. Kāpēc, kad runājam par algoritmu asimptomātisku sarežģītību mēs nepasakam kādu logaritma iedalījumu mēs izmantojam. Logaritmi var b't ļoti dažādi: dubultais, desmitkārtīgais, naturāls logaritms. Kādam var rasties jautājumi kādēļ tā, bet logaritmiem ir brīnišķīga īpašība: Ja mēs gribam paņemt logaritmu no kāda skaitļa, pēc kāda pamatojuma, tad mēs varam paņemt logaritmu no cita skaitļa pēc cita pamatojuma un izdalīt tos vienu ar otru. */

/* kad mēs runājam par algoritma asimptomātisku sarežģītību un izmantojam logaritmus, mēs varam nedomāt par to kāda tipa tas ir, jo to tipi atšķiras tikai pēc algoritma konstantēm, bet algoritma konstantes mēs atmetam, tādēļ arī logaritms ir logaritms. Tādēļ arī mēs sakām: O no logaritma N. */

/* Mēs dotajā kursā izskatīsim tikai tādus algoritmus, kas ir tiešām vajadzīgi un ir bieži pielietojami. Mēs neizskatīsim matricas algoritmus, kas ir domāti lielajiem jaudīgajiem datoriem, jo tie izpilda miljoniem operāciju daudz ātrāk nekā parastie algoritmi, bet mums tas nav vajadzīgs, jo mums nav tādu datoru, un mēs savā ikdienas darbā ar to nesaskarsimies. */

/* Ja algoritma asimptomātiska ir labāka, ja algoritma izpildes laiks ir īsāks, tad algoritms izpildās ātrāk. To var izmantot tad, kad jāizvēlas kādu algoritmu izvēlēties konkrētajam uzdevumam, mērķim. */ 

/* Jauni termini: . */

/* Algoritma nemainīga sarežģītība ir gadījumā, ja algoritma darbības laiks nav atkarīgs no ievades datu lieluma. */

/* Algoritma linearitmētiskā jeb linearizētā sarežģītība ir algoritma darbības laika lineāri logaritmiska atkarība no ievades datu lieluma. */

/* Algoritma asimptotiskā sarežģītība (“O()”, “O-large”, “Big O”) ir O lielais no f(n), ja pieaugot parametram n, kas raksturo ievaddatu apjomu, algoritma darbības laiks nepalielināsies ātrāk (sliktākajā gadījumā) par jebkuru konstantu laiku f(n). */

/* Pats svarīgākais: . */

/* Algoritma darbības laiks ir tieši atkarīgs no tā veikto vienkāršo darbību skaita, tāpēc frāzes “darba laiks” un “operāciju skaits” ir savstarpēji aizvietojamas lietas. */

/* Novērtējot algoritma asimptotisko sarežģītību, konstantes netiek ņemtas vērā. */

/* Galveno aplūkoto algoritmu sarežģītības klašu apzīmējumi O-notācijā:

  Algoritma nemainīgā sarežģītība ir O(1).
  Algoritma logaritmiskā sarežģītība ir O(log N).
  Algoritma lineārā sarežģītība ir O(N).
  Algoritma lineārā aritmētiskā sarežģītība ir O(N log N).
  Algoritma kvadrātiskā sarežģītība ir O(N^2). */

/* . */
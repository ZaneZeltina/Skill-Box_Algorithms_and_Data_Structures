'use strict';

/* Iepriekšējās lekcijās mēs runājām par to, ka lai realizētu hash mums ir vajadzīgas divas lietas: Datu masīvs, kur glabāt datus un: hash funkcija, kas zinot atslēgu atgriezīs mums datu masīva indeksu. */

/* Jauni termini: . */

/* Dinamiskais masīvs ir masīvs, kura lielums programmas izpildes laikā var mainīties. */

/* Pats svarīgākais: . */

/* Lielākā daļa datu struktūru (un jaucēja tabulu) ir balstītas uz regulāriem fiksēta izmēra masīviem, ar tiem var strādāt visās programmēšanas valodās, un visas pārējās struktūras tiek veidotas uz tām. Hash tabulai ir jābūt dinamiskai, kas nozīmē, ka jādomā, kā organizēt darbu ar masīvu.
Parasti tiek izmantota šāda stratēģija:
1) pēc noklusējuma izveidojam nelielu masīvu;
2) kad visas masīva vērtības ir aizpildītas, dubultojiet masīva izmēru;
3) samaziniet masīva izmēru tikai tad, kad tas ir pilns par ceturtdaļu. */

/* Veidojot hash map funkciju mums rodas jautājumi: kā veidojās datu masīvs, vai tajā pietiks vietas, vai vienmēr datu masīvā būs vieta, kur ierakstīt jaunus datus? Vai hash funkcija var atgriezt lielāku datu masīva indeksu nekā tas patiesībā satur. Ar visiem šiem jautājumiem mēs tiksim skaidrībā šinī lekcijā. */

/* lai uzzinātu atbildes uz šiem jautājumiem, atliksim uz kādu laiku malā hash funkcijas. Iztēlosimies, ka mēs jau esam uzrakstījuši pašu labāko hash funkciju visā pasaulē. Tā vietā koncentrēsimies uz datu struktūru iekšieni. Kā tie darbojās hash map iekšienē?. */

/* Mēs zinām, ka mūsu hash map ir jābūt dinamiskam, ar iespēju viegli pievienot jeb dzēst kādus elementus. Mums ir jāpiedomā pie tā kā mēs organizējam darbu ar mūsu datu masīvu. Visu datu struktūru pamatā ir fiksēta izmēra datu masīvi. Jo ar tiem var strādāt visās programmēšanas valodās. */

/* Visas datu struktūras ir veidotas uz datu masīvu pamata. Galvenā datu struktūra ir datu masīvi, pēc tam nāk hash maps - objekti. Visas pārējās datu struktūras ir veidotas uz datu masīvu bāzes. Datu masīvi var būt fiksēti un var būt dinamiski. */

/* Javascript programmēšanas valodā datu masīvi vienmēr ir dinamiski. JavaScript programmēšanas valodā hash maps ir objekti jeb vēl maps - kartes. Fiksētu datu masīvu nevar mainīt pēc izmēra, nevar to paplašināt jeb samazināt, jo tāds ir operatīvās sistēmas atmiņas darbības princips, bet dinamiskā datu masīvā var pievienot, dzēst datus cik vien tas ir nepieciešams. */

/* Ņemot šo visu vērā izskatīsim ar kādām problēmām mēs varam sastapties: ja mums ir fiksēta lieluma datu masīvs, un mums vajag pievienot jaunus datus, tad mums ir jāizveido jauns lielāks datu masīvs, bet šādi mēs patērējam operatīvās sistēmas atmiņu. Mēs varam veco datu masīvu dzēst, tādējādi atbrīvojot atmiņā vietu. Tā pat mēs varam saskarties ar pretēju situāciju, kad esam izveidojuši lielu datu masīvu, un mums kādi dati ir jāizdzēš. Mums ir jāizveido datu masīvs, kas ir mazāka izmēra, un vecais lielais datu masīvs jāizdzēš, atbrīvojot atmiņas vietu. */

/* atliek tikai izdomāt, kā tieši mēs varam šīs abas problēmas atrisināt reālajā dzīvē: Samazināt datu masīvu jeb palielināt. Katru reizi kopējot datus no vecā datu masīva uz jauno, tas var aizņemt daudz laika. Vienkāršāk ir palielināt datu masīvu 2x, uz pusi. Ja mums ir atu masīvs no 8 elementiem, tad tagad mums ir datu masīvs no 16 elementiem. */

/* Tā, pat mums ir jāizmanto nosacījums, ka mēs samazinām datu masīvu, ja tas ir aizpildīts tikai pa 1/4 daļu. Kādēļ 1/4 daļu? Tādēļ, ka mēs izpildām samazināšanu arī uz pusi 2x. Ja mums bija datu masīvs no 16 elementiem, tad tagad mums ir datu masīvs no 8 elementiem. Un turklāt, ja izmantojam tikai 1/4 daļu no sākotnējā datu masīva lieluma, tad samazinot to uz pusi, iegūstot datu masīvu no 8 elementiem, mēs redzam ka 1/2 no datu masīva ir brīva, mēs varam to izmantot. */

/* Lai kontrolētu cik aizpildīts ir datu masīvs, mums ir jānosaka mainīgais, kas glabās datu masīva apjoma datus, cik vietas ir aizpildītas, ja datu masīvs ir tukšs, tad šis mainīgais glabās vērtību: nulle, bet tiko tur parādīsies viens elements, tas jau glabās vērtību: 1. Šī mainīgā vērtība arī būs vienāda ar datu masīva pēdējā indeksa vērtību. Šis ir dinamiska datu masīva darbošanās princips, kas tike pielietots gandrīz visās programmēšanas valodās, arī JavaScript. Bet sīkāk šo datu tipu dinamiskie datu masīvi mēs izskatīsim nākošajās lekcijās. Izskatīsim to efektivitāti, un cik ilgā laikā tie izpildās. */

/* Izskatīsim dinamiska datu masīva realizāciju ar koda piemēru: . */

class DynamicArray {
	constructor() {
		this.values = new Array(8);
		this.size = 8;
		this.currentIndex = 0;
	}

	add(value) {
		this.values[this.currentIndex] = value;
		this.currentIndex++;

		if (this.currentIndex === this.size) {
			this.resize(this.size * 2);
		}
	}

	resize(newSize) {
		const newValues = new Array(newSize);
		for (let i = 0; i < this.size; i++) {
			newValues[i] = this.values[i];
		}

		this.values = newValues;
		this.size = newSize;
	}
}

/* Šis kods ir rakstīts oriģināli java programmēšanas valodā, bet mēs to konvertējam uz JavaScript programmēšanas valodu, lai labāk saprastu kā kods darbojās, un kas tajā notiek. Seit mēs redzam, ka izmantojot divas konstruktora metodes mēs varam noteikt datu masīva izmēru. Mēs tagad datu masīvam varam pievienot jebkāda daudzuma  datus. */

/* Atgriezīsimies pie hash - jaucēja funkcijas, kas atgriež mums datu masīva indeksu. Parasti hash funkcija neko nezina par datu masīva izmēru un atgriež mums kā hash skaitli - jaucēja skaitli vienkārši kaut kādu veselu skaitli, sākot no 0 līdz bigInt datiem. Izņemot bigInt datus. Tā mums atgriež parastu maksimāli iespējamo skaitli. */

/* Mums ir uzdevums šo hash skaitli pārveidot, lai tas būtu atbilstošs datu masīva indeksam. Padomāsim kā mēs to varam izdarīt. Pats parastākais veids kā mēs to varam izdarīt ir paņemt dalījuma atlikumu kā datu masīva indeksu. */

/* Mēs varam likt hash funkcijai izskaitļot datu masīva indeksu. Ņemot tā atslēgas vērtību piemēram skaitli 124 un to dalot ar datu masīva izmēru, kas pieņemsim ir 8, bet atceramies, ka mēs dalām ar atlikumu, izmantojot zīmi: %. Darbība izskatītos šādi: 124 % 8 = 5, jo 124 dalīts ar 8 ir 15, 5. Šinī gadījumā, mēs ņemam vērā tikai atlikumu. Mēs ieguvām skaitli 5, kas kļūst par mūsu datu masīva indeksu. */

/* Tagad saliksim visas šīs iegūtās zināšanas kopā, uzrakstot uzdevuma risinājumu ar koda pierakstu, neņemot vērā hash funkcijas iespējamās kolīzijas - sadursmes: . */

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

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
}

/* Šis kods ir rakstīts oriģināli Java programmēšanas valodā, bet mēs izmantojām konvertēšanu, lai to konvertētu JavaScript valodā, lai būtu labāk saprotams, kā kods strādā un kādu vērtību tas mums atgriež. Šeit mēs uzrakstījām ar klases izmantošanu vairākas metodes, kas izpilda uzdevuma nosacījumus. Šis piemērs ir bez datiem, bez reāla datu masīva, jo tas mums nav dots, mēs tikai izpildījām koda funkcionālo daļu. */

/* Mēs izskatījām, kā ar nelielu koda gabala izstrādi var realizēt hash - jaucēja funkciju, kas pagaidām neņem vērā iespējamās sadursmes iespējas, iespējamās kolīzijas. Arī pilnīgam itkā ideālam hasp maps funkcijas pierakstam vienmēr var gadīties, kad veidojas kolīzija, sadursme, kad mums tike atgriezti vienādi datu masīva indeksi. Mums nākošajās lekcijās ir jāiemācās tikt galā ar iespējamām sadursmēm - ar hash maps kolīzijas iespējām. */

/* JavaScript programmēšanas valoda ir dinamiska programmēšanas valoda, kas bāzēta uz objektiem. JavaScript programmēšanas valodā gandrīz vis ir objektu tipa. */
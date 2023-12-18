'use strict';

/* Atgriezīsimies pie binārās meklēšanas algoritma. Tas liekas ļoti vienkāršs, jo tur ir tikai dažas koda rindas. Bet vis nav tik vienkārši kā izskatās. Vienkāršā kodā slēpjas daudz tehniskas detaļas. Kaut ir jau daudz zināms par binārā algoritma pierakstu, ir ļoti viegli kļūdīties rakstot kodu. */

/* Mēs bieži varam sastapties ar tādiem uzdevumiem, kurus var atrisināt tikai ar algoritma koda pieraksta modifikāciju. Viens no šādiem uzdevumiem ir: Sašķirotā datu masīvā atrast vietu, kur ielikt kādu elementu. Ievietošanas vietas atrašana sašķirotā datu masīvā. */

/* Iedomāsimies situāciju, ka mēs datu masīvā neglabājam skaitļus, bet gan objektus. Piemēram mēs glabājam līderu sarakstu, kas vislabāk mācās Duolingo aplikācijā Angļu valodu. */

/* Katram dalībniekam ir savs savākto punktu skaits, kā arī savs lietotāja vārds. Iedomājamies, ka mums ir jauns spēlētājs, kas jāieliek mūsu reitinga sarakstā, atbilstoši šī jaunā spēlētāja savākto punktu skaitam. Mūsu datu masīvs ar spēlētāju sarakstu ir jau sašķirots un mums tas jāsaglabā, lai datu masīvs paliktu sašķirots. Iedomājamies, ka mums ir jāieliek šāds spēlētājs: new Player(1700, 'Mike');. */

/* Mēs varam izmantot binārās meklēšanas algoritmu, lai izpildītu šādu uzdevumu. Tas mums atgriezīs: -1, jo šāda spēlētāja šobrīd mūsu datu masīvā nav. Bet ko darīt tādā gadījumā, kad mums parādās šāds spēlētājs: new Player(1600, 'Shmike');. Mums jau ir 3 spēlētāji ar šādu reitingu, tādēļ mums šis spēlētājs jāpievieno šo 3 citu spēlētāju augšdaļā. Un šeit mums jāizmanto binārās meklēšanas algoritms ar ievietošanas vietas atrašanu. Izskatīsim abus uzdevuma variantus: Pirmais, kad mums jāievieto spēlētājs: new Player(1700, 'Mike');, un otru variantu, kad mums jāievieto spēlētājs: new Player(1600, 'Shmike');. Sākumā realizēsi vienkāršu binārās meklēšanas piemēru: . */

class Player {
	constructor(rating, nickName) {
		this.rating = rating;
		this.nickName = nickName;
	}

	static findSpot(array, newPlayer) {
		let left = 0;
		let right = array.length;

		while (left < right) {
			let middle = Math.floor((left + right) / 2);
			if (array[middle].rating < newPlayer.rating) {
				left = middle + 1;
			} else {
				right = middle;
			}
		}
		return left;
	}
}

const ratings = [
	new Player(1100, 'Crowbar Freeman'),
	new Player(1200, 'London Mollaric'),
	new Player(1600, 'Raziel of Kain'),
	new Player(1600, 'Gwinter of Rivia'),
	new Player(1600, 'Slayer of Fate'),
	new Player(3000, 'John Know'),
	new Player(4000, 'Caius Cosades'),
];

function findSpot(array, newPlayer) {
	let left = 0;
	let right = array.length;

	while (left < right) {
		let middle = Math.floor((left + right) / 2);
		if (array[middle].rating < newPlayer.rating) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}
	return left;
}

const spot = findSpot(ratings, new Player(1700, 'Mike'));
console.log(spot);

/* Šis koda piemērs ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai mēs labāk saprastu kā konkrētais algoritms izskatās mūsu valodas kodā. */

/* Dotais kods pagaidām prot tikai meklēt dalībnieku ar noteiktu reitingu, bet šis kods vēl neprot darīt to, ko esam ieplānojuši, ielikt dalībnieku noteiktā vietā mūsu sarakstā. Tā nemāk atrast vietu, lai ieliktu konkrēto dalībnieku sarakstā un gadījumā, ja tāda elementa datu masīvā nav, tā atgriezīs mums vērtību: -1. */

/* Padomāsim kā mēs šo versiju varam mainīt tā, lai tā izpildītu sākotnēji paredzēto uzdevumu. Mainām nedaudz mūsu piemēru tā, lai izpildītos mūsu uzdevums. Nedaudz uzlabojot piemēru mēs redzam, ka tagad izpildās uzdevuma mērķis, un mums konsolē tike izvadīts skaitlis: 5, mūsu jaunais spēlētājs tiks ielikts sarakstā kā piektais. */

/* Ieliekot breakpoints iekš cikla mēs redzam, kā tas strādā, tas aiziet līdz 5 un 6 elementam un salīdzina tos, un par cik piektais elements ir mazāks, tad ieliek piektā elementa vitā jauno dalībnieku. Izpildot konsoles izvadi, mēs arī redzam, ka jaunais spēlētājs tiek sarakstā ielikts kā piektais. */

/* Izskatīsim situaciju, kad mēs kā jauno spēlētāju liekam: new Player(1600, 'Shmike');. Kā izpildīsies algoritms, un kādu rezultātu mēs iegūsim konsolē. Ieliekam atkal ciklā breakpoints un vērojam, kas notiek. Mūsu algoritma cikls izpilda salīdzināšanas darbības izmantojot bināro meklēšanu, kas noved pie gala rezultāta, ka dalībnieks sarakstā jāievieto: 2 vietā. Redzam, kā strādā mūsu izveidotais algoritms - binārās meklēšanas algoritms. */

/* Atceramies, ka šis konkrētais ievietošanas vietas atrašanas algoritms aizvieto elementu, dzēšot esošo, kas ir aizvietojamā elementa vietā, tas nepievieno jaunas vērtības, tas tās aizvieto, līdz ar to datu masīvs nemainās pēc tā izmēriem un nepatērē papildus atmiņu. */

/* Pie gadījuma, kad mums datu masīvā jāievieto jauns elements aizstājot esošo mēs to varētu izdarīt izmantojot divus variantus. Pirmais: Mēs varētu elementu ielikt pašās datu masīva beigās, un pēc tam izmantošot šķirošanas algoritmu to sašķirot. Atceramies, ka mūsu primitīvais šķirošanas algoritms no pirmās lekciju daļas. Šis algoritms to varētu izdarīt laikā: N2/2, kas lasās: N kvadrātā dalīts uz pusēm. Tik ilgā laikā izpildītos šāds algoritms. Otrs variants: Ir algoritmi, kas to var izdarīt ātrāk. Bet izmantojot binārās meklēšanas algoritmu mēs to varam izdarīt pa nieka: log2N, kas lasās: logaritms 2 no N operācijām. */

/* palielinoties datiem datu masīvā binārās meklēšanas algoritma izpildes laiks aug daudz lēnāk, nekā parastais šķirošanas algoritma izpildes laiks. Tāpēc gandrīz vienmēr mēs izvēlēsimies otro variantu lai atrisinātu šādu uzdevumu. */

/* Ir vēl citi algoritmi ar kuru palīdzību mēs konkrēto uzdevumu varētu atrisināt nedaudz ātrāk, nekā izmantojot binārās meklēšanas algoritmu, bet tos mēs izskatīsim vēlāk. */

/* Šinī lekciju daļā mēs izskatījām binārās meklēšanas algoritmu, un dažas tā modifikācijas. Mēs uzzinājām kādas var būt problēmas, kad mainās fiksēta datu masīva lielums. Nākošajā lekcijā mēs runāsim par ļoti nozīmīgu - svarīgu datu tipu: Hash tabulām. */

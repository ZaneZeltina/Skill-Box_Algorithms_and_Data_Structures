'use strict';

/* Kad mēs runājam par algoritma efektivitāti, mēs parasti runājam ne tikai par izpildes laika atkarību no ievades datiem, bet arī par papildu atmiņas apjomu, kas nepieciešams algoritma darbībai. Līdz ar to algoritma efektivitāti var uzlabot, samazinot ne tikai izpildes laiku, bet arī atmiņas patēriņu. */

/* Izskatīsim algoritmu: Naivās meklēšanas algoritmu lai dzēstu dublikātu. Tas ir domāts gadījumos, kad mums ir datu masīvs, un tajā kādi elementi atkārtojās. Mēs izmantojam naivās meklēšanas algoritmus, lai dzēstu no datu masīva tos elementus, kuri atkārtojās. Mums ir jāatrod dublikāti un jāizdzēš tie no datu masīva. Gadījumos, kad mums ir ļoti liels datu masīvs, mēs varam izveidot papildus masīvu, ebt šāda metode nav piemērotākā, jo tā patērē daudz atmiņas. Atceramies piemēru, par blociņa izmantošanu. Lai pierakstītu visus datus blociņā, mums būs jāizmanto daudz lapas. Tādēļ mums ir vajadzīgs naivās meklēšanas algoritms. */

/* Kad runājam par piemērotākā algoritma izvēli, lai atrisinātu kādu uzdevumu, mums ir jāņem vērā divas svarīgas lietas: Pirmā: algoritma izpildes laiks atkarībā no ieejošo datu lieluma. Otrā: Mums ir jāizvērtē arī tas, cik daudz papildus atmiņas ir vajadzīgs, lai izpildītos konkrētais algoritma. Jo ja mums ir ļoti liels datu masīvs, piemēram tāds, kas aizņem 1 GB atmiņas, un algoritms aizņem vēl vienu GB atmiņas, mums jau vajag 2 GB atmiņas. Un šāds faktors būtiski ietekmē to kuru algoritmu mēs izvēlēsimies. */

/* Līdz ar to algoritma efektivitāti var uzlabot, samazinot ne tikai izpildes laiku, bet arī atmiņas patēriņu. */

/* Mums ir jāiemācās atrisināt uzdevumi izmantojot algoritmus bez papildus atmiņas patēriņa. Mums ir pie algoritma izpildes jāiegūst datu masīvs, kas sastāv no unikāliem elementiem. Tātad datu masīva dublikāti mums ir jāizdzēš. */

/* izskatīsim kā tiek izmantota datora atmiņa, kad mēs veicam datu masīvā kāda elementa dzēšanu. Iedomāsimies, ka mums ir šāds datu masīvs: [15, 23, 20, 5, 19];. Mēs gribam dzēst elementu, kas atbilst indeksam: 1, tas nozīmē, ka mēs gribam dzēst skaitli: 23. Mēs to nodzēšam, un mums nākas visus atlikušos datu masīva elementus pārvietot katru pa vienu indeksu pa kreisi. Mēs visus elementus pārvietojot vienu indeksu pa kreisi, iegūstam to, ka indeks: 5 mums paliek tukšs. Tas nekur nav pazudis, vienkārši pārbīdot visus elementus pa vienu indeksu pa kreisi, mums indekss pieci paliek tukšs. Mēs iegūstam to pašu datu masīvu, tikai bez skaitļa: 23;. Mēs iegūstam datu masīvu no četriem elementiem. Un pie tam, mēs nepatērējām papildus atmiņu, mēs veicām visas operācijas jau eksistējošā datu masīvā. Šis variants ir daudz labāks, nekā tas, kad mēs veidotu jaunu atsevišķu masīvu, jo tāds variants patērētu papildus atmiņu.  */

/* Šādas pieejas sliktākais variants būtu tāds, ka, ja mēs dzēšam 0 indeksa elementu mums ir jāpārbīda vis datu masīvs pa vienu indeksu pa kreisi. Tas nozīmē, ka šāda operācija aizņems šādu laiku: N - 1 operācija. Datu masīva elementu pārbīde izpildīsies pēc šādas formulas. */

/* Fiksēti datu masīvi nevar tikt mainīti pēc to izmēra. Tādēļ, ja dzēšam kādu datu masīva elementu, tad atlikušie elementi tiek nobīdīti pa 1 indeksu pa kreisi, bet dzēstais elementa indekss vienkārši paliek tukšs, jo tas nekur nav pazudis. Šādi darbojas jebkura datora operētājsistēmas atmiņa. Jo fiksētie datu masīvi bez to kopēšanas never tikt mainīti pēc to izmēra, tādi ir datora atmiņas izmantošanas nosacījumi. Datu masīva tukšais indekss vienkārši tike ignorēts. */

/* Neskatoties uz to, ka mūsu datu masīvā palika 4 mums vajadzīgie elementi, tas patērē tik pat daudz datora atmiņas itkā tam būtu sākotnēji pieci elementi. Gadījumos, kad mums bieži vajag dzēst jeb pievienot elementus datu masīvā tiek izmantoti dinamiskie datu masīvi, kas aizņem tikai tik daudz atmiņas, cik ir nepieciešams, lai varētu tikt glabāti tā elementi, neatstājot tukšus indeksus. bet šādiem datu masīviem ir arī savi trūkumi. Šos dinamiskos datu masīvus mēs izskatīsim vēlāk mūsu kursā. JavaScript programmēšanas valodā visi datu masīva veidi ļauj brīvi pievienot jeb dzēst datu masīva elementus, bez papildus operētājsistēmas atmiņas izmantošanas. Bet ir programmēšanas valodas, kurās šāda iespēja nav. Par cik mēs oriģinālos algoritmu izmantošanas piemērus izskatām Java valodā, mums ir jāpieraksta kods tā, lai izpildītos nosacījums par datu masīvu veidu lietošanu, kas šajā gadījumā ir: fiksētie datu masīvi. */

/* Izskatīsim naivās meklēšanas algoritma pierakstu kodā. Izskatīsim to ar reālu piemēru, kad mēs vēlamies dzēst datu masīva elementus, un nobīdīt datu masīva elementus pa 1 indeksu pa kreisi: . */

class ArrayShift {
	removeElementAtIndex(array, element) {
		for (let i = element + 1; i < array.length; i++) {
			array[i - 1] = array[i];
		}
		return array.length - 1;
	}
}

/* Šis koda piemērs ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai mums būtu vieglāk saprotams, tas, kas notiek kodā, kā darbojās konkrētais kods un kāda vērtība mums tike atgriezta. Šinī piemērā mums nav iedoti ienākošie dati. Tos mēs izmantosim nākošā piemērā, kur būs jau pilnīgs naivās meklēšanas algoritma kods. */

/* ievērojam, ka mūsu funkcija nemaina datu masīvu, tā tikai nobīda datu masīva elementus pa 1 indeksu pa kreisi. Tā nepatērē papildus atmiņu. Ar elementu dzēšanu mēs tikām skaidrībā, tagad izskatīsim dublikātu dzēšanu no datu masīva. */

/* Iedomāsimies piemēru: kad mēs rakstām sistēmas kodu, lai optimizētu korupcijas izslēgšanas programmu. Mūsu sistēmā ienāk saraksti ar budžeta datiem. Mums ir jāatrod budžetu sleju sarakstos vienādie saraksti un tie jāizslēdz, lai nevarētu viltot datus, un iztērēt norakstītos līdzekļus. Mums ir jāpanāk ka mēs redzam visas budžeta sleju sakritības. Mums ienāk budžeta saraksti. Budžeti sastāv no slejām. izskatīsim šādu piemēru, kad mums ir konkrēta budžeta sleja: . */

class ArrayShift {
	constructor() {
		this.array = [15, 23, 20, 5, 15, 20, 15, 20];
	}

	removeDuplicates(array) {
		let length = array.length;
		let i = 0;
		while (i < length) {
			let found = false;
			for (let k = i + 1; k < length; k++) {
				if (array[i] === array[k]) {
					found = true;
					break;
				}
			}
			if (!found) {
				i++;
				continue;
			} else {
				for (let k = i + 1; k < length; k++) {
					array[k - 1] = array[k];
				}
				length--;
			}
		}
		return length;
	}
}


/* Šis koda piemērs ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai mēs redzētu kā konkrētais koda piemērs darbojās JavaScript valodā, un kāds ir darbības rezultāts. */
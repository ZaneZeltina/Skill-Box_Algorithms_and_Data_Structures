'use strict';

/* Izskatīsim Binārās meklēšanas algoritma piemēra realizāciju kodā. Mēs pierakstīsim metodi, kas atradīs mums vajadzīgo skaitli no datu masīva. Šī metode mums atgriezīs meklējamā skaitļa indeksu, jeb, ja tāda skaitļa nav, tā mums atgriezīs: -1, kas nozīmē, ka tāda skaitļa datu masīvā nav. Skaitlis: -1, programmēšanas valodā nozīmē to, ka funkcija, metode nav atradusi meklējamo vērtību. Bet citās programmēšanas valodās skaitlis: -1 nozīmē to, ka meklējam vērtību, kas atrodas pozīcijā: pirmā no beigām. Saņemot atbildē skaitli: -1 mums jāņem vērā abas šīs iespējamās nozīmes: ka skaitlis nav atrast, jeb, ka tike meklēts pēdējais skaitlis no beigām. Bet mēs šajā kursā izmantosim pieeju, kad skaitlis: -1 nozīmē to, ka nekas nav atrasts. */

class BinarySearch {
	static binarySearch(array, search) {
		let left = 0;
		let right = array.length - 1;
		let middle = Math.floor((left + right) / 2);
		while (left <= right) {
			if (array[middle] < search) {
				left = middle + 1;
			} else if (array[middle] > search) {
				right = middle - 1;
			} else {
				return middle;
			}
		}
		return -1;
	}
}

/* Šis piemērs gan nav pilnīgs, jo mēs izskatām binārās meklēšanas algoritma pamatus, bet vadoties pēc šāda pieraksta mēs turpināsim risināt dotos uzdevumus. Šis piemērs ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai mēs labāk saprastu kodu, kā darbojās konkrētais algoritms, un kādas vērtības tas atgriež. Šeit ir pierakstīta tikai koda darbība, nav iedoti dati. Tālāk mēs izskatīsim piemērus, kur būs jau konkrēti dati. */

/* Lai atrisinātu uzdevumu, kur iekš datu masīva mums jāatrod kāds elements ar noteiktu vērtību mēs deklarējam divus mainīgos: left un right, kas nozīmē to, ka mēs nosakām, kurā datu masīva daļā mēs meklējam vajadzīgo lielumu. */

/* Kā tiek aprēķināts datu masīva vidus, sākuma elements, no kura sākt bināro meklēšanu. Ja datu masīvā ir pāra elementu skaits, tad mums ir jāievēro formula. Izskatīsim divus datu masīvus, lai labāk saprastu kā mums jāaprēķina vidējais elements. [0, 1, 2, 3]. Formula: left = 0, right = 3, middle = (0 + 3) / 2 = 1;. Otrs variants, kad mums datu masīvs ir no nepāra elementu skaita: [0, 1, 2, 3, 4];. Formula: left = 0, right = 4, middle = (0 + 4) / 2 = 2;. */

/* Kā mēs varam uzreiz paskatoties uz datu masīvu aprēķināt nepieciešamo operāciju skaitu, lai atrastu meklējamo elementu. Datu masīvs, kas sastāv no 32 elementiem, mums ir jāsadala 5 reizes, jāizpilda piecas operācijas, lai atrastu meklējamo elementu. Ja operāciju skaits pieaug par: +1, tad tas nozīmē, ka datu masīva izmērs dubultojās, ja mums ir jāizpilda sešas operācijas, tad mums ir datu masīvs no 64 elementiem, bet, ja mums ir jāizpilda 7 operācijas, tad mums ir datu masīvs no 128 elementiem. Šādi mēs pēc operāciju skaita varam noteikt cik liels ir datu masīvs, jeb otrādi pēc datu masīva lieluma noteikt nepieciešamo operāciju skaitu. */

/* Mēs sākam saprast kā palielinās iterāciju skaits, atkarībā no ieejošajiem datiem, atkarībā no datu masīva lieluma. Mēs aprēķinām nepieciešamo iterāciju skaitu izmantojot šādu formulu: N = 2 * 2 * 2 (X Reizes) * 2 = 2X,lasām to kā: Divi kvadrātā Iks. Iks ir elementu skaits datu masīvā, N ir nepieciešamo darbību - iterāciju skaits, lai atrastu meklējamo elementu. Saīsinājumā šāda formula izskatās šādi: N = 2X;. Tas nozīmē, ka iterāciju skaits ir vienāds ar N 2 bāzes logaritmu: X = log2 (N). */

/* Logaritms. Kas ir logaritms? Algoritma logaritmiskā sarežģītība ir algoritma darbības laika logaritmiskā atkarība no ievades datu lieluma. Binārajam meklēšanas algoritmam ir logaritmiska laika sarežģītība. */

/* Izskatīsim pretēju situāciju, kad mums ir jāaprēķina datu masīva lielums, zinot cik iterācijas - darbības mēs izpildām. Matemātikā jau ir gatava funkcija, lai mēs to varētu izdarīt. Tas ļaus noteikt X pakāpi pie zināma nosacījuma: logaritms un skaitlis: 2. Šāda aprēķināšanas formula izskatās šādi: X = log2N;. Tas tike lasīts šādi: X ir logaritms pēc nosacījuma divi no N. Piemēram: Ja N = 64, tad X = log2 64 = 6;. Tas lasās šādi: X ir logaritms divi no 64 ir 6;. Jo mums ir jāizpilda sešas iterācijas, lai no 64 elementu liela datu masīva atrastu vajadzīgo elementu. */

/* Tāpēc binārās meklēšanas algoritma izpildes laiks ir atkarīgs no ievades datu lieluma logaritma. */


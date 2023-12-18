'use strict';

/* Izskatīsim līdzīgu, bet cita veida uzdevumu: Mums ir jāatrod unikāli elementi datu masīvā. Piemēram, kāds unikāls elements, ne lielākais, ne mazākais. Šāda uzdevuma piemēru varam iztēloties iedomājoties: Ir liela firma, kas piedāvā programmēšanas kursu. Ir daudz studētgribētāju. Lai pieteiktos uz kursu jāatstāj savs vārds un telefona numurs. Reizēm šādi studenti aizpilda pieteikumu divas jeb trīs reizes, jo pilda tos daudzās kursu piedāvātāju firmās. Un konkrētajai firmai jāsašķiro visi pieteikumi, lai tie nedublētos. Šķirošana tiek veikta izmantojot telefona numurus. Izskatīsim kāa r koda piemēru mēs varam risināt šāda veida uzdevumu: . */

const phoneNumbers = [79161002030, 79255558877, 79219990000, 79161002030];
const uniqueNumbers = [];
for (const currentNumber of phoneNumbers) {
	let alreadyExists = false;
	for (const existingNumber of uniqueNumbers) {
		if (existingNumber === currentNumber) {
			alreadyExists = true;
			break;
		}
	}
	if (!alreadyExists) {
		uniqueNumbers.push(currentNumber);
	}
}
console.log(uniqueNumbers);

/* Šis piemērs arī ir konvertēts no Java programmēšanas valodas uz JavaScript programmēšanas valodu, lai algoritms pareizi darbotos un mēs konsolē saņemtu vēlamo rezultātu. Šī algoritma piemēra darbība ir gluži vienkārša: Mēs lai atrisinātu šo uzdevumu izmantojam: Risinājumu tieši pierē, tiešo risinājumu. Šādu metodi vēl sauc par: Rupjā spēka metodi. No Angļu valodas Brut Force. Šāda pieeja nav pati optimālākā pieeja, lai atrisinātu šo uzdevumu, bet mēs varam uzlabot šo risinājumu. Bet iesākumā paskatīsimies cik ilgu laiku aizņem šī koda izpilde. Mēs zinām, ka ārējais cikls izpildīsies tik reizes, cik mums ir telefona numuri. Bet ar iekšējo ciklu ir grūtāk, jo mēs neredzam, uzreiz nevaram pateikt cik reizes tas tiks izpildīts. Ja mums būtu visi 4 telefona numuri vienādi, tad iekšējais cikls izpildītos tikai vienu reizi. Bet, ja mums ir 4 dažādi telefona numuri, kā mēs varam aprēķināt algoritma izpildes laiku. Mēs iekšēja cikla izpildes reizes varam pierakstīt šādi: (1 +2 +3 + 4 ..N) * N;. Šādi pierakstot mēs labāk saprotam, kā mēs varam aprēķināt algoritma izpildes laiku. Iekš iekavām mums ir tās reizes, kad izpildās iekšējais cikls, bet ārpusē tās reizes, kad izpildās ārējais cikls. Mēs, lai aprēķinātu katra algoritma izpildes laiku izmantosim jau gatavu matemātisku formulu. Un tā ir: Aritmētiskās progresijas summa: 1 +2 +3 +4 ...N == N/2;. Tas nozīmē, ka vis mūsu algoritms izpildīsies šādā laikā: N * N/2;. Kur N ir ārējais cikls, bet N/2 ir iekšējais cikls. Kopējais laiks kas mums ir vajadzīgs lai izpildītu šo algoritmu ir: N ^ 2/2;. Kas nozīmē N kvadrātā dalīts uz 2 operācijām. Šādu aprēķināšanu atkarībā no ieejošiem datiem sauc par: kvadrātisku aprēķināšanu. Algoritma izpildes laiks jau būs atkarīgs no ieejošo datu izmēra kvadrāta. */

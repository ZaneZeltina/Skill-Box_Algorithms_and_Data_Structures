'use strict';

/* Lai labāk iedziļinātos un saprastu kā darbojās algoritmi, izskatīsim algoritmu, kurš atrod lielāko vērtību datu masīvā. Šo uzdevumu var attiecināt arī uz reālo dzīvi, piemēram, kad mums ir jāatrod pats ienesīgākais klients, kas ir mūsu firmai jeb lielākais fails starp visiem failiem, Sajos gadījumos mēs pielietojam lielākās vērtības atrašanas algoritmu. Ir vairāki varianti, lai atrisinātu šādu uzdevumu. Mēs iemācīsimies noteikt kurš no variantiem ir vispiemērotākais. */

/* Iztēlosimies piemēru, kad mums uz neapdzīvotas salas ir ģimene no septiņiem cilvēkiem un viņi grib atrisināt problēmu: kurš ir ģimenes galvenais. Kā kritēriju viņi ņem katra ģimenes locekļa vecumu. Katrs savu vecumu ierakstīja datu masīvā, un mums atliek tikai izmantojot algoritmu atrast lielāko skaitli. */

/* Masīva šķirošana. Ja izmantosim funkciju, kas sašķiro masīvu sākot no mazākā skaitļa beidzot ar lielāko, tad mēs vienkārši paņemam pēdējo skaitli, kas arī ir datu masīva lielākā vērtība. Izskatīsim to ar piemēru: . */

const ages = [10, 6, 15, 93, 42, 7, 32];
ages.sort((a, b) => a - b);

const maxAge = ages[ages.length - 1];

console.log(ages);
console.log(maxAge);

/* Mēs nosakām mainīgo: datu masīvu, kas satur septiņus dažādus skaitļus, ko iedomājāmies, kā ģimenes locekļu vecumu gados. Mēs liekam mainīgo: ages sašķirot izmantojot metodi: sort(). Nosakām mainīgo: maxAge, kam liekot piederības zīmi pievienojam datu masīva: ages[ages.length - 1], tādējādi liekot no datu masīva garuma atņemt pēdējo vērtību, kas ir sašķirotā datu masīva lielākā vērtība. Izvadām konsolē sašķirotu datu masīvu, un otrā konsoles izvadē izvadām lielāko sašķirotā datu masīva vērtību: maxAge. Izpildot šādu kodu mēs konsolē saņemam sašķirotu datu masīvu un skaitli: 93, kas ir lielākā datu masīva vērtība. Esam atrisinājuši uzdevumu un noskaidrojuši, ka ģimenes galvenais ir tas, kam ir 93 gadi. */

/* Datu masīva šķirošanas metodes, algoritmi parasti aizņem daudz laika. Kursa gaitā mēs uzzināsim konkrēti cik daudz laika aizņem katrs algoritms, cik ilgs laiks paiet līdz tas tiek izpildīts. Kā arī mēs iemācīsimies novērtēt algoritma sarežģītību. */

/* Bet tagad paliksim pie tā fakta, ka datu masīvs no desmit miljoniem elementu, izmantojot šķirošanas algoritmu uz vidējiem datoriem aizņem apmēram vienu sekundi. Datu masīva šķirošanas algoritms vidēji tiek izpildīts vienā sekundē. Varētu padomāt kam gan ir vajadzīgi datu masīvi no desmitiem miljonu elementiem, bet, kad strādājam ar datu bāzēm, tad datu masīvs var sastāvēt no miljardiem elementu, un tad, lai izpildītu šķirošanas algoritmu vajadzēs daudz vairāk laika. Kā arī, ja mēs strādājam ar kādu web servisu, kuru dienā apmeklē miljardiem lietotāju, tad mēs izjūtam algoritma izpildes laika atšķirību. varam iedomāties tādus servisus kā: Google un Amazon, Facebook, Twitter, kur lietotāji izpilda desmitiem tūkstošu dažādu darbību. */

/* Mums kļūst skaidrs, ka servisu darbības ātrums kļūst par augstāko prioritāti. vai mēs, lai izpildīto šo uzdevumu varētu iztikt bez šķirošanas? izskatīsim sākumā šo uzdevumu ar maksimāli vienkāršu piemēru: kā no diviem skaitļiem noskaidrot kurš ir lielākais? Piemēra pieraksts: . */

const mumAge = 45;
const dadAge = 47;

const maxAgeMomAndDad = Math.max(dadAge, mumAge);
const grandmaAge = 83;
const maxAge2 = Math.max(maxAgeMomAndDad, grandmaAge);
console.log(maxAge2);

/* Mēs nosakām divus mainīgos, ar dažādām vērtībām, nosakām trešo mainīgo: maxAge2, liekam piederības zīmi un izmantojam īpašību: Math ar metodi: max() izmantošanu, kur rakstām iekš () iekavām: dadAge, mumAge. Izpildām konsoles izvadē trešo mainīgo: maxAge2. Izpildot šādu kodu mēs konsolē iegūstam skaitli: 47, kas arī ir vēlamais rezultāts, redzam, ka lielākās vērtības atrašanas algoritms strādā pareizi. */

/* Šis vienkāršais koda piemērs parāda mums to kā mēs varam virzīties tālāk. izskatīsim piemēru kā mēs varam atrast maksimālo skaitli iekš trijiem skaitļiem: . Skatīt piemēru augstāk. */

/* Mēs nosakām jaunu mainīgo: grandmaAge, pievienojam tam vērtību. Pēc tam nosakām mainīgo: maxAge2, liekam piederības zīmi un izpildām konstrukciju: Math ar metodi: max() iekavās rakstot mainīgo: maxAgeMomAndDad, grandmaAge. Izpildām konsoles izvadē: maxAge2. Izpildot šādu kodu mēs redzam skaitli: 83, kas arī ir tas, ko vēlējāmies redzēt. */

/* Tad, kad mums ir jau četras skaitliskas vērtības mēs rīkojamies citādi. Mēs izmantojam ciklu: for, katru reizi salīdzinot divas vērtības, vienu ar otru, tādejādi izejot cauri visam datu masīvam, nonākot pie lielākā skaitļa. Izskatīsim to ar piemēru: . */

const ages2 = [10, 6, 15, 93, 42, 7, 32];
let maxAge3 = 0;

for(let i = 0; i < ages2.length; i++) {
	maxAge3 = Math.max(maxAge3, ages2[i]);
}

console.log(maxAge3);

/* Šeit mēs nosakām divus mainīgos. Vienu ar vecumiem: ages2 un otru ar: maxAge3, kuram pievienojam sākuma vērtību: 0. Mainīgo: maxAge3 deklarējam izmantojot atslēgvārdu: let, jo tā vērtība mainīsies. Izmantojam ciklu: for. Iekš for cikla maxAge3 liekam piederības zīmi un pievienojam konstrukciju: Math, izmantojam metodi: max() iekavās rakstot: (maxAge3, ages2[i]). Izpildām konsoles izvadē: maxAge3. izpildot šādu kodu mēs konsolē redzam skaitli: 93. Redzam, ka esam pareizi pierakstījuši lielākās meklēšanas algoritmu. */

/* Šāda pieeja ir acīmredzama pat programmētājiem iesācējiem. Kādēļ mēs par to runājam? Tādēļ ka šis vienkāršais koda piemērs mums ļaus saprast dažas pamata lietas. Pirmkārt: Ievērojam, ka katrā cikla iterācijā mēs izmantojām vērtību, kas bija izskaitļota iepriekšējā cikla iterācijā. Šāda pieeja vēl tiek saukta par dinamisko programmēšanu. Mēs vēlāk kursā izskatīsim kas tad ir dinamiskā programmēšana. izskatīsim mazāk sastopamus algoritmus, kas izmanto dinamiskās programmēšanas pieeju. Otrais: Mēs nonācām pie šāda uzdevuma atrisinājuma risinot sākumā ļoti vienkāršus uzdevumus. Mēs spējām izdomāt kopējo principu, kas ļauj mums atrisināt šādu uzdevumu. Tagad mēs protam atrisināt šādu uzdevumu neatkarīgi tam cik garš ir datu masīvs, neatkarīgi no tā no cik elementiem sastāv datu masīvs. Šī pieeja ir ļoti svarīga, jo tā mums tālāk palīdzēs atrisināt daudz grūtākus uzdevumus. */

/* ja mēs izmērīsim laiku, pa kuru tika izpildīts mūsu pēdējais uzdevums, tad mēs secināsim, ka pat tad, kad datu masīvs sastāv no desmitiem miljonu elementiem, mūsu kods izpildās desmit milisekunžu laikā. Ja salīdzinām ar šķirošanas algoritmiem, kas izpildās minūtes laikā, tad izmantojot šādu pieeju mēs laika ziņā vinnējam vairāk kā 100 reizes. Bet vai mums vispār vajadzēja uzlabot šo kodu? Atceramies kādēļ vispār mums ir jāzin algoritmi. Lielas kompānijas cenšas optimizēt savus kodus tā, lai taupītu servera resursus un tās var ietaupīt miljoniem dolāru vienkārši pārrakstot savu kodu. izmantojot optimālus algoritmus. Jo pareizi pierakstīti algoritmi padara IT pasauli labāku, padara lietotāju laimīgāku. Iedomājamies, ka tā vietā, lai lietotājam lapa ielādētos 5-6 sekundēs, tā lādētos minūti. Jeb piemēram uz katra klikšķa mobilajā aplikācijā, tā apstātos uz 2-3 sekundēm. Tas neapmierinātu lietotāju un nenestu uzņēmumam vēlamo peļņu. */

/* Mēs izskatījām parastākos algoritmus, lai atrastu maksimālo skaitli datu masīvā. */


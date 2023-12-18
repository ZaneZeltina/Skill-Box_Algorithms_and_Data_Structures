'use strict';

/* Pats svarīgākais:. */

/* tagad, kad mēs zinām kā hash maps - jaucēja funkcijas darbojās, parunāsim par to efektīvu izmantošanu, pielietošanu, lai risinātu dažādus uzdevumus. */

/* kad runājam par datu struktūrām un to efektivitāti, tad vienmēr tiek ņemts vērā laika patēriņš uz katru operāciju. */

/* Paskatīsimies kādas operācijas mēs varam veikt izmantojot hsh map funkcijas. Un no kā ir atkarīgs izpildes laiks hash map funkcijai. Pati pirmā operācijai, ko gribas izdarīt ir: jauna elementa pievienošana datu masīvā - objektā JavaScript programmēšanas valodā. Tā pirmkārt sastāv no hash funkcijas aprēķināšanas, no hash funkcijas vērtības un laika, kurā šī operācija tiek izpildīta, kas nav atkarīgs no datu masīva apjoma, no elementu skaita datu masīvā. */

/* Otrkārt: Piemērota indeksa atrašanas gadījumā un iespējamas kolīzijas atļaušanas gadījumā ideālā gadījumā pie labas hash funkcijas izstrādes kolīzijas būs retas un tās varēs viegli atrisināt, piemēram izmantojot vienu jeb divas iterācijas ar provēšanu, brīvās kaimiņa vietas meklēšanu  - atvērtā adresācija. Un šīs funkcijas izpildes laiks arī nav atkarīgs no elementu skaita. Kad indekss ir atrasts mums vienkārši tajā ir jāieraksta jaunie dati, pēc nepieciešamības mainot datu masīva izmēru. */

/* Kaut arī operācija, lai mainītu datu masīva izmēru patērē diez gan daudz laika, to veidot mums iznāk diez gan reti. */

/* Kopsummā mēs uz šīm visām operācijām tērējam ļoti maz laika. Vēlāk mūsu kursā mēs noskaidrosim kas ir amortizēts operācijas izpildes laiks. Un uzzināsim kapēc kopējais laiks, kas tiek patērēts lai paplašinātu dinamisku datu masīvu nav atkarīgs no tā izmēra. */

/* Un tā, vajadzīgā indeksa atrašana un jauno datu ierakstīšana tajā, ar iespēju, ka tiks mainīts datu masīva izmērs, izpildes laiks nav atkarīgs no elementu skaita hash map funkcijā - jaucēja funkcijā. Lai pievienotu iekš hash map elementus mums ir jāizpilda tikai 3 operācijas, kuru izpildes laiks nav nekādi atkarīgs no elementu skaita hash map funkcijā. */

/* Parunāsim par vajadzīgo laiku, lai atrastu kādu elementu pēc atslēgas nosaukuma. Sīs operācijas struktūra ir ļoti līdzīga iepriekšējo operāciju struktūrai. Izskaitļot hash funkciju, kuras izpildes laiks nemainās pie datu apjoma lieluma izmaiņām, atrast vajadzīgo datu indeksu, kur laiks atkal nav atkarīgs no hash map funkcijas apjoma un atgriezt datus, kur izpildes laiks atkal nav atkarīgs no hash map izmēra. */

/* Sanāk tā, ka operācija, kad mēs pievienojam jaunus datus, un operācija, kad mēs meklējam vajadzīgo datu masīva indeksu, laiks, kurā izpildās šīs darbības nekādi nav atkarīgs no datu, funkciju izmēra. Šī brīnišķīgā īpašība ļauj mums uzlabot mūsu programmas izstrādi, darbību. */

/* izskatīsim iegūtās zināšanas uzdevuma piemērā: Mums ir jānoskaidro vai kāds elements datu masīvā ir daudzskaitlī. Piemēram, kad tike glabāti telefona numuri, kuri jau saņēmuši sms reklāmu šajā mēnesī un sūtīt šo sms reklāmu otro reizi mums nav nepieciešams. */

/* ja mēs glabājām mūsu spam datu bāzi datu masīvā, tad elementu meklēšanas laiks būtu proporcionāls datu masīva izmēram - lielumam. Bet ja mēs šādu datu bāzi glabāsim hash map funkcijā, tad numura atrašana notiks momentāli. Izskatīsim šo uzdevuma atrisinājumu reālā koda piemērā: . */

const dictionary = {
	9161002030: true,
	9163004050: true,
	9165006070: true,
	9167008090: true
};

const c = dictionary[9161002030];
console.log(c);

/* Šis piemērs ir konvertēts no Phyton programmēšanas valodu uz JavaScript programmēšanas valodu, izmantojot ChatGPT mākslīgo intelektu. Šis piemērs nav pilnīgs, bet tas jau pilda galveno uzdevumu, atrast, vai kādā objektā ir kādi dati, vai datu masīvā ir šāda atslēga. Atceramies, ka JavaScript programmēšanas valodā hash maps jaucēja tabulu datu tips ir objekti jeb Map. */

/* Otrais piemērs: kad mums vajag datu masīvā - objektā atrast unikālus elementus. Piemēram mēs gribam saviem draugiem no laukiem aizsūtīt arhīvu ar trīs svaigākajiem anime no interneta. Bet tā, kā disketē daudz failu neielikt, mums gribētos aizsūtīt tikai trīs unikālus failus, kaut gan mums ir 100 faili, bet disketē ir maz vietas. Tā, lai tie neatkārtotos. ja mums ir arhīvs ar failiem, zip arhīvs, tad izmantojot hash funkciju mēs ātri varam atrast trīs unikālus failus, kurus aizsūtīt draugiem. */

/* Ja mums būtu datu masīvs ar failiem, tad unikālu failu nosaukumu saņemšana izmantojot hash map funkciju būtu ļoti ātra. Ar vienu cauri iziešanu datu masīvam, vienkārši saliekot elementus kopā. Salikt nosaukumus kopā, kā atslēgas iekš hash map. Pēc tam saņemot visas atslēgas, un tās būs jau unikālas. */

/* Cits piemērs: Kad mums ir jālasa elementi un jāsagrupē tie. Mums ir atkal datu masīvs ar atslēgām un to vērtībām, kas JavaScript programmēšanas valodā ir Objekts. Mums ir jāsašķiro elementi, kas ir pop mūzikas saraksts, jo mēs sastrīdējāmies ar kolēģiem, kurš ir lielāks krievu 90 gadu pop mūzikas fans. lai uzvarētu šajā strīdā, mums ir jāizveido saraksts, ka mums ir vairāk mp3 faili ar konkrētajiem izpildītājiem. lai to izdarītu mums bija jāiziet cauri visai mūsu mūzikas kolekcijai, kas atrodās diskā: D un izmantojot hash funkciju saglabāt tos failus, kuru nosaukumi atbilst meklētajiem failiem, kuru nosaukumi atbilst prasībai: ka tā ir krievu 90 gadu pop mūzika. Un beigās izrēķināt šī sarksta apjomu - garumu. */

/* izskatīsim iepriekšējā uzdevuma risinājumu ar koda piemēru: . */

const mem = [
	'ПреведМедвед.bmp', 
	'Кандибобер.avi', 
	'СвидетельИзФрязино.gif', 
	'ПреведМедвед.bmp', 
	'Кандибобер.avi',
	'ПреведМедвед.bmp'
];

const memLibrary = {};
memLibrary[mem[0]] = 1;

for (let i = 1; i < mem.length; i++) {
	if (memLibrary[mem[i]] === undefined) {
		memLibrary[mem[i]] = 1;
		console.log(memLibrary);
	}
}

/* Redzam, ka šo uzdevumu esam atrisinājuši par trīs mems atrašanu iekš datu masīva - iekš objekta, un izmantojot hash funkciju atrodot trīs unikālus elementus ko varam aizsūtīt draugiem. Šis piemērs oriģināli ir rakstīts Phyton programmēšanas valodā, bet mēs izmantojot mākslīgo intelektu to konvertējam uz JavScript programmēšanas valodu, lai mums būtu labāk saprotams, kas notiek kodā. */

/* Izskatīsim  uzdevuma risinājumu par strīdu ar kolēģiem, kurš ir lielāks krievu 90 gadu pop mūzikas fans, izskatīsim to ar koda piemēru: . */

const songLibrary = {
	'Руки Вверх': ['Соколиный Прах Жара Июль.mp3', 
	'Безналога Точка Ру.mp3'],
	'Жанна Агузарова': ['Павлику Трэк Не Имеет Значения.mp3'],
	'Любэ': ['Комбат, 18 мне уже.mp3', 
	'Потому что есть заначка у тебя.mp3']
};

console.log(Object.keys(songLibrary));

for (const value of Object.values(songLibrary)) {
	let sum = 0;
	for (const v of value) {
		sum += 1;
	}
	console.log(sum);
}

/* Šis piemērs ir oriģināli rakstīt Phyton valodā, bet mēs izmantojam mākslīgo intelektu lai to konvertētu uz JavaScript programmēšanas valodu, lai mēs labāk varētu saprast to, kas notiek kodā, un kas mums tiek atgriezts, kā strādā hash funkcija. */

/* Redzam, ka arī šo uzdevumu esam atrisinājuši, jo konsolē saņemam katra izpildītāja nosaukumu un cik dziesmas ir konkrētajam izpildītājam. Mēs to varam noteikt, jo izmantojam has funkciju, kas izvelk visus unikālos atslēgu nosaukumus, un izskaitļo atslēgas vērtību, aks šajā gadījumā ir dziesmu daudzums konkrētajam izpildītājam. */

/* Elementa pievienošanas darbība hash tabulai un elementa iegūšana pēc atslēgas darbojas tā, ka to izpildes laiks nav atkarīgs no jaucēj tabulas lieluma.. */


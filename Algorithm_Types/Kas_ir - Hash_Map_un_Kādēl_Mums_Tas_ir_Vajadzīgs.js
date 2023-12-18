'use strict';

/* Šajā lekcijā mēs parunāsim par vienu visbiežāk izmantojamām datu struktūrām: protams pēc datu masīviem. Par : Hash tabulam. */

/* Tās ir HashMap jeb vienkārši map. Parastajos datu masīvos mēs vēršamies pie elementiem izmantojot elementa indeksus. Masīvs tā ir iespēja glabāt saistību starp indeksu un vērtību. Zinot datu masīva indeksu, var ātri atrast tā vērtību. */

/* Citreiz mēs indeksa vietā gribam likt nevis skaitli, bet String - rindas tipa datus. Tādā gadījumā datu masīva izmantošana mums vairs neder. Piemēram, ja mēs gribēsi glabāt šādus datus: studentu skaits katrā no firmas piedāvātajiem kursiem. Lai mēs varētu viegli pievienot datus, ievietot jauna kursa nosaukumu ar studentiem mūsu datu tabulā: mums ir jāizmanto: hashMap tabula. JavaScript valodā hashMap tiek saukts par Map vai Object. HashMap ir līdzīgs parastam datu masīvam, tikai galvenā tā atšķirība ir tā, ka indeksu vietā mēs varam glabāt rindas tipa datus, mēs tajā varam glabāt pat veselus objektus. Tādā gadījumā, tas vairs netiek saukts par indeksu, bet par: Atslēgu. ATslēga: Atslēgas vērtība. Tā kā mēs mācījāmies kursā par JavaScript kādi ir objekti, par objekta struktūru. Hash Tabulas ir tieši tas pats. */

/* Bet ir viena kopīga īpašība Hash tabulām ar datu masīviem. Tās abas glabā sakarību starp indeksu un tā vērtību. Kaut hash tabulas pēc struktūras ir nedaudz savādākas tās arī glabā sakarību starp atslēgu un tās vērtību. */

/* Ja mēs šo uzdevumu ar kursu sarakstu un studentiem gribētu realizēt ar datu masīva palīdzību, mums nāktos izveidot divus datu masīvus. Kur vienā būtu kursu nosaukumi, bet otrā studējušo studentu skaits. Tas nebūtu ērti, jo ja informācijas būtu daudz, tad katru reizi meklēt kurā kursā cik ir studenti būtu ilgi un neērti. */

/* Tādēļ mēs varam izmantot hash tabulas, kas šinī gadījumā ir ļoti ērti. Lai mums būtu vieglāk saprast: Mēs izmantojam objektus. */

/* Kā hash tabulas mums ļauj glabāt datus? Has tabulas pamatā ir tieši tā pati struktūra, kas datu masīvam. */

/* Ņemot vērā mūsu uzdevumu, kad mums ir kursu nosaukumi un studējošo studentu skaits katrā no tiem, mums ir pārliecinoši jāzin, kurā indeksā kāda atslēgas vērtība glabājās. */

/* Lai to realizētu ar hash maps palīdzību mums ir tāda lieta kā: hash maps funkcija, bet par to mēs sīkāk runāsim nākošajā lekcijā. */

/* Mums pagaidām nav īsti skaidrs kā izskatās un kā darbojās hash tabulas. Lai vieglāk to saprastu domājam par Objektiem JavaScript programmēšanas valodā. Tālāk lekcijās mēs izskatīsim sīkāk, kas un kā darbojās. */

/* Tagad izskatīsim to, ko tieši mēs gribam panākt izmantojot hash tabulas funkciju. Izmantojot Objektus. Hash funkcija nedrīgst sajaukt datus, tai ir jābūt precīzai, skaidri jānorāda kurai atslēgai atbilst kura vērtība, kurā indeksā tiek glabāti konkrētie dati, katru reizi izvadot vienai atslēgai vienu vērtību. Dažādām atslēgai, hash funkcijai jāatgriež dažādi indeksi. */

/* izskatīsim hash funkcijas pielietošanu vēl ar vienu piemēru: Mums ir dažādi telefona numuri, un katrs no tā satur konta bilanci rubļos. Ja gribam izmantot šāda uzdevuma atrisināšanai datu masīvu, tad mums ir vai nu jāizveido divi datu masīvi, jeb viens ļoti garš datu masīvs, kas satur telefona numurus. Bet šādi mēs patērētu daudz operatīvās sistēmas atmiņas. */

/* Lai šo uzdevumu atrisinātu, mēs varam izmantot hash tabulas - objektus, kur katra atslēga ir telefona numurs, un atslēgas vērtība konta bilance. */

/* Ja datu masīvā tiek stingri ievērota elementu kārtība, secība, tad hash tabulās tam vairs nav tik lielas nozīmes. izmantojot hash maps mēs netērēsim papildus atmiņu. */

/* Mums vajadzēs nedaudz hash funkcijas maģiju, lai atrastu vajadzīgos indeksus, par pamatu ņemot atslēgu. Mūsu uzdevuma piemērā: mums jābalstās uz telefona numuru, kas ir mūsu objekta - hash maps funkcijas atslēga. */

/* Hash map funkcija mums ļauj bez problēmām pievienot jeb dzēst elementus. Zinot atslēgas nosaukumu, dzēst tās vērtību, jeb arī dzēst gan atslēgu, gan tās vērtību. */

/* Atceramies, ka izmantojot datu masīvu, mums, lai dzēstu kādu elementu vajadzēja nobīdīt visu datu masīvu par 1 vienību pa labi. Bet izmantojot hash map funkciju mēs varam dzēst jeb pievienot datus, nekur neko nebīdot, nemainot. */

/* Šādas datu struktūras, kad mums pie datu dzēšanas jeb pievienošanas atlikušās vērtības nevajag nekur pārvietot vēl sauc par: dinamiskām datu struktūrām. */

/* Tālāk nākošajā lekcijā mēs izskatīsim to, kā hash map funkcija ir uzbūvēta, kāda tā ir no iekšienes, un pateicoties kam tieši tā ir hash funkcija. */

/* Jaunas definīcijas: . */

/* Hash tabula (HashMap) ir datu struktūra, kas ļauj saglabāt atbilstību starp “atslēgu” un “vērtību”. Šīs struktūras dažādās valodās tiek sauktas atšķirīgi: HashMap (Java), vārdnīca (Python/C#), Assoc Array (PHP), Map/Object (JS).. */

/* Hash funkcija ir funkcija darbam ar hash tabulu. Šī funkcija, pamatojoties uz atslēgas virkni, var izvadīt (aprēķināt) indeksu masīvā, kurā jāsaglabā atbilstošā vērtība. Jaucēja funkciju nevajadzētu sajaukt (ir obligāti jāatgriež dažādi indeksi no vērtību masīva dažādām atslēgām), un tai jābūt stabilai (vienmēr atgriež vienu un to pašu indeksu vienai atslēgai). */

/* Dinamiskās datu struktūras ir datu struktūras, kurām pēc vajadzības tiek piešķirta un atbrīvota atmiņa. To pastāvēšanas laikā atmiņā tie var mainīt ne tikai to veidojošo elementu skaitu, bet arī to savienojumu raksturu, kā arī ļaut pievienot un dzēst elementus bez pārbīdēm. */

/* Svarīgākā informācija: */

/* Programmā Python jaucēja tabulu attēlo vārdnīcas datu struktūra. Jaucēja tabulā taustiņiem nav jāseko viens otram, atšķirībā no masīva var dzēst un ievietot jaunus elementus, nepārvietojot esošos (dinamiskā struktūra). Kā atslēgu varat izmantot ne tikai ciparus, bet arī virknes un pat objektus. Vērtību glabāšanai tiek izmantots masīvs. */
'use strict';

/* Šinī papildus kursā mēs izskatīsim: kas ir algoritmi un datu struktūras. Mācīsimies tieši tos algoritmus un datu struktūras, kas ir jāzin web izstrādātājam, jo tā ir obligāta prasība. */

/* Kas tad ir algoritmi un datu struktūras? Algoritmi ir: noteikta darbību kārtība, secība, kurā tiek izpildītas kādas darbības, lai atrisinātu konkrētu uzdevumu, problēmu. Datu struktūras: tas ir veids kā nodot informāciju datora programmas atmiņā. */

/* Gandrīz visi uzdevumi ir atrisināmi tikai pateicoties algoritmu izmantošanai. Ja mēs tos nezinam, tad mēs nevaram atrisināt praktiski nevienu uzdevumu. Tādēļ redzam to, kādēļ mums ir jāzin algoritmi. */

/* Bet kāpēc mums ir jāzin datu struktūras? Tādēļ, ka: dažu algoritmu pamatā ir noteiktas prasības kā tieši tiek glabāti dati. */

/* Mēs secināsim to, ka atkarībā kā glabājās mūsu dati mēs varam kaut ko iegūt, bet tai pašā laikā arī kaut ko zaudēt. Mēs sapratīsim kad un kādus algoritmus un datu struktūras mums ir jāizmanto, kuru lietot konkrētā gadījumā. */

/* Vienkāršākā datu struktūra ir: masīvi. Vienkāršākais uzdevums, kur varam pielietot algoritmu ir: ja mums datu masīvā jāatrod kāds skaitlis. */

/* Kas vēl ir jāzin programmētājam, lai atrisinātu jebkuru uzdevumu? Šinī kursā mēs to uzzināsim. Kā arī uzzināsim kādēļ nepietiek ar to, ka zinam kādu programmēšanas valodu lai rakstītu pilnvērtīgu kodu. Kādos konkrētos gadījumos ir jāsaprot algoritmu uzbūve un datu struktūra lai varētu daudz efektīvāk atrisināt kādu uzdevumu. */

/* Kas ir efektivitāte? Kas jādara, lai kods būtu efektīvāks, lai tas izpildītos daudz ātrāk un lai pēc iespējas mazāk tērētu atmiņu. Kādas īpašības ir algoritmiem, un kā tās savā starpā var salīdzināt? Kā izvēlēties piemērotāko algoritmu, ja viena uzdevuma atrisināšanai der vairāki algoritmi? Kādas ir standarta pieejas, lai atrisinātu kādu uzdevumu, pat, ja nezinām konkrēto algoritmu? Kādēļ nepietiek ar to, ka zinām standarta algoritmus un datu struktūras un kādēļ ir jāzin kā tie ir uzbūvēti no iekšienes? Kādēļ daudzas lielas kompānijas darba intervijās pārbauda prasmi atrisināt uzdevumus izmantojot algoritmus? . */

/* Šis kurs ir paredzēts lai ne tikai iemācītos algoritmus un datu struktūras, bet lai iemācītos domāt algoritmiski un iemācītos izveidot jaunus algoritmus, balstoties uz jau eksistējošiem algoritmiem, lai atrisinātu konkrētus uzdevumus. Mēs fokusēsimies uz praktisku darbību un izskatīsim daudzus koda piemērus. Tā pat būs arī mājas darbi, kur jāatrisina kādas problēmas izmantojot algoritmus. */

/* Programmēšanas valoda, kurā tiks rādīti algoritmu un datu struktūru piemēri būs; Java. Bet programmēšanas valoda Java ir ļoti līdzīga JavaScript, un programmētāji, kas zin kādu citu valodu, viegli saprot to, kas rakstīts Java programmēšanas valodā. Turklāt lekciju pielikumos mēs atradīsim kodu piemērus mūsu JavaScript programmēšanas valodā. */

/* Mēs neizmantosim bibliotēkas ar jau gataviem koda risinājumiem, speciāli, lai maksimāli iemācītos paši rakstīt kodu no sākuma līdz beigām.Mēs kursā neliksim akcentu uz kādu konkrētu valodu jeb bibliotēku, tādēļ arī neizmantosim jau gatavus risinājumus. */

/* Kā arī mēs gribam iegūt skaidrību par algoritmu dabu, un izskatīt tos no iekšienes, saprast kā tie darbojās no iekšienes. */

/* Katra lekcija izskata atsevišķu algoritmu vai datu struktūru. Kā arī satur informāciju kādus tieši uzdevumus var atrisināt ar konkrētā algoritma palīdzību. Vizuāli un intuitīvi tiks paskaidrots kā strādā kāds algoritms jeb datu struktūra. Saturēs detalizētu koda paskaidrojumu un smalkus realizācijas momentus, un protams vērtējumu cik efektīvi strādā konkrēts algoritms. Cik ilgā laikā tas izpildās un cik atmiņas tas patērē. Pēc katras lekcijas tiks iedoti praktiskie uzdevumi, lai nostiprinātu iegūtās zināšanas. */

/* Sākot no ļoti zināmām datu struktūrām kā: masīvi un hashmaps. Tās ir vārdnīcas jeb asociatīvi datu masīvi, mēs turpināsim mācīties bieži sastopamas lietas tādas kā saistītais saraksts, stack un beigsim ar mācoties par dažādiem kokiem un grāfiem. */

/* Mēs runāsim par parastākajiem datu masīvu algoritmiem, par optimālākajiem šķirošanas algoritmiem, kolīzijas hash funkcijas atļauju, par ceļu meklēšanu un tipoloģisku grāfu kārtību. Mēs izskatīsim pieeju lai izveidotu algoritmus, piemēram: skopos algoritmus, dinamiskās programmēšanas algoritmus, algoritmus ar pieeju: 'sadali un valdi'. Kā arī metodi: rupjais spēks. */

/* Pirmā datu struktūra ar kuru mēs sāksim strādāt ir: datu masīvs. Mēs ar to sāksim iepazīties izmantojot parastākos algoritmus. Pie tā ķersimies klāt jau nākošajā lekcijā. */
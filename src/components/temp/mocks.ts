import { type Store } from "../../types/api"

export const mockSelectedStores: Set<number> = new Set([13, 199, 1, 55]);

export const mockStoreList: Array<Store> = 
[
  {
    "address": "Ulica Dr. Franje Tuđmana 30 10450 Jastrebarsko ",
    "chain": "LIDL",
    "id": 0
  },
  {
    "address": "Zeleno polje 8 A 31000 Osijek ",
    "chain": "LIDL",
    "id": 1
  },
  {
    "address": "Vinkovačka ulica 2A 32270 Županja ",
    "chain": "LIDL",
    "id": 2
  },
  {
    "address": "Gospodarska 54 42000 Varaždin ",
    "chain": "LIDL",
    "id": 3
  },
  {
    "address": "Bizovačka 1 31550 Valpovo ",
    "chain": "LIDL",
    "id": 4
  },
  {
    "address": "Duga ulica 111 32100 Vinkovci ",
    "chain": "LIDL",
    "id": 5
  },
  {
    "address": "Budačka ulica 22 53000 Gospić ",
    "chain": "LIDL",
    "id": 6
  },
  {
    "address": "Zagrebačka 49 f 44000 Sisak ",
    "chain": "LIDL",
    "id": 7
  },
  {
    "address": "Sisačka 1a 44250 Petrinja ",
    "chain": "LIDL",
    "id": 8
  },
  {
    "address": "Ulica Splitska 57 c 20350 Metković ",
    "chain": "LIDL",
    "id": 9
  },
  {
    "address": "Križevačka ulica 21 48000 Koprivnica ",
    "chain": "LIDL",
    "id": 10
  },
  {
    "address": "Zelenice 41 52220 Labin ",
    "chain": "LIDL",
    "id": 11
  },
  {
    "address": "Fra Pavla Vučkovića 17 21230 Sinj ",
    "chain": "LIDL",
    "id": 12
  },
  {
    "address": "Kralja P. Krešimira IV 4 b 44320 Kutina ",
    "chain": "LIDL",
    "id": 13
  },
  {
    "address": "Hektorovićeva 38 C 21210 Solin ",
    "chain": "LIDL",
    "id": 14
  },
  {
    "address": "Ulica kralja Petra Svačića 11 35400 Nova Gradiška ",
    "chain": "LIDL",
    "id": 15
  },
  {
    "address": "Josipa J. Strossmayera 89 31500 Našice ",
    "chain": "LIDL",
    "id": 16
  },
  {
    "address": "Put Lore 4 21000 Split ",
    "chain": "LIDL",
    "id": 17
  },
  {
    "address": "Crna rika 7 20340 Ploče ",
    "chain": "LIDL",
    "id": 18
  },
  {
    "address": "Ulica grada Vukovara 11 48350 Đurđevac ",
    "chain": "LIDL",
    "id": 19
  },
  {
    "address": "Glavina Donja 346 21260 Imotski ",
    "chain": "LIDL",
    "id": 20
  },
  {
    "address": "Oreškovićeva 3C 10000 Zagreb ",
    "chain": "LIDL",
    "id": 21
  },
  {
    "address": "4. Gardijske brigade 42 22300 Knin ",
    "chain": "LIDL",
    "id": 22
  },
  {
    "address": "Ulica kralja Tomislava 48 31300 Beli Manastir ",
    "chain": "LIDL",
    "id": 23
  },
  {
    "address": "Vukovarska ulica 32 31540 Donji Miholjac ",
    "chain": "LIDL",
    "id": 24
  },
  {
    "address": "Benka Benkovića 17 23000 Zadar ",
    "chain": "LIDL",
    "id": 25
  },
  {
    "address": "Marmontova aleja 6 47000 Karlovac ",
    "chain": "LIDL",
    "id": 26
  },
  {
    "address": "Ulica Ivana Gorana Kovačića 18 42240 Ivanec ",
    "chain": "LIDL",
    "id": 27
  },
  {
    "address": "Tomislava Macana 7 20000 Dubrovnik ",
    "chain": "LIDL",
    "id": 28
  },
  {
    "address": "Labinska ulica 2 A 52100 Pula ",
    "chain": "LIDL",
    "id": 29
  },
  {
    "address": "Ulica kralja Zvonimira 14 33520 Slatina ",
    "chain": "LIDL",
    "id": 30
  },
  {
    "address": "Trg Križnog Puta 5 43500 Daruvar ",
    "chain": "LIDL",
    "id": 31
  },
  {
    "address": "Zagrebačka ulica 10 10340 Vrbovec ",
    "chain": "LIDL",
    "id": 32
  },
  {
    "address": "Stjepana Radića 68 33000 Virovitica ",
    "chain": "LIDL",
    "id": 33
  },
  {
    "address": "Cesta dr. Franje Tuđmana 346 21212 Kaštela ",
    "chain": "LIDL",
    "id": 34
  },
  {
    "address": "Poljička cesta 37 21000 Split ",
    "chain": "LIDL",
    "id": 35
  },
  {
    "address": "Benkovačka cesta 2 23000 Zadar ",
    "chain": "LIDL",
    "id": 36
  },
  {
    "address": "Lomošćanska cesta 24 47300 Ogulin ",
    "chain": "LIDL",
    "id": 37
  },
  {
    "address": "Velimira Škorpika 25 10000 Zagreb ",
    "chain": "LIDL",
    "id": 38
  },
  {
    "address": "Braće Božić 4 A 52210 Rovinj ",
    "chain": "LIDL",
    "id": 39
  },
  {
    "address": "Industrijska ulica 16A 34000 Požega ",
    "chain": "LIDL",
    "id": 40
  },
  {
    "address": "Put Gaćeleza 3 a 22211 Vodice ",
    "chain": "LIDL",
    "id": 41
  },
  {
    "address": "Kralja Zvonimira 4 53220 Otočac ",
    "chain": "LIDL",
    "id": 42
  },
  {
    "address": "Oranički odvojak 1 10000 Zagreb ",
    "chain": "LIDL",
    "id": 43
  },
  {
    "address": "Ulica Nikole Tesle 2 48260 Križevci ",
    "chain": "LIDL",
    "id": 44
  },
  {
    "address": "Dr. Ante Starčevića 27 47000 Karlovac ",
    "chain": "LIDL",
    "id": 45
  },
  {
    "address": "Osječka 67 A 51000 Rijeka ",
    "chain": "LIDL",
    "id": 46
  },
  {
    "address": "PLANO-AERODROM 1 pr 21220 Trogir ",
    "chain": "LIDL",
    "id": 47
  },
  {
    "address": "Ulica Anđelke i Belizara Božikovića 2 10370 Dugo Selo ",
    "chain": "LIDL",
    "id": 48
  },
  {
    "address": "Priljevo 30 A 32000 Vukovar ",
    "chain": "LIDL",
    "id": 49
  },
  {
    "address": "Jadranska magistrala 1a 23210 Biograd na Moru ",
    "chain": "LIDL",
    "id": 50
  },
  {
    "address": "43. istarske divizije 11A 52000 Pazin ",
    "chain": "LIDL",
    "id": 51
  },
  {
    "address": "Velimira Škorpika 10 22000 Šibenik ",
    "chain": "LIDL",
    "id": 52
  },
  {
    "address": "Zagrebačka ulica 51 44330 Novska ",
    "chain": "LIDL",
    "id": 53
  },
  {
    "address": "Ulica grada Wirgesa 20 10430 Samobor ",
    "chain": "LIDL",
    "id": 54
  },
  {
    "address": "Ulica 144.brigade Hrvatske vojske 1 10360 Sesvete ",
    "chain": "LIDL",
    "id": 55
  },
  {
    "address": "Ulica Europske zajednice 2 21300 Makarska ",
    "chain": "LIDL",
    "id": 56
  },
  {
    "address": "Majdekova ulica 47 10310 Ivanić-Grad ",
    "chain": "LIDL",
    "id": 57
  },
  {
    "address": "Kukuljanovo 348 51227 Kukuljanovo ",
    "chain": "LIDL",
    "id": 58
  },
  {
    "address": "Nova cesta 7 10000 Zagreb ",
    "chain": "LIDL",
    "id": 59
  },
  {
    "address": "Dubrava 33 10000 Zagreb ",
    "chain": "LIDL",
    "id": 60
  },
  {
    "address": "Ive Robića 4 10000 Zagreb ",
    "chain": "LIDL",
    "id": 61
  },
  {
    "address": "Žedno - Drage 15 21400 Supetar ",
    "chain": "LIDL",
    "id": 62
  },
  {
    "address": "Ulica Proštinske bune 20 52100 Pula ",
    "chain": "LIDL",
    "id": 63
  },
  {
    "address": "Vojvodići 1 10431 Sveta Nedelja ",
    "chain": "LIDL",
    "id": 64
  },
  {
    "address": "Trg hrvatskog proljeća 9 35000 Slavonski Brod ",
    "chain": "LIDL",
    "id": 65
  },
  {
    "address": "Športska 7 40000 Čakovec ",
    "chain": "LIDL",
    "id": 66
  },
  {
    "address": "Omladinska 1   A 51550 Mali Lošinj ",
    "chain": "LIDL",
    "id": 67
  },
  {
    "address": "Kvarnerska cesta 53 51211 Matulji ",
    "chain": "LIDL",
    "id": 68
  },
  {
    "address": "Bana Josipa Jelačića 19 22000 Šibenik ",
    "chain": "LIDL",
    "id": 69
  },
  {
    "address": "Mel 1 A 51250 Novi Vinodolski ",
    "chain": "LIDL",
    "id": 70
  },
  {
    "address": "Risnjačka ulica 1 10000 Zagreb ",
    "chain": "LIDL",
    "id": 71
  },
  {
    "address": "Zadarska ulica 79 10000 Zagreb ",
    "chain": "LIDL",
    "id": 72
  },
  {
    "address": "Bana Jelačića 41 31400 Đakovo ",
    "chain": "LIDL",
    "id": 73
  },
  {
    "address": "Slavenskog 1 10000 Zagreb ",
    "chain": "LIDL",
    "id": 74
  },
  {
    "address": "Ulica J. J. Strossmayera 350 31000 Osijek ",
    "chain": "LIDL",
    "id": 75
  },
  {
    "address": "Lujzinska cesta 40 51300 Delnice ",
    "chain": "LIDL",
    "id": 76
  },
  {
    "address": "Nikole Tesle 16 A 21000 Split ",
    "chain": "LIDL",
    "id": 77
  },
  {
    "address": "Radnička 35 51000 Rijeka ",
    "chain": "LIDL",
    "id": 78
  },
  {
    "address": "Lastovska ulica 42 10000 Zagreb ",
    "chain": "LIDL",
    "id": 79
  },
  {
    "address": "Ulica Frana Galovića 7 a 49000 Krapina ",
    "chain": "LIDL",
    "id": 80
  },
  {
    "address": "Petra Jurčića 2a 51000 Rijeka ",
    "chain": "LIDL",
    "id": 81
  },
  {
    "address": "Ulica kardinala Alojzija Stepinca 64 10290 Zaprešić ",
    "chain": "LIDL",
    "id": 82
  },
  {
    "address": "Furićevo 23 51216 Viškovo ",
    "chain": "LIDL",
    "id": 83
  },
  {
    "address": "Munida 3 c 52203 Medulin ",
    "chain": "LIDL",
    "id": 84
  },
  {
    "address": "Aleja Javora 3 10000 Zagreb ",
    "chain": "LIDL",
    "id": 85
  },
  {
    "address": "Vršanska 18 A 51500 Krk ",
    "chain": "LIDL",
    "id": 86
  },
  {
    "address": "Kralja Tomislava 109 c 51260 Crikvenica ",
    "chain": "LIDL",
    "id": 87
  },
  {
    "address": "Svetog Leopolda Bogdana Mandića 33 A 31000 Osijek ",
    "chain": "LIDL",
    "id": 88
  },
  {
    "address": "Slavonska cesta 12 43000 Bjelovar ",
    "chain": "LIDL",
    "id": 89
  },
  {
    "address": "Donje Svetice 46 10000 Zagreb ",
    "chain": "LIDL",
    "id": 90
  },
  {
    "address": "Ulica Josipa Broza Tita 17 49210 Zabok ",
    "chain": "LIDL",
    "id": 91
  },
  {
    "address": "Ulica Poduzetnika 3 52470 Umag-Umago ",
    "chain": "LIDL",
    "id": 92
  },
  {
    "address": "Ulica kneza Ljudevita Posavskog 55 10410 Velika Gorica ",
    "chain": "LIDL",
    "id": 93
  },
  {
    "address": "Sisačka ulica 39D 10410 Velika Gorica ",
    "chain": "LIDL",
    "id": 94
  },
  {
    "address": "Osječka ulica 280c 35000 Slavonski Brod ",
    "chain": "LIDL",
    "id": 95
  },
  {
    "address": "Stjepana Radića 31 40000 Čakovec ",
    "chain": "LIDL",
    "id": 96
  },
  {
    "address": "Ilica 201 10000 Zagreb ",
    "chain": "LIDL",
    "id": 97
  },
  {
    "address": "Huzjanova ulica 4 10090 Zagreb ",
    "chain": "LIDL",
    "id": 98
  },
  {
    "address": "Kralja Držislava 24 21000 Split ",
    "chain": "LIDL",
    "id": 99
  },
  {
    "address": "Ljubljanska avenija 2 10090 Zagreb ",
    "chain": "LIDL",
    "id": 100
  },
  {
    "address": "Mate Vlašića 48 52440 Poreč ",
    "chain": "LIDL",
    "id": 101
  },
  {
    "address": "Optujska ulica 74 42000 Varaždin ",
    "chain": "LIDL",
    "id": 102
  },
  {
    "address": "Vukovarska ulica 190 21000 Split ",
    "chain": "LIDL",
    "id": 103
  },
  {
    "address": "Kobiljačka cesta 54 10360 Zagreb ",
    "chain": "LIDL",
    "id": 104
  },
  {
    "address": "Radnička cesta 232 10000 Zagreb ",
    "chain": "LIDL",
    "id": 105
  },
  {
    "address": "Put Murvice 18 23000 Zadar ",
    "chain": "LIDL",
    "id": 106
  },
  {
    "address": "Sv. Leopolda Mandića 17 21204 Dugopolje ",
    "chain": "LIDL",
    "id": 107
  },
  {
    "address": "Grana 150 4 42220 Novi Marof ",
    "chain": "LIDL",
    "id": 108
  },
  {
    "address": "Ulica Franje Glada 13 40323 Prelog ",
    "chain": "LIDL",
    "id": 109
  },
  {
    "address": "Ulica Pušća 150 51511 Omišalj ",
    "chain": "LIDL",
    "id": 110
  },
  {
    "address": "Ulica Julija Knifera 10 10020 Zagreb ",
    "chain": "LIDL",
    "id": 111
  },
  {
    "address": "Ulica žrtava fašizma 1 42230 Ludbreg ",
    "chain": "LIDL",
    "id": 112
  },
  {
    "address": "114 Brigade 6 Split",
    "chain": "KAUFLAND",
    "id": 113
  },
  {
    "address": "donji stupnik gospodarska ulica 5 8708 interspar zg emmez stup",
    "chain": "PLODINE",
    "id": 113
  },
  {
    "address": "ANTE STARCEVICA 21 10290 ZAPRESIC",
    "chain": "PLODINE",
    "id": 113
  },
  {
    "address": "karlovac prilaz v. holjevca 12 8713 interspar karlovac",
    "chain": "PLODINE",
    "id": 116
  },
  {
    "address": "koprivnica gospodarska ulica 1 8712 interspar koprivnica",
    "chain": "PLODINE",
    "id": 117
  },
  {
    "address": "kukuljanovo kukuljanovo 362 8729 interspar ri kukuljanovo",
    "chain": "PLODINE",
    "id": 118
  },
  {
    "address": "osijek sv. leopolda b. mandica 7 8704 interspar os centar",
    "chain": "PLODINE",
    "id": 119
  },
  {
    "address": "osijek svilajska 31a 8725 interspar os portanova",
    "chain": "PLODINE",
    "id": 120
  },
  {
    "address": "pula rimske centurijacije 101 8719 interspar pu city mall",
    "chain": "PLODINE",
    "id": 121
  },
  {
    "address": "rijeka janka polica kamova 81a 8721 interspar ri tower",
    "chain": "PLODINE",
    "id": 122
  },
  {
    "address": "rijeka liburnijska ulica 1 8722 interspar ri krnjevo",
    "chain": "PLODINE",
    "id": 123
  },
  {
    "address": "rijeka ulica maria gennaria 18 8720 interspar ri rujevica",
    "chain": "PLODINE",
    "id": 124
  },
  {
    "address": "samobor ul. grada wirgesa 2 d 8726 interspar samobor",
    "chain": "PLODINE",
    "id": 125
  },
  {
    "address": "sisak ivana fistrovica 25 8703 interspar sisak",
    "chain": "PLODINE",
    "id": 126
  },
  {
    "address": "slavonski brod osjecka 284 8706 interspar sb supernova",
    "chain": "PLODINE",
    "id": 127
  },
  {
    "address": "split josipa jovica 93 8718 interspar st mos",
    "chain": "PLODINE",
    "id": 128
  },
  {
    "address": "split vukovarska 207 8715 interspar cco split",
    "chain": "PLODINE",
    "id": 129
  },
  {
    "address": "velika gorica rakarska ulica 13 8728 interspar velika gorica",
    "chain": "PLODINE",
    "id": 130
  },
  {
    "address": "zadar ante starcevica 5a 8723 interspar zd starceviceva",
    "chain": "PLODINE",
    "id": 131
  },
  {
    "address": "zadar bleiburskih zrtava 18 8701 interspar zadar",
    "chain": "PLODINE",
    "id": 132
  },
  {
    "address": "zagreb avenija v. holjevca 62 8717 interspar zg buzin",
    "chain": "PLODINE",
    "id": 133
  },
  {
    "address": "zagreb jankomir 33. 8702 interspar zg cco west",
    "chain": "PLODINE",
    "id": 134
  },
  {
    "address": "Andrije Hebranga 2 Zadar",
    "chain": "KAUFLAND",
    "id": 116
  },
  {
    "address": "zagreb kolakova 14 dubrava 8711 interspar zg garden dub",
    "chain": "PLODINE",
    "id": 136
  },
  {
    "address": "zagreb skorpikova 34 2 8707 interspar zg kingcross",
    "chain": "PLODINE",
    "id": 137
  },
  {
    "address": "zagreb slavonska avenija 11d 8716 interspar zg cco east",
    "chain": "PLODINE",
    "id": 138
  },
  {
    "address": "zagreb ulica kneza branimira 181 8705 interspar zg retkovec",
    "chain": "PLODINE",
    "id": 139
  },
  {
    "address": "zagreb ulica vice vukova 6 8714 interspar zg arena centar",
    "chain": "PLODINE",
    "id": 140
  },
  {
    "address": "bibinje jadranska cesta 160 87024 spar bibinje sukosan",
    "chain": "PLODINE",
    "id": 141
  },
  {
    "address": "bjelovar andrije hebranga 2a 87092 esp bjelovar",
    "chain": "PLODINE",
    "id": 142
  },
  {
    "address": "buje gospodarska 1a 87031 spar buje",
    "chain": "PLODINE",
    "id": 143
  },
  {
    "address": "KUKULJANOVO 344 51227 KUKULJANOVO",
    "chain": "PLODINE",
    "id": 116
  },
  {
    "address": "cakovec svetojelenska cesta 25 87009 esp cakovec galerija",
    "chain": "PLODINE",
    "id": 145
  },
  {
    "address": "cakovec tomasa goricanca 1 87039 spar cakovec jug",
    "chain": "PLODINE",
    "id": 146
  },
  {
    "address": "cepin osjecka 21 87155 esp cepin",
    "chain": "PLODINE",
    "id": 147
  },
  {
    "address": "Antuna Soljana 43 Zagreb",
    "chain": "KAUFLAND",
    "id": 136
  },
  {
    "address": "dakovo bana jelacica 10a 87095 spar dakovo",
    "chain": "PLODINE",
    "id": 148
  },
  {
    "address": "daruvar gajeva 47 87101 spar daruvar",
    "chain": "PLODINE",
    "id": 150
  },
  {
    "address": "donja stubica toplicka cesta 87 a 87134 spar donja stubica",
    "chain": "PLODINE",
    "id": 151
  },
  {
    "address": "dugopolje ulica matice hrvatske 19 87050 esp dugopolje",
    "chain": "PLODINE",
    "id": 152
  },
  {
    "address": "MARINICI 182A 51216 VISKOVO",
    "chain": "PLODINE",
    "id": 145
  },
  {
    "address": "dugo selo zagrebacka ulica 154 87142 esp dugo selo",
    "chain": "PLODINE",
    "id": 154
  },
  {
    "address": "Bistricka 6 Zagreb",
    "chain": "KAUFLAND",
    "id": 149
  },
  {
    "address": "gospic budacka 100 87156 esp gospic",
    "chain": "PLODINE",
    "id": 155
  },
  {
    "address": "grubisno polje n. subica zrinskog 38 87098 spar grubisno polje",
    "chain": "PLODINE",
    "id": 157
  },
  {
    "address": "ivanec ivana gorana kovacica 51 87124 esp ivanec",
    "chain": "PLODINE",
    "id": 158
  },
  {
    "address": "ivanic grad stjepana majdeka 53 87042 esp ivanic grad",
    "chain": "PLODINE",
    "id": 159
  },
  {
    "address": "MIJE HALEUSA 1 10000 ZAGREB",
    "chain": "PLODINE",
    "id": 154
  },
  {
    "address": "jastrebarsko tresnjevka 1 1 87036 esp jastrebarsko",
    "chain": "PLODINE",
    "id": 161
  },
  {
    "address": "Jablanska ulica br 80 Zagreb",
    "chain": "KAUFLAND",
    "id": 157
  },
  {
    "address": "karlovac kralja p. kresimira iv 10 87093 esp karlovac kresimira",
    "chain": "PLODINE",
    "id": 162
  },
  {
    "address": "kastav sporova jama 1a 87021 spar rijeka kastav",
    "chain": "PLODINE",
    "id": 164
  },
  {
    "address": "kastel sucurac dr. franje tudmana 344 87049 esp kastel sucurac",
    "chain": "PLODINE",
    "id": 165
  },
  {
    "address": "knin getaldiceva bb 87109 spar knin",
    "chain": "PLODINE",
    "id": 166
  },
  {
    "address": "PUT PAZDIGRADA 5 21000 SPLIT",
    "chain": "PLODINE",
    "id": 161
  },
  {
    "address": "koprivnica kolodvorska 31a 87091 esp kc kolodvorska",
    "chain": "PLODINE",
    "id": 167
  },
  {
    "address": "Jaruscica 6 Zagreb Blato",
    "chain": "KAUFLAND",
    "id": 164
  },
  {
    "address": "krapinske toplice vrtnjakovec 115a 87037 spar krapinske toplice",
    "chain": "PLODINE",
    "id": 169
  },
  {
    "address": "krizevci tadije smiciklasa 5a 87032 esp krizevci",
    "chain": "PLODINE",
    "id": 171
  },
  {
    "address": "labin pulska ulica 2c 87027 esp labin",
    "chain": "PLODINE",
    "id": 172
  },
  {
    "address": "STEFANOVECKI ZAVOJ 10 10000 ZAGREB",
    "chain": "PLODINE",
    "id": 168
  },
  {
    "address": "ludbreg ul. rudolfa fizira 3 87028 spar ludbreg",
    "chain": "PLODINE",
    "id": 173
  },
  {
    "address": "marija bistrica stubicka cesta 17 d 87043 spar marija bistrica",
    "chain": "PLODINE",
    "id": 175
  },
  {
    "address": "Josipa Reihl-Kira 40 Osijek",
    "chain": "KAUFLAND",
    "id": 171
  },
  {
    "address": "nasice vinogradska 4 87103 spar nasice",
    "chain": "PLODINE",
    "id": 177
  },
  {
    "address": "nin put bagata 11 87133 esp nin",
    "chain": "PLODINE",
    "id": 178
  },
  {
    "address": "novi marof grana 150 2 87040 spar novi marof",
    "chain": "PLODINE",
    "id": 179
  },
  {
    "address": "STOJA 14A 52100 PULA",
    "chain": "PLODINE",
    "id": 175
  },
  {
    "address": "opatija nova cesta 68 87106 esp opatija",
    "chain": "PLODINE",
    "id": 181
  },
  {
    "address": "orahovica kralja zvonimira 167 87097 spar orahovica",
    "chain": "PLODINE",
    "id": 182
  },
  {
    "address": "Julija Knifera 1 Zagreb",
    "chain": "KAUFLAND",
    "id": 177
  },
  {
    "address": "osijek kneza trpimira 14 87089 esp os trpimirova",
    "chain": "PLODINE",
    "id": 184
  },
  {
    "address": "osijek strossmayerova 167 87096 esp osijek strossmayerova",
    "chain": "PLODINE",
    "id": 185
  },
  {
    "address": "osijek svilajska ulica 35b 87171 esp os svilajska",
    "chain": "PLODINE",
    "id": 186
  },
  {
    "address": "ULICA KARLA METIKOSA 4 10020 ZAGREB NOVI ZAGREB",
    "chain": "PLODINE",
    "id": 181
  },
  {
    "address": "ozalj karlovacka cesta 74 87140 spar ozalj karlovacka",
    "chain": "PLODINE",
    "id": 187
  },
  {
    "address": "pakrac andrije hebranga 18 87099 spar pakrac",
    "chain": "PLODINE",
    "id": 189
  },
  {
    "address": "Jurja Zakna 3 Pula",
    "chain": "KAUFLAND",
    "id": 184
  },
  {
    "address": "pakrac bolnicka ulica 80k 87169 esp pakrac",
    "chain": "PLODINE",
    "id": 191
  },
  {
    "address": "pleternica trg hrv. branitelja 9 87102 spar pleternica",
    "chain": "PLODINE",
    "id": 192
  },
  {
    "address": "popovaca kutinska ulica 16 87127 spar popovaca",
    "chain": "PLODINE",
    "id": 193
  },
  {
    "address": "ULICA MARTINA KONTUSA 5 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 189
  },
  {
    "address": "porec obala rade koncara 1a 87107 spar porec",
    "chain": "PLODINE",
    "id": 194
  },
  {
    "address": "pozega osjecka 10 87033 esp pozega",
    "chain": "PLODINE",
    "id": 196
  },
  {
    "address": "Kneza Branimira 119 Zagreb",
    "chain": "KAUFLAND",
    "id": 191
  },
  {
    "address": "pregrada ulica janka leskovara 46 87135 spar pregrada",
    "chain": "PLODINE",
    "id": 197
  },
  {
    "address": "prelog cakovecka 113 87138 esp prelog",
    "chain": "PLODINE",
    "id": 199
  },
  {
    "address": "ZAGREBACKA 2 23000 ZADAR",
    "chain": "PLODINE",
    "id": 196
  },
  {
    "address": "pula santoriova 13 87105 esp pula santoriova",
    "chain": "PLODINE",
    "id": 201
  },
  {
    "address": "rijeka franje candeka 8a 87011 spar rijeka candekova",
    "chain": "PLODINE",
    "id": 202
  },
  {
    "address": "rijeka martinkovac 127 87030 esp rijeka martinkovac",
    "chain": "PLODINE",
    "id": 203
  },
  {
    "address": "Kneza Lj Posavskog 32 Kutina",
    "chain": "KAUFLAND",
    "id": 199
  },
  {
    "address": "rijeka osjecka ulica 29 87104 esp rijeka osjecka",
    "chain": "PLODINE",
    "id": 205
  },
  {
    "address": "rijeka riva boduli 1 87026 spar ri riva boduli",
    "chain": "PLODINE",
    "id": 206
  },
  {
    "address": "ZVONIMIROVA 3 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 201
  },
  {
    "address": "selce drazica 7 87022 esp selce",
    "chain": "PLODINE",
    "id": 208
  },
  {
    "address": "senj d.tomljanovica gavrana 2b 87167 esp senj",
    "chain": "PLODINE",
    "id": 209
  },
  {
    "address": "sesvetski kraljevec dugoselska cesta 20 87034 spar sesvetski kraljevec",
    "chain": "PLODINE",
    "id": 210
  },
  {
    "address": "Kneza Trpimira 301 Trogir",
    "chain": "KAUFLAND",
    "id": 205
  },
  {
    "address": "sibenik put vida 6 87003 esp sibenik supernova",
    "chain": "PLODINE",
    "id": 212
  },
  {
    "address": "slavonski brod petra svacica 2 87088 esp sb svaciceva",
    "chain": "PLODINE",
    "id": 213
  },
  {
    "address": "ALOJZIJA STEPINCA 201 32100 VINKOVCI",
    "chain": "PLODINE",
    "id": 208
  },
  {
    "address": "split boskoviceva 24 87126 spar split boskoviceva",
    "chain": "PLODINE",
    "id": 215
  },
  {
    "address": "split licka ulica 1 3 87012 spar split licka",
    "chain": "PLODINE",
    "id": 216
  },
  {
    "address": "ANTE STARCEVICA 47 20260 KORCULA",
    "chain": "PLODINE",
    "id": 215
  },
  {
    "address": "split poljicka 2 1 87014 spar split poljicka",
    "chain": "PLODINE",
    "id": 217
  },
  {
    "address": "Koprivnicka 17 Varazdin",
    "chain": "KAUFLAND",
    "id": 212
  },
  {
    "address": "split spinciceva 2j 87108 spar split spinciceva",
    "chain": "PLODINE",
    "id": 220
  },
  {
    "address": "split subiceva 5 7 87112 spar split subiceva",
    "chain": "PLODINE",
    "id": 221
  },
  {
    "address": "suhopolje kralja tomislava 2 87100 spar suhopolje",
    "chain": "PLODINE",
    "id": 222
  },
  {
    "address": "ANTONA MATAIJE 17 51250 NOVI VINODOLSKI",
    "chain": "PLODINE",
    "id": 220
  },
  {
    "address": "sv. ivan zelina zagrebacka ulica 137 87035 spar sv. ivan zelina",
    "chain": "PLODINE",
    "id": 224
  },
  {
    "address": "umag bujska ul. via buie br. 1 87025 esp umag",
    "chain": "PLODINE",
    "id": 225
  },
  {
    "address": "Lapovacka 15 Vinkovci",
    "chain": "KAUFLAND",
    "id": 220
  },
  {
    "address": "valpovo ivana fuderera hanzike 3 87002 esp valpovo stc",
    "chain": "PLODINE",
    "id": 226
  },
  {
    "address": "ANTUNA MIHANOVICA 82 40323 PRELOG",
    "chain": "PLODINE",
    "id": 224
  },
  {
    "address": "varazdin medimurska ulica 31c 87016 esp vz medimurska",
    "chain": "PLODINE",
    "id": 229
  },
  {
    "address": "varazdin optujska 171 87001 esp varazdin supernova",
    "chain": "PLODINE",
    "id": 230
  },
  {
    "address": "varazdin vinka mederala 2a i 2b 87018 spar vz mederala",
    "chain": "PLODINE",
    "id": 231
  },
  {
    "address": "AUGUSTA SENOE 2B 43500 DARUVAR",
    "chain": "PLODINE",
    "id": 229
  },
  {
    "address": "varazdin zagrebacka ulica 81 87090 esp vz zagrebacka",
    "chain": "PLODINE",
    "id": 232
  },
  {
    "address": "Naselje Slavonija 2 kc br 5 Slavonski Brod",
    "chain": "KAUFLAND",
    "id": 228
  },
  {
    "address": "velika gorica matice hrvatske 22 87076 esp vg matice hrvatske",
    "chain": "PLODINE",
    "id": 235
  },
  {
    "address": "velika gorica trg k. p. kresimira iv bb 87080 spar vg kresimira",
    "chain": "PLODINE",
    "id": 236
  },
  {
    "address": "vinkovci kralja zvonimira 59 87094 esp vinkovci",
    "chain": "PLODINE",
    "id": 237
  },
  {
    "address": "BANA JOSIPA JELACICA 158A 34310 PLETERNICA",
    "chain": "PLODINE",
    "id": 234
  },
  {
    "address": "vinkovci prilaz a. b. simica 1 87045 esp vinkovci a. b. simica",
    "chain": "PLODINE",
    "id": 238
  },
  {
    "address": "vukovar priljevo 36 87044 esp vukovar",
    "chain": "PLODINE",
    "id": 240
  },
  {
    "address": "Njemacka ulica 40 40 Pozega",
    "chain": "KAUFLAND",
    "id": 235
  },
  {
    "address": "zadar polacisce 4 87007 esp zadar city galleria",
    "chain": "PLODINE",
    "id": 241
  },
  {
    "address": "BANA JOSIPA JELACICA 1B 20250 OREBIC",
    "chain": "PLODINE",
    "id": 239
  },
  {
    "address": "zadar ulica akcije maslenica 1 87004 esp zadar supernova",
    "chain": "PLODINE",
    "id": 243
  },
  {
    "address": "zagreb aleja pomoraca 21 87066 spar zg pomoraca",
    "chain": "PLODINE",
    "id": 245
  },
  {
    "address": "zagreb ante topica mimare 57 87038 spar zg ante t. mimare",
    "chain": "PLODINE",
    "id": 246
  },
  {
    "address": "zagreb argentinska 4 87054 spar zg argentinska",
    "chain": "PLODINE",
    "id": 247
  },
  {
    "address": "BANIJA 88 47000 KARLOVAC",
    "chain": "PLODINE",
    "id": 245
  },
  {
    "address": "Novigradska ulica 22 Umag",
    "chain": "KAUFLAND",
    "id": 243
  },
  {
    "address": "zagreb avenija dubrovnik 42 87062 spar zg av. dubrovnik",
    "chain": "PLODINE",
    "id": 249
  },
  {
    "address": "zagreb banjavciceva 13 87075 esp zg banjavciceva",
    "chain": "PLODINE",
    "id": 251
  },
  {
    "address": "zagreb banjavciceva 22a 87023 esp zg branimirova",
    "chain": "PLODINE",
    "id": 252
  },
  {
    "address": "zagreb bijenicka cesta 5 87059 spar zg bijenicka",
    "chain": "PLODINE",
    "id": 253
  },
  {
    "address": "BARTOLA KASICA 7 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 250
  },
  {
    "address": "zagreb borongajska cesta 75 87070 spar zg borongajska",
    "chain": "PLODINE",
    "id": 255
  },
  {
    "address": "Osjecka 39 Rijeka",
    "chain": "KAUFLAND",
    "id": 251
  },
  {
    "address": "zagreb bozidara magovca 47 87051 spar zg magovceva",
    "chain": "PLODINE",
    "id": 256
  },
  {
    "address": "zagreb dankovecka 4 87015 esp zg dankovecka",
    "chain": "PLODINE",
    "id": 258
  },
  {
    "address": "zagreb dobroniceva7 87063 spar zg dobroniceva",
    "chain": "PLODINE",
    "id": 259
  },
  {
    "address": "zagreb ehrlichova 9a 87008 spar zg erlichova",
    "chain": "PLODINE",
    "id": 260
  },
  {
    "address": "BIOGRADSKA 68 23000 ZADAR",
    "chain": "PLODINE",
    "id": 255
  },
  {
    "address": "zagreb gospodska 2 87019 spar zg gospodska",
    "chain": "PLODINE",
    "id": 261
  },
  {
    "address": "Planinska 2F Zagreb",
    "chain": "KAUFLAND",
    "id": 258
  },
  {
    "address": "zagreb gracani 7 87061 spar zg gracani",
    "chain": "PLODINE",
    "id": 263
  },
  {
    "address": "zagreb gruska 18 87086 spar zg gruska",
    "chain": "PLODINE",
    "id": 265
  },
  {
    "address": "BIZOVACKA 10 31550 VALPOVO",
    "chain": "PLODINE",
    "id": 262
  },
  {
    "address": "zagreb h. macanovica 29 87064 spar zg macanovica",
    "chain": "PLODINE",
    "id": 266
  },
  {
    "address": "zagreb horvatovac 58 87055 spar zg horvatovac",
    "chain": "PLODINE",
    "id": 268
  },
  {
    "address": "zagreb ilica 425 87077 spar zg ilica",
    "chain": "PLODINE",
    "id": 269
  },
  {
    "address": "Poljicka cesta 34 Split",
    "chain": "KAUFLAND",
    "id": 265
  },
  {
    "address": "zagreb ivana sibla 11 87005 spar zg siblova",
    "chain": "PLODINE",
    "id": 270
  },
  {
    "address": "BLAZENOG ALOJZIJA STEPINCA 3 23210 BIOGRAD NA MORU",
    "chain": "PLODINE",
    "id": 268
  },
  {
    "address": "zagreb ivane brlic mazuranic 2a 87041 spar zg i.b. mazuranic",
    "chain": "PLODINE",
    "id": 273
  },
  {
    "address": "zagreb jordanovac 7 87053 spar zg jordanovac",
    "chain": "PLODINE",
    "id": 274
  },
  {
    "address": "zagreb jurja zerjavica 2 87082 spar zg zerjaviceva",
    "chain": "PLODINE",
    "id": 275
  },
  {
    "address": "zagreb kneza branimira 163 87072 esp zg branimirova",
    "chain": "PLODINE",
    "id": 276
  },
  {
    "address": "BRAJDE 7 52465 TAR",
    "chain": "PLODINE",
    "id": 273
  },
  {
    "address": "Rusevje 1 Zapresic",
    "chain": "KAUFLAND",
    "id": 272
  },
  {
    "address": "zagreb marticeva 13 87084 spar zg marticeva",
    "chain": "PLODINE",
    "id": 277
  },
  {
    "address": "zagreb mlinovi 79 87060 spar zg mlinovi",
    "chain": "PLODINE",
    "id": 280
  },
  {
    "address": "zagreb nikole jurisica 2a 87172 spar zg jurisiceva",
    "chain": "PLODINE",
    "id": 281
  },
  {
    "address": "BUDACKA ULICA 25 53000 GOSPIC",
    "chain": "PLODINE",
    "id": 279
  },
  {
    "address": "zagreb petrovaradinska 47 87056 spar zg petrovaradinska",
    "chain": "PLODINE",
    "id": 282
  },
  {
    "address": "zagreb petrovaradinska 7c 87078 spar zg petrovaradinska",
    "chain": "PLODINE",
    "id": 284
  },
  {
    "address": "Sajmiste 2 Virovitica",
    "chain": "KAUFLAND",
    "id": 280
  },
  {
    "address": "zagreb picmanova 1a 87052 spar zg picmanova",
    "chain": "PLODINE",
    "id": 285
  },
  {
    "address": "zagreb savska 58 87079 spar zg savska",
    "chain": "PLODINE",
    "id": 287
  },
  {
    "address": "CARLOTTE GRISI 1 52466 NOVIGRAD(CITTANOVA",
    "chain": "PLODINE",
    "id": 284
  },
  {
    "address": "zagreb seferova 6 8 87057 spar zg seferova",
    "chain": "PLODINE",
    "id": 288
  },
  {
    "address": "zagreb svetoklarska ulica 32 87119 esp sveta klara",
    "chain": "PLODINE",
    "id": 290
  },
  {
    "address": "zagreb tina ujevica 17 87029 esp zg ujevica",
    "chain": "PLODINE",
    "id": 291
  },
  {
    "address": "Svilajska ulica 37 Osijek",
    "chain": "KAUFLAND",
    "id": 287
  },
  {
    "address": "zagreb trg ane rukavine 1 87069 spar zg trnsko",
    "chain": "PLODINE",
    "id": 293
  },
  {
    "address": "CESTA DALMATINSKIH BRIGADA 9A 51211 MATULJI",
    "chain": "PLODINE",
    "id": 290
  },
  {
    "address": "zagreb trg zrtava fasizma 6 87020 spar zg trg zrt. fasizma",
    "chain": "PLODINE",
    "id": 295
  },
  {
    "address": "zagreb tuskanac 53 87058 spar zg tuskanac",
    "chain": "PLODINE",
    "id": 296
  },
  {
    "address": "zagreb ulica dubrava 45 87081 spar zg dubrava",
    "chain": "PLODINE",
    "id": 297
  },
  {
    "address": "zagreb ulica grada mainza 16 87017 esp zg grada mainza",
    "chain": "PLODINE",
    "id": 298
  },
  {
    "address": "Trg hrvatskih branitelja 5 Karlovac",
    "chain": "KAUFLAND",
    "id": 293
  },
  {
    "address": "CESVINICA 1B 20230 STON",
    "chain": "PLODINE",
    "id": 295
  },
  {
    "address": "zagreb ulica sr njemacke 3 87073 esp zg sr njemacke",
    "chain": "PLODINE",
    "id": 301
  },
  {
    "address": "zagreb v. kovacica 3a 87065 spar zg kovacica",
    "chain": "PLODINE",
    "id": 302
  },
  {
    "address": "zagreb v. varicaka 12 87067 spar zg varicaka",
    "chain": "PLODINE",
    "id": 303
  },
  {
    "address": "zagreb vincenta iz kastva 10 87083 spar zg vincenta",
    "chain": "PLODINE",
    "id": 304
  },
  {
    "address": "CIKOVICI 9B 51215 KASTAV",
    "chain": "PLODINE",
    "id": 301
  },
  {
    "address": "zagreb vi oranicki odvojak 2 87087 spar zg oranice",
    "chain": "PLODINE",
    "id": 306
  },
  {
    "address": "Ulica grada Wirgesa 2 G Samobor",
    "chain": "KAUFLAND",
    "id": 301
  },
  {
    "address": "zagreb vlaska 44 87006 spar zg vlaska",
    "chain": "PLODINE",
    "id": 308
  },
  {
    "address": "zagreb vojina bakica 1 87085 spar zg bakiceva",
    "chain": "PLODINE",
    "id": 309
  },
  {
    "address": "CIPONJAC 1 53291 NOVALJA",
    "chain": "PLODINE",
    "id": 306
  },
  {
    "address": "zagreb zagrebacka 3 87074 esp zg zagrebacka",
    "chain": "PLODINE",
    "id": 310
  },
  {
    "address": "zapresic gjalskoga 66 87068 spar zapresic",
    "chain": "PLODINE",
    "id": 312
  },
  {
    "address": "Ul Ivana Cesmickog 26 Koprivnica",
    "chain": "KAUFLAND",
    "id": 308
  },
  {
    "address": "zlatar zagrebacka ulica 40 87123 spar zlatar",
    "chain": "PLODINE",
    "id": 313
  },
  {
    "address": "CRESKA 2A 52440 POREC",
    "chain": "PLODINE",
    "id": 312
  },
  {
    "address": "CRNA RIKA 3 20340 PLOCE",
    "chain": "PLODINE",
    "id": 316
  },
  {
    "address": "Ul Karela Zahradnika 16a Zagreb",
    "chain": "KAUFLAND",
    "id": 315
  },
  {
    "address": "DIGITRONSKA 27A 52460 BUJE",
    "chain": "PLODINE",
    "id": 318
  },
  {
    "address": "Vile Velebita 6 Zagreb",
    "chain": "KAUFLAND",
    "id": 318
  },
  {
    "address": "DOL 1A 21480 VIS",
    "chain": "PLODINE",
    "id": 319
  },
  {
    "address": "Vlahe Paljetka 4 Bjelovar",
    "chain": "KAUFLAND",
    "id": 320
  },
  {
    "address": "DUGA ULICA 59A 42223 VARAZDINSKE TOPLICE",
    "chain": "PLODINE",
    "id": 321
  },
  {
    "address": "GOLUBOVECKA 36B 49240 DONJA STUBICA",
    "chain": "PLODINE",
    "id": 323
  },
  {
    "address": "Zagrebacka 49a Sisak",
    "chain": "KAUFLAND",
    "id": 322
  },
  {
    "address": "GOSPODARSKA 33 42000 VARAZDIN",
    "chain": "PLODINE",
    "id": 324
  },
  {
    "address": "Zagrebacka cesta 136 Zagreb",
    "chain": "KAUFLAND",
    "id": 325
  },
  {
    "address": "GOSPODARSKA ULICA 12 42230 LUDBREG",
    "chain": "PLODINE",
    "id": 326
  },
  {
    "address": "Zametska 44 Rijeka",
    "chain": "KAUFLAND",
    "id": 327
  },
  {
    "address": "GRGURA NINSKOG 19 35400 NOVA GRADISKA",
    "chain": "PLODINE",
    "id": 328
  },
  {
    "address": "HRVOJA VUKCICA HRVATINICA 5 32100 VINKOVCI",
    "chain": "PLODINE",
    "id": 330
  },
  {
    "address": "Barutanski jarak 54 Zagreb",
    "chain": "KAUFLAND",
    "id": 329
  },
  {
    "address": "HUTTLEROVA 30 31000 OSIJEK",
    "chain": "PLODINE",
    "id": 332
  },
  {
    "address": "Franje Rackog 95 Dakovo",
    "chain": "KAUFLAND",
    "id": 332
  },
  {
    "address": "ISTARSKA 1P 52452 FUNTANA",
    "chain": "PLODINE",
    "id": 333
  },
  {
    "address": "Ljudevita Posavskog 51 Velika Gorica",
    "chain": "KAUFLAND",
    "id": 334
  },
  {
    "address": "I CESMICKOG 5A 48000 KOPRIVNICA",
    "chain": "PLODINE",
    "id": 335
  },
  {
    "address": "Magistralna ulica 1 Biograd",
    "chain": "KAUFLAND",
    "id": 336
  },
  {
    "address": "I MESTROVICA 70 22000 SIBENIK",
    "chain": "PLODINE",
    "id": 337
  },
  {
    "address": "Maksimilijana Benkovica 34 Nova Gradiska",
    "chain": "KAUFLAND",
    "id": 338
  },
  {
    "address": "JADRANSKA CESTA 78 23207 SVETI FILIP I JAKOV",
    "chain": "PLODINE",
    "id": 339
  },
  {
    "address": "JADRANSKA MAGISTRALA 13 23211 PAKOSTANE",
    "chain": "PLODINE",
    "id": 341
  },
  {
    "address": "Mate Vlasica 55 Porec",
    "chain": "KAUFLAND",
    "id": 341
  },
  {
    "address": "JADRANSKA ULICA 44A 23242 POSEDARJE",
    "chain": "PLODINE",
    "id": 342
  },
  {
    "address": "Miljenka Buljana 5 Sinj",
    "chain": "KAUFLAND",
    "id": 343
  },
  {
    "address": "JANKA LESKOVARA 12 2 49218 PREGRADA",
    "chain": "PLODINE",
    "id": 344
  },
  {
    "address": "Obrtnicka ulica 1 Cakovec",
    "chain": "KAUFLAND",
    "id": 345
  },
  {
    "address": "JELSA 1018A 21465 JELSA",
    "chain": "PLODINE",
    "id": 346
  },
  {
    "address": "JOSIPA ZORICA 117 10370 DUGO SELO",
    "chain": "PLODINE",
    "id": 348
  },
  {
    "address": "Priljevo 209 Vukovar",
    "chain": "KAUFLAND",
    "id": 348
  },
  {
    "address": "J J STROSSMAYERA 343 31000 OSIJEK",
    "chain": "PLODINE",
    "id": 349
  },
  {
    "address": "Put Gaceleza 1D Vodice",
    "chain": "KAUFLAND",
    "id": 350
  },
  {
    "address": "J ZAKNA 12 52100 PULA",
    "chain": "PLODINE",
    "id": 351
  },
  {
    "address": "Stjepana Ivicevica 66 Makarska",
    "chain": "KAUFLAND",
    "id": 352
  },
  {
    "address": "KARDINALA ALOJZIJA STEPINCA 112 21220 TROGIR",
    "chain": "PLODINE",
    "id": 353
  },
  {
    "address": "Ulica 4 gardijske brigade 69 Zadar",
    "chain": "KAUFLAND",
    "id": 354
  },
  {
    "address": "KARLOVACKA CESTA 125A 47280 OZALJ",
    "chain": "PLODINE",
    "id": 355
  },
  {
    "address": "KARLOV VRT 2A 52341 ZMINJ",
    "chain": "PLODINE",
    "id": 357
  },
  {
    "address": "Ulica Ivana Gundulica 16 Ivanec",
    "chain": "KAUFLAND",
    "id": 356
  },
  {
    "address": "KASTAVSKA CESTA 19 51211 MATULJI",
    "chain": "PLODINE",
    "id": 359
  },
  {
    "address": "Ulica Josipa Broza Tita 25 Zabok",
    "chain": "KAUFLAND",
    "id": 359
  },
  {
    "address": "KLOKOVEC 260A 49217 KRAPINSKE TOPLICE",
    "chain": "PLODINE",
    "id": 360
  },
  {
    "address": "Ulica Sima Savinovica 2 Cibaca",
    "chain": "KAUFLAND",
    "id": 361
  },
  {
    "address": "KOTORSKA 9 51260 CRIKVENICA",
    "chain": "PLODINE",
    "id": 362
  },
  {
    "address": "KRALJA PETRA KRESIMIRA IV 4B 31500 NASICE",
    "chain": "PLODINE",
    "id": 364
  },
  {
    "address": "Ulica Spine-Via Spine 2 Rovinj",
    "chain": "KAUFLAND",
    "id": 363
  },
  {
    "address": "KRALJA TOMISLAVA 65 44330 NOVSKA",
    "chain": "PLODINE",
    "id": 366
  },
  {
    "address": "Varteksova ulica 2 Varazdin",
    "chain": "KAUFLAND",
    "id": 366
  },
  {
    "address": "KRIZINE 10 22212 TRIBUNJ",
    "chain": "PLODINE",
    "id": 367
  },
  {
    "address": "Ventilatorska cesta 1 Lucko",
    "chain": "KAUFLAND",
    "id": 368
  },
  {
    "address": "LABINSKA 51A 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 369
  },
  {
    "address": "Vukovarska ulica 10 Sibenik",
    "chain": "KAUFLAND",
    "id": 370
  },
  {
    "address": "LJUBLJANSKA AVENIJA 2B 10000 ZAGREB",
    "chain": "PLODINE",
    "id": 371
  },
  {
    "address": "MATE VLASICA 38 52440 POREC",
    "chain": "PLODINE",
    "id": 373
  },
  {
    "address": "Zagrebacka ulica 67 Dugo Selo",
    "chain": "KAUFLAND",
    "id": 373
  },
  {
    "address": "MILANA NOVACICA 15 43240 CAZMA",
    "chain": "PLODINE",
    "id": 374
  },
  {
    "address": "MUNDANIJE 12B 51280 RAB",
    "chain": "PLODINE",
    "id": 376
  },
  {
    "address": "MUNIDA 3B 52203 MEDULIN",
    "chain": "PLODINE",
    "id": 377
  },
  {
    "address": "MUTILSKA ULICA 60B 52100 PULA",
    "chain": "PLODINE",
    "id": 378
  },
  {
    "address": "NASELJE KORENIKA 1 1 52420 BUZET",
    "chain": "PLODINE",
    "id": 379
  },
  {
    "address": "NOVA CESTA 28 47300 OGULIN",
    "chain": "PLODINE",
    "id": 380
  },
  {
    "address": "NOVIGRADSKA 24 52470 UMAG",
    "chain": "PLODINE",
    "id": 381
  },
  {
    "address": "OPTUJSKA 151 42000 VARAZDIN",
    "chain": "PLODINE",
    "id": 382
  },
  {
    "address": "OSJECKA 50 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 383
  },
  {
    "address": "OSJECKA ULICA 1J 31300 BELI MANASTIR",
    "chain": "PLODINE",
    "id": 384
  },
  {
    "address": "OSJECKA ULICA 62H 34000 POZEGA",
    "chain": "PLODINE",
    "id": 385
  },
  {
    "address": "OSTROSKA 1A 21334 ZAOSTROG",
    "chain": "PLODINE",
    "id": 386
  },
  {
    "address": "OTOCKA CESTA 10 23272 KALI",
    "chain": "PLODINE",
    "id": 387
  },
  {
    "address": "OTOCKA CESTA 14 23262 PASMAN",
    "chain": "PLODINE",
    "id": 388
  },
  {
    "address": "PACIPOLJE 20 22243 MURTER",
    "chain": "PLODINE",
    "id": 389
  },
  {
    "address": "PAKRACKA ULICA 7 43000 BJELOVAR",
    "chain": "PLODINE",
    "id": 390
  },
  {
    "address": "PETRA ZORANICA 20 23420 BENKOVAC",
    "chain": "PLODINE",
    "id": 391
  },
  {
    "address": "PIROVACKA ULICA 1A 22213 PIROVAC",
    "chain": "PLODINE",
    "id": 392
  },
  {
    "address": "PODUZETNICKA ZONA 1A 20355 OPUZEN",
    "chain": "PLODINE",
    "id": 393
  },
  {
    "address": "PODVORNICA 1 22203 ROGOZNICA",
    "chain": "PLODINE",
    "id": 394
  },
  {
    "address": "POMER 350C 52100 POMER",
    "chain": "PLODINE",
    "id": 395
  },
  {
    "address": "PRERADOVICEVA 96A 31400 DJAKOVO",
    "chain": "PLODINE",
    "id": 396
  },
  {
    "address": "PRILAZ DR FRANJE TUDJMANA 9 23232 NIN",
    "chain": "PLODINE",
    "id": 397
  },
  {
    "address": "PRISTAVA KRAPINSKA 63 49000 KRAPINA",
    "chain": "PLODINE",
    "id": 398
  },
  {
    "address": "PULJSKA CESTA 20 52212 FAZANA",
    "chain": "PLODINE",
    "id": 399
  },
  {
    "address": "PUT CERODOLA 1 23000 ZADAR",
    "chain": "PLODINE",
    "id": 400
  },
  {
    "address": "PUT GACELEZA 3 22211 VODICE",
    "chain": "PLODINE",
    "id": 401
  },
  {
    "address": "PUT SUPAVLA 15 21000 SPLIT",
    "chain": "PLODINE",
    "id": 402
  },
  {
    "address": "PUT SVETOG PETRA 2 23233 PRIVLAKA",
    "chain": "PLODINE",
    "id": 403
  },
  {
    "address": "RUZICEVA 29 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 404
  },
  {
    "address": "RUZICE MIHIC 20 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 405
  },
  {
    "address": "SATNIJE PUTALJ 5 21212 KASTEL SUCURAC",
    "chain": "PLODINE",
    "id": 406
  },
  {
    "address": "SAVSKA ULICA 91 10310 IVANIC GRAD",
    "chain": "PLODINE",
    "id": 407
  },
  {
    "address": "SETALISTE MARSALA TITA 2A 51415 LOVRAN",
    "chain": "PLODINE",
    "id": 408
  },
  {
    "address": "SIME KURELICA 28 52000 PAZIN",
    "chain": "PLODINE",
    "id": 409
  },
  {
    "address": "SJEVERNA VEZNA CESTA 31 35000 SLAVONSKI BROD",
    "chain": "PLODINE",
    "id": 410
  },
  {
    "address": "SKABRNJSKA 14 21217 KASTEL STAFILIC",
    "chain": "PLODINE",
    "id": 411
  },
  {
    "address": "SKOLSKA 3 44000 SISAK",
    "chain": "PLODINE",
    "id": 412
  },
  {
    "address": "SPLITSKA 28A 20350 METKOVIC",
    "chain": "PLODINE",
    "id": 413
  },
  {
    "address": "STANCIJA KALIGARI 2 ZBANDAJ 52440 POREC",
    "chain": "PLODINE",
    "id": 414
  },
  {
    "address": "STARA CESTA 9 53270 SENJ",
    "chain": "PLODINE",
    "id": 415
  },
  {
    "address": "STRMAC 320 52231 NEDESCINA",
    "chain": "PLODINE",
    "id": 416
  },
  {
    "address": "SV VID 200 51511 MALINSKA",
    "chain": "PLODINE",
    "id": 417
  },
  {
    "address": "S S KRANJCEVICA 4 53291 NOVALJA",
    "chain": "PLODINE",
    "id": 418
  },
  {
    "address": "TOMISLAVOVA 51 48260 KRIZEVCI",
    "chain": "PLODINE",
    "id": 419
  },
  {
    "address": "TOSINA 16 51410 VOLOSKO",
    "chain": "PLODINE",
    "id": 420
  },
  {
    "address": "TRG KRALJA TOMISLAVA 10 33405 PITOMACA",
    "chain": "PLODINE",
    "id": 421
  },
  {
    "address": "TRG RUDJERA BOSKOVICA 16 D 33520 SLATINA",
    "chain": "PLODINE",
    "id": 422
  },
  {
    "address": "TRNININA 3 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 423
  },
  {
    "address": "ULICA 1 MAJA 52215 VODNJAN",
    "chain": "PLODINE",
    "id": 424
  },
  {
    "address": "ULICA 34 INZENJERIJSKE BOJNE 2 40000 CAKOVEC",
    "chain": "PLODINE",
    "id": 425
  },
  {
    "address": "ULICA BRACE BOZIC 4B 52210 ROVINJ",
    "chain": "PLODINE",
    "id": 426
  },
  {
    "address": "ULICA DR FRANJE TUDJMANA 7 23206 SUKOSAN",
    "chain": "PLODINE",
    "id": 427
  },
  {
    "address": "ULICA FRANJE TUDJMANA 83A 10450 JASTREBARSKO",
    "chain": "PLODINE",
    "id": 428
  },
  {
    "address": "ULICA GENERALA NIKOLE MASTROVICA 8 53220 OTOCAC",
    "chain": "PLODINE",
    "id": 429
  },
  {
    "address": "ULICA JOSIPA BROZA TITA 6 49210 ZABOK",
    "chain": "PLODINE",
    "id": 430
  },
  {
    "address": "ULICA KNEZA LJUDEVITA POSAVSKOG 47 10410 VELIKA GORICA",
    "chain": "PLODINE",
    "id": 431
  },
  {
    "address": "ULICA KRALJA TOMISLAVA 57 10434 STRMEC",
    "chain": "PLODINE",
    "id": 432
  },
  {
    "address": "ULICA KRALJA ZVONIMIRA 4 31431 CEPIN",
    "chain": "PLODINE",
    "id": 433
  },
  {
    "address": "ULICA SVETOG MARTINA 4A 52450 VRSAR",
    "chain": "PLODINE",
    "id": 434
  },
  {
    "address": "ULICA VICE VUKOVA 2 10000 ZAGREB",
    "chain": "PLODINE",
    "id": 435
  },
  {
    "address": "UL 113 SIBENSKE BRIGADE HV A 195 22000 SIBENIK",
    "chain": "PLODINE",
    "id": 436
  },
  {
    "address": "UL BRACE ANDRIJICA 1 23250 PAG",
    "chain": "PLODINE",
    "id": 437
  },
  {
    "address": "VARAZDINSKA ULICA 22D 42250 LEPOGLAVA",
    "chain": "PLODINE",
    "id": 438
  },
  {
    "address": "VELIMIRA SKORPIKA 11 10000 ZAGREB",
    "chain": "PLODINE",
    "id": 439
  },
  {
    "address": "VELIMIRA SKORPIKA 16 22000 RAZINE",
    "chain": "PLODINE",
    "id": 440
  },
  {
    "address": "VISKOVO 32 51216 VISKOVO",
    "chain": "PLODINE",
    "id": 441
  },
  {
    "address": "VOLNIK 2 51557 CRES",
    "chain": "PLODINE",
    "id": 442
  },
  {
    "address": "VRANOVACA 80 53230 KORENICA",
    "chain": "PLODINE",
    "id": 443
  },
  {
    "address": "VRGORSKA 2 21300 MAKARSKA",
    "chain": "PLODINE",
    "id": 444
  },
  {
    "address": "VRH MARTINSCICE 69D 51221 KOSTRENA",
    "chain": "PLODINE",
    "id": 445
  },
  {
    "address": "VRSANSKA 28 51500 KRK",
    "chain": "PLODINE",
    "id": 446
  },
  {
    "address": "VUKOVARSKA 10 31270 ZUPANJA",
    "chain": "PLODINE",
    "id": 447
  },
  {
    "address": "VUKOVARSKA 87 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 448
  },
  {
    "address": "VUKOVARSKA 97B 31540 DONJI MIHOLJAC",
    "chain": "PLODINE",
    "id": 449
  },
  {
    "address": "VUKOVARSKA CESTA 5A 33000 VIROVITICA",
    "chain": "PLODINE",
    "id": 450
  },
  {
    "address": "ZAGREBACKA 1A 32000 VUKOVAR",
    "chain": "PLODINE",
    "id": 451
  },
  {
    "address": "ZAGREBACKA 2 40000 CAKOVEC",
    "chain": "PLODINE",
    "id": 452
  },
  {
    "address": "ZAGREBACKA 3 44320 KUTINA",
    "chain": "PLODINE",
    "id": 453
  },
  {
    "address": "ZAGREBACKA ULICA 2B 44250 PETRINJA",
    "chain": "PLODINE",
    "id": 454
  },
  {
    "address": "ZAGREBACKA ULICA 60 10340 VRBOVEC",
    "chain": "PLODINE",
    "id": 455
  },
  {
    "address": "ZAGREBACKA ULICA 62 10380 SVETI IVAN ZELINA",
    "chain": "PLODINE",
    "id": 456
  },
  {
    "address": "ZAMETSKA 96A 51000 RIJEKA",
    "chain": "PLODINE",
    "id": 457
  },
  {
    "address": "ZELENICE 46 52220 LABIN",
    "chain": "PLODINE",
    "id": 458
  },
  {
    "address": "OTOCKA CESTA 10 23273 KALI",
    "chain": "PLODINE",
    "id": 459
  },
  {
    "address": "donji stupnik gospodarska ulica 5 8708 interspar zg emmez stup",
    "chain": "SPAR",
    "id": 460
  },
  {
    "address": "karlovac prilaz v. holjevca 12 8713 interspar karlovac",
    "chain": "SPAR",
    "id": 461
  },
  {
    "address": "koprivnica gospodarska ulica 1 8712 interspar koprivnica",
    "chain": "SPAR",
    "id": 462
  },
  {
    "address": "kukuljanovo kukuljanovo 362 8729 interspar ri kukuljanovo",
    "chain": "SPAR",
    "id": 463
  },
  {
    "address": "osijek sv. leopolda b. mandica 7 8704 interspar os centar",
    "chain": "SPAR",
    "id": 464
  },
  {
    "address": "osijek svilajska 31a 8725 interspar os portanova",
    "chain": "SPAR",
    "id": 465
  },
  {
    "address": "pula rimske centurijacije 101 8719 interspar pu city mall",
    "chain": "SPAR",
    "id": 466
  },
  {
    "address": "rijeka janka polica kamova 81a 8721 interspar ri tower",
    "chain": "SPAR",
    "id": 467
  },
  {
    "address": "rijeka liburnijska ulica 1 8722 interspar ri krnjevo",
    "chain": "SPAR",
    "id": 468
  },
  {
    "address": "rijeka ulica maria gennaria 18 8720 interspar ri rujevica",
    "chain": "SPAR",
    "id": 469
  },
  {
    "address": "samobor ul. grada wirgesa 2 d 8726 interspar samobor",
    "chain": "SPAR",
    "id": 470
  },
  {
    "address": "sisak ivana fistrovica 25 8703 interspar sisak",
    "chain": "SPAR",
    "id": 471
  },
  {
    "address": "slavonski brod osjecka 284 8706 interspar sb supernova",
    "chain": "SPAR",
    "id": 472
  },
  {
    "address": "split josipa jovica 93 8718 interspar st mos",
    "chain": "SPAR",
    "id": 473
  },
  {
    "address": "split vukovarska 207 8715 interspar cco split",
    "chain": "SPAR",
    "id": 474
  },
  {
    "address": "velika gorica rakarska ulica 13 8728 interspar velika gorica",
    "chain": "SPAR",
    "id": 475
  },
  {
    "address": "zadar ante starcevica 5a 8723 interspar zd starceviceva",
    "chain": "SPAR",
    "id": 476
  },
  {
    "address": "zadar bleiburskih zrtava 18 8701 interspar zadar",
    "chain": "SPAR",
    "id": 477
  },
  {
    "address": "zagreb avenija v. holjevca 62 8717 interspar zg buzin",
    "chain": "SPAR",
    "id": 478
  },
  {
    "address": "zagreb jankomir 33. 8702 interspar zg cco west",
    "chain": "SPAR",
    "id": 479
  },
  {
    "address": "zagreb kolakova 14 dubrava 8711 interspar zg garden dub",
    "chain": "SPAR",
    "id": 480
  },
  {
    "address": "zagreb skorpikova 34 2 8707 interspar zg kingcross",
    "chain": "SPAR",
    "id": 481
  },
  {
    "address": "zagreb slavonska avenija 11d 8716 interspar zg cco east",
    "chain": "SPAR",
    "id": 482
  },
  {
    "address": "zagreb ulica kneza branimira 181 8705 interspar zg retkovec",
    "chain": "SPAR",
    "id": 483
  },
  {
    "address": "zagreb ulica vice vukova 6 8714 interspar zg arena centar",
    "chain": "SPAR",
    "id": 484
  },
  {
    "address": "bibinje jadranska cesta 160 87024 spar bibinje sukosan",
    "chain": "SPAR",
    "id": 485
  },
  {
    "address": "bjelovar andrije hebranga 2a 87092 esp bjelovar",
    "chain": "SPAR",
    "id": 486
  },
  {
    "address": "buje gospodarska 1a 87031 spar buje",
    "chain": "SPAR",
    "id": 487
  },
  {
    "address": "cakovec svetojelenska cesta 25 87009 esp cakovec galerija",
    "chain": "SPAR",
    "id": 488
  },
  {
    "address": "cakovec tomasa goricanca 1 87039 spar cakovec jug",
    "chain": "SPAR",
    "id": 489
  },
  {
    "address": "cepin osjecka 21 87155 esp cepin",
    "chain": "SPAR",
    "id": 490
  },
  {
    "address": "dakovo bana jelacica 10a 87095 spar dakovo",
    "chain": "SPAR",
    "id": 491
  },
  {
    "address": "daruvar gajeva 47 87101 spar daruvar",
    "chain": "SPAR",
    "id": 492
  },
  {
    "address": "donja stubica toplicka cesta 87 a 87134 spar donja stubica",
    "chain": "SPAR",
    "id": 493
  },
  {
    "address": "dugopolje ulica matice hrvatske 19 87050 esp dugopolje",
    "chain": "SPAR",
    "id": 494
  },
  {
    "address": "dugo selo zagrebacka ulica 154 87142 esp dugo selo",
    "chain": "SPAR",
    "id": 495
  },
  {
    "address": "gospic budacka 100 87156 esp gospic",
    "chain": "SPAR",
    "id": 496
  },
  {
    "address": "grubisno polje n. subica zrinskog 38 87098 spar grubisno polje",
    "chain": "SPAR",
    "id": 497
  },
  {
    "address": "ivanec ivana gorana kovacica 51 87124 esp ivanec",
    "chain": "SPAR",
    "id": 498
  },
  {
    "address": "ivanic grad stjepana majdeka 53 87042 esp ivanic grad",
    "chain": "SPAR",
    "id": 499
  },
  {
    "address": "jastrebarsko tresnjevka 1 1 87036 esp jastrebarsko",
    "chain": "SPAR",
    "id": 500
  },
  {
    "address": "karlovac kralja p. kresimira iv 10 87093 esp karlovac kresimira",
    "chain": "SPAR",
    "id": 501
  },
  {
    "address": "kastav sporova jama 1a 87021 spar rijeka kastav",
    "chain": "SPAR",
    "id": 502
  },
  {
    "address": "kastel sucurac dr. franje tudmana 344 87049 esp kastel sucurac",
    "chain": "SPAR",
    "id": 503
  },
  {
    "address": "knin getaldiceva bb 87109 spar knin",
    "chain": "SPAR",
    "id": 504
  },
  {
    "address": "koprivnica kolodvorska 31a 87091 esp kc kolodvorska",
    "chain": "SPAR",
    "id": 505
  },
  {
    "address": "krapinske toplice vrtnjakovec 115a 87037 spar krapinske toplice",
    "chain": "SPAR",
    "id": 506
  },
  {
    "address": "krizevci tadije smiciklasa 5a 87032 esp krizevci",
    "chain": "SPAR",
    "id": 507
  },
  {
    "address": "labin pulska ulica 2c 87027 esp labin",
    "chain": "SPAR",
    "id": 508
  },
  {
    "address": "ludbreg ul. rudolfa fizira 3 87028 spar ludbreg",
    "chain": "SPAR",
    "id": 509
  },
  {
    "address": "marija bistrica stubicka cesta 17 d 87043 spar marija bistrica",
    "chain": "SPAR",
    "id": 510
  },
  {
    "address": "nasice vinogradska 4 87103 spar nasice",
    "chain": "SPAR",
    "id": 511
  },
  {
    "address": "nin put bagata 11 87133 esp nin",
    "chain": "SPAR",
    "id": 512
  },
  {
    "address": "novi marof grana 150 2 87040 spar novi marof",
    "chain": "SPAR",
    "id": 513
  },
  {
    "address": "opatija nova cesta 68 87106 esp opatija",
    "chain": "SPAR",
    "id": 514
  },
  {
    "address": "orahovica kralja zvonimira 167 87097 spar orahovica",
    "chain": "SPAR",
    "id": 515
  },
  {
    "address": "osijek kneza trpimira 14 87089 esp os trpimirova",
    "chain": "SPAR",
    "id": 516
  },
  {
    "address": "osijek strossmayerova 167 87096 esp osijek strossmayerova",
    "chain": "SPAR",
    "id": 517
  },
  {
    "address": "osijek svilajska ulica 35b 87171 esp os svilajska",
    "chain": "SPAR",
    "id": 518
  },
  {
    "address": "ozalj karlovacka cesta 74 87140 spar ozalj karlovacka",
    "chain": "SPAR",
    "id": 519
  },
  {
    "address": "pakrac andrije hebranga 18 87099 spar pakrac",
    "chain": "SPAR",
    "id": 520
  },
  {
    "address": "pakrac bolnicka ulica 80k 87169 esp pakrac",
    "chain": "SPAR",
    "id": 521
  },
  {
    "address": "pleternica trg hrv. branitelja 9 87102 spar pleternica",
    "chain": "SPAR",
    "id": 522
  },
  {
    "address": "popovaca kutinska ulica 16 87127 spar popovaca",
    "chain": "SPAR",
    "id": 523
  },
  {
    "address": "porec obala rade koncara 1a 87107 spar porec",
    "chain": "SPAR",
    "id": 524
  },
  {
    "address": "pozega osjecka 10 87033 esp pozega",
    "chain": "SPAR",
    "id": 525
  },
  {
    "address": "pregrada ulica janka leskovara 46 87135 spar pregrada",
    "chain": "SPAR",
    "id": 526
  },
  {
    "address": "prelog cakovecka 113 87138 esp prelog",
    "chain": "SPAR",
    "id": 527
  },
  {
    "address": "pula santoriova 13 87105 esp pula santoriova",
    "chain": "SPAR",
    "id": 528
  },
  {
    "address": "rijeka franje candeka 8a 87011 spar rijeka candekova",
    "chain": "SPAR",
    "id": 529
  },
  {
    "address": "rijeka martinkovac 127 87030 esp rijeka martinkovac",
    "chain": "SPAR",
    "id": 530
  },
  {
    "address": "rijeka osjecka ulica 29 87104 esp rijeka osjecka",
    "chain": "SPAR",
    "id": 531
  },
  {
    "address": "rijeka riva boduli 1 87026 spar ri riva boduli",
    "chain": "SPAR",
    "id": 532
  },
  {
    "address": "selce drazica 7 87022 esp selce",
    "chain": "SPAR",
    "id": 533
  },
  {
    "address": "senj d.tomljanovica gavrana 2b 87167 esp senj",
    "chain": "SPAR",
    "id": 534
  },
  {
    "address": "sesvetski kraljevec dugoselska cesta 20 87034 spar sesvetski kraljevec",
    "chain": "SPAR",
    "id": 535
  },
  {
    "address": "sibenik put vida 6 87003 esp sibenik supernova",
    "chain": "SPAR",
    "id": 536
  },
  {
    "address": "slavonski brod petra svacica 2 87088 esp sb svaciceva",
    "chain": "SPAR",
    "id": 537
  },
  {
    "address": "split boskoviceva 24 87126 spar split boskoviceva",
    "chain": "SPAR",
    "id": 538
  },
  {
    "address": "split licka ulica 1 3 87012 spar split licka",
    "chain": "SPAR",
    "id": 539
  },
  {
    "address": "split poljicka 2 1 87014 spar split poljicka",
    "chain": "SPAR",
    "id": 540
  },
  {
    "address": "split spinciceva 2j 87108 spar split spinciceva",
    "chain": "SPAR",
    "id": 541
  },
  {
    "address": "split subiceva 5 7 87112 spar split subiceva",
    "chain": "SPAR",
    "id": 542
  },
  {
    "address": "suhopolje kralja tomislava 2 87100 spar suhopolje",
    "chain": "SPAR",
    "id": 543
  },
  {
    "address": "sv. ivan zelina zagrebacka ulica 137 87035 spar sv. ivan zelina",
    "chain": "SPAR",
    "id": 544
  },
  {
    "address": "umag bujska ul. via buie br. 1 87025 esp umag",
    "chain": "SPAR",
    "id": 545
  },
  {
    "address": "valpovo ivana fuderera hanzike 3 87002 esp valpovo stc",
    "chain": "SPAR",
    "id": 546
  },
  {
    "address": "varazdin medimurska ulica 31c 87016 esp vz medimurska",
    "chain": "SPAR",
    "id": 547
  },
  {
    "address": "varazdin optujska 171 87001 esp varazdin supernova",
    "chain": "SPAR",
    "id": 548
  },
  {
    "address": "varazdin vinka mederala 2a i 2b 87018 spar vz mederala",
    "chain": "SPAR",
    "id": 549
  },
  {
    "address": "varazdin zagrebacka ulica 81 87090 esp vz zagrebacka",
    "chain": "SPAR",
    "id": 550
  },
  {
    "address": "velika gorica matice hrvatske 22 87076 esp vg matice hrvatske",
    "chain": "SPAR",
    "id": 551
  },
  {
    "address": "velika gorica trg k. p. kresimira iv bb 87080 spar vg kresimira",
    "chain": "SPAR",
    "id": 552
  },
  {
    "address": "vinkovci kralja zvonimira 59 87094 esp vinkovci",
    "chain": "SPAR",
    "id": 553
  },
  {
    "address": "vinkovci prilaz a. b. simica 1 87045 esp vinkovci a. b. simica",
    "chain": "SPAR",
    "id": 554
  },
  {
    "address": "vukovar priljevo 36 87044 esp vukovar",
    "chain": "SPAR",
    "id": 555
  },
  {
    "address": "zadar polacisce 4 87007 esp zadar city galleria",
    "chain": "SPAR",
    "id": 556
  },
  {
    "address": "zadar ulica akcije maslenica 1 87004 esp zadar supernova",
    "chain": "SPAR",
    "id": 557
  },
  {
    "address": "zagreb aleja pomoraca 21 87066 spar zg pomoraca",
    "chain": "SPAR",
    "id": 558
  },
  {
    "address": "zagreb ante topica mimare 57 87038 spar zg ante t. mimare",
    "chain": "SPAR",
    "id": 559
  },
  {
    "address": "zagreb argentinska 4 87054 spar zg argentinska",
    "chain": "SPAR",
    "id": 560
  },
  {
    "address": "zagreb avenija dubrovnik 42 87062 spar zg av. dubrovnik",
    "chain": "SPAR",
    "id": 561
  },
  {
    "address": "zagreb banjavciceva 13 87075 esp zg banjavciceva",
    "chain": "SPAR",
    "id": 562
  },
  {
    "address": "zagreb banjavciceva 22a 87023 esp zg branimirova",
    "chain": "SPAR",
    "id": 563
  },
  {
    "address": "zagreb bijenicka cesta 5 87059 spar zg bijenicka",
    "chain": "SPAR",
    "id": 564
  },
  {
    "address": "zagreb borongajska cesta 75 87070 spar zg borongajska",
    "chain": "SPAR",
    "id": 565
  },
  {
    "address": "zagreb bozidara magovca 47 87051 spar zg magovceva",
    "chain": "SPAR",
    "id": 566
  },
  {
    "address": "zagreb dankovecka 4 87015 esp zg dankovecka",
    "chain": "SPAR",
    "id": 567
  },
  {
    "address": "zagreb dobroniceva7 87063 spar zg dobroniceva",
    "chain": "SPAR",
    "id": 568
  },
  {
    "address": "zagreb ehrlichova 9a 87008 spar zg erlichova",
    "chain": "SPAR",
    "id": 569
  },
  {
    "address": "zagreb gospodska 2 87019 spar zg gospodska",
    "chain": "SPAR",
    "id": 570
  },
  {
    "address": "zagreb gracani 7 87061 spar zg gracani",
    "chain": "SPAR",
    "id": 571
  },
  {
    "address": "zagreb gruska 18 87086 spar zg gruska",
    "chain": "SPAR",
    "id": 572
  },
  {
    "address": "zagreb h. macanovica 29 87064 spar zg macanovica",
    "chain": "SPAR",
    "id": 573
  },
  {
    "address": "zagreb horvatovac 58 87055 spar zg horvatovac",
    "chain": "SPAR",
    "id": 574
  },
  {
    "address": "zagreb ilica 425 87077 spar zg ilica",
    "chain": "SPAR",
    "id": 575
  },
  {
    "address": "zagreb ivana sibla 11 87005 spar zg siblova",
    "chain": "SPAR",
    "id": 576
  },
  {
    "address": "zagreb ivane brlic mazuranic 2a 87041 spar zg i.b. mazuranic",
    "chain": "SPAR",
    "id": 577
  },
  {
    "address": "zagreb jordanovac 7 87053 spar zg jordanovac",
    "chain": "SPAR",
    "id": 578
  },
  {
    "address": "zagreb jurja zerjavica 2 87082 spar zg zerjaviceva",
    "chain": "SPAR",
    "id": 579
  },
  {
    "address": "zagreb kneza branimira 163 87072 esp zg branimirova",
    "chain": "SPAR",
    "id": 580
  },
  {
    "address": "zagreb marticeva 13 87084 spar zg marticeva",
    "chain": "SPAR",
    "id": 581
  },
  {
    "address": "zagreb mlinovi 79 87060 spar zg mlinovi",
    "chain": "SPAR",
    "id": 582
  },
  {
    "address": "zagreb nikole jurisica 2a 87172 spar zg jurisiceva",
    "chain": "SPAR",
    "id": 583
  },
  {
    "address": "zagreb petrovaradinska 47 87056 spar zg petrovaradinska",
    "chain": "SPAR",
    "id": 584
  },
  {
    "address": "zagreb petrovaradinska 7c 87078 spar zg petrovaradinska",
    "chain": "SPAR",
    "id": 585
  },
  {
    "address": "zagreb picmanova 1a 87052 spar zg picmanova",
    "chain": "SPAR",
    "id": 586
  },
  {
    "address": "zagreb savska 58 87079 spar zg savska",
    "chain": "SPAR",
    "id": 587
  },
  {
    "address": "zagreb seferova 6 8 87057 spar zg seferova",
    "chain": "SPAR",
    "id": 588
  },
  {
    "address": "zagreb svetoklarska ulica 32 87119 esp sveta klara",
    "chain": "SPAR",
    "id": 589
  },
  {
    "address": "zagreb tina ujevica 17 87029 esp zg ujevica",
    "chain": "SPAR",
    "id": 590
  },
  {
    "address": "zagreb trg ane rukavine 1 87069 spar zg trnsko",
    "chain": "SPAR",
    "id": 591
  },
  {
    "address": "zagreb trg zrtava fasizma 6 87020 spar zg trg zrt. fasizma",
    "chain": "SPAR",
    "id": 592
  },
  {
    "address": "zagreb tuskanac 53 87058 spar zg tuskanac",
    "chain": "SPAR",
    "id": 593
  },
  {
    "address": "zagreb ulica dubrava 45 87081 spar zg dubrava",
    "chain": "SPAR",
    "id": 594
  },
  {
    "address": "zagreb ulica grada mainza 16 87017 esp zg grada mainza",
    "chain": "SPAR",
    "id": 595
  },
  {
    "address": "zagreb ulica sr njemacke 3 87073 esp zg sr njemacke",
    "chain": "SPAR",
    "id": 596
  },
  {
    "address": "zagreb v. kovacica 3a 87065 spar zg kovacica",
    "chain": "SPAR",
    "id": 597
  },
  {
    "address": "zagreb v. varicaka 12 87067 spar zg varicaka",
    "chain": "SPAR",
    "id": 598
  },
  {
    "address": "zagreb vincenta iz kastva 10 87083 spar zg vincenta",
    "chain": "SPAR",
    "id": 599
  },
  {
    "address": "zagreb vi oranicki odvojak 2 87087 spar zg oranice",
    "chain": "SPAR",
    "id": 600
  },
  {
    "address": "zagreb vlaska 44 87006 spar zg vlaska",
    "chain": "SPAR",
    "id": 601
  },
  {
    "address": "zagreb vojina bakica 1 87085 spar zg bakiceva",
    "chain": "SPAR",
    "id": 602
  },
  {
    "address": "zagreb zagrebacka 3 87074 esp zg zagrebacka",
    "chain": "SPAR",
    "id": 603
  },
  {
    "address": "zapresic gjalskoga 66 87068 spar zapresic",
    "chain": "SPAR",
    "id": 604
  },
  {
    "address": "zlatar zagrebacka ulica 40 87123 spar zlatar",
    "chain": "SPAR",
    "id": 605
  },
  {
    "address": "VUKOVARSKA 10 32270 ZUPANJA",
    "chain": "PLODINE",
    "id": 606
  },
  {
    "address": "NOVIGRADSKA 24 51470 UMAG",
    "chain": "PLODINE",
    "id": 607
  },
  {
    "address": "trgovinama na dan ",
    "chain": "LIDL",
    "id": 608
  },
  {
    "address": "3 2026 07 00 02.zip",
    "chain": "PLODINE",
    "id": 609
  }
]


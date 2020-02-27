// src/app/word.service.ts
import {Injectable} from '@angular/core';

@Injectable()
export class WordService {
  words: [string, string][] = [['af', 'proppen skal af'],
    ['alle', 'alle spiser is'],
    ['alt', 'den er alt for stor'],
    ['andre', 'vær sød mod andre'],
    ['at', 'det er sundt at løbe'],
    ['blev', 'Jens blev glad'],
    ['bliver', 'Jens bliver glad'],
    ['bort', 'se bort fra det'],
    ['da', 'den gang da far var ung'],
    ['dag', 'det er en god dag i dag'],
    ['de', 'se de glade børn'],
    ['dem', 'gå hen til dem'],
    ['den', 'spis den is'],
    ['der', 'der er et yndigt land'],
    ['deres', 'deres bil er rød'],
    ['det', 'det er dejligt'],
    ['dig', 'spis dig sund'],
    ['dog', 'det var dog godt'],
    ['du', 'du ser glad ud'],
    ['efter', 'politi kommer efter tyve'],
    ['eller', 'en eller to'],
    ['en', 'det er en sød kat'],
    ['et', 'det er et stort hus'],
    ['far', 'en stærk far'],
    ['fik', 'du fik en is'],
    ['fin', 'Fyn er fin'],
    ['for', 'alt for meget'],
    ['forbi', 'den kørte forbi'],
    ['fordi', 'det er fordi den er grøn'],
    ['fra', 'han er fra Danmark'],
    ['fri', 'dejligt at have fri fra skole'],
    ['få', 'det er godt at få is'],
    ['gik', 'katten gik sin vej'],
    ['glad', 'du ser glad ud'],
    ['godt', 'det er godt at være glad'],
    ['ham', 'den is er til ham'],
    ['han', 'han kan lide is'],
    ['hans', 'det er hans is'],
    ['har', 'han har en is'],
    ['havde', 'han havde en is'],
    ['have', 'han vil have en is'],
    ['hele', 'han vil spise is hele dagen'],
    ['hen', 'han vil hen til butikken'],
    ['hende', 'han vil give en is til hende'],
    ['her', 'han vil have en is her'],
    ['hjem', 'han skal hjem og have is'],
    ['hun', 'hun kan lide is'],
    ['hvad', 'hvad kan du lide?'],
    ['hver', 'en is til hver'],
    ['hvis', 'han får is hvis han er dygtig'],
    ['hvor', 'hvor er butikken?'],
    ['igen', 'han vil have is igen'],
    ['ikke', 'han vil ikke have is'],
    ['ind', 'kom ind og få en is'],
    ['jeg', 'jeg vil have is'],
    ['jer', 'jeg giver is til jer'],
    ['jo', 'jeg kan jo godt lide is'],
    ['kan', 'jeg kan jo godt lide is'],
    ['kom', 'kom og få en is'],
    ['kommer', 'mor kommer snart hjem'],
    ['kun', 'man må kun få 1 is'],
    ['kunne', 'han kunne spise to is'],
    ['lang', 'der er lang vej til butikken'],
    ['lidt', 'butikken har lidt is'],
    ['lige', 'han har lige spist'],
    ['lille', 'han kan spise en lille is'],
    ['løb', 'løb hen til butikken'],
    ['man', 'man kan få is'],
    ['mange', 'man kan få mange is'],
    ['med', 'spis is med glæde'],
    ['meget', 'spis meget is med glæde'],
    ['mere', 'spis mere is'],
    ['mig', 'mere is til mig'],
    ['min', 'jeg skal spise min is'],
    ['mod', 'skyd bolden mod mål'],
    ['mon', 'hvor mon isen er?'],
    ['må', 'isen må være kold'],
    ['ned', 'vi skal ned og hente is'],
    ['nej', 'hvem siger nej til is?'],
    ['noget', 'is er noget skidt'],
    ['nok', 'kan man få nok is?'],
    ['nu', 'vi skal have is nu'],
    ['når', 'vi skal have is når vi kommer ind'],
    ['og', 'is og sne'],
    ['også', 'han skal også have is'],
    ['om', 'vi spise is om sommeren'],
    ['op', 'hop op og ned'],
    ['os', 'mere is til os'],
    ['over', 'oppe over skyerne'],
    ['på', 'is på en varm dag'],
    ['sagde', 'hvem sagde is?'],
    ['se', 'vil du se en is?'],
    ['selv', 'pas på dig selv'],
    ['sidste', 'det er den sidste is'],
    ['sig', 'man skal passe på sig selv'],
    ['sin', 'man skal passe på sin is'],
    ['sine', 'man skal passe på sine egne'],
    ['skal', 'man skal passe på'],
    ['skulle', 'han skulle hente is'],
    ['små', 'man skal ikke gå i små sko'],
    ['som', 'frisk som en havørn'],
    ['stor', 'han spiser en stor is'],
    ['store', 'han har store muskler'],
    ['så', 'verden er så stor'],
    ['tid', 'det er tid til is'],
    ['til', 'det er tid til is'],
    ['tog', 'han tog en is'],
    ['ud', 'han går ud i haven'],
    ['under', 'den er nede under bordet'],
    ['var', 'der var engang'],
    ['ved', 'jeg ved en lærkerede'],
    ['vi', 'snart skal vi have is'],
    ['vil', 'jeg vil have is'],
    ['ville', 'jeg villa have is'],
    ['være', 'jeg vil være brandmand'],
    ['været', 'jeg har været artig i dag'],
    ['år', 'i år skal vi have is']
  ];

  newWord(): [string, string] {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}

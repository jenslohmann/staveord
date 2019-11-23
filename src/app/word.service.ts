// src/app/word.service.ts
import {Injectable} from '@angular/core';

@Injectable()
export class WordService {
  words = ['af', 'alle', 'alt', 'andre', 'at',
    'blev', 'bliver', 'bort',
    'da', 'dag', 'de', 'dem', 'den', 'der', 'deres', 'det', 'dig', 'dog', 'du',
    'efter', 'eller', 'en', 'et',
    'far', 'fik', 'fin', 'for', 'forbi', 'fordi', 'fra', 'fri', 'få',
    'gik', 'glad', 'godt', 'ham', 'han', 'hans', 'har', 'havde', 'have', 'hele', 'hen', 'hende', 'her', 'hjem', 'hun', 'hvad', 'hver',
    'hvis', 'hvor',
    'igen', 'ikke', 'ind',
    'jeg', 'jer', 'jo',
    'kan', 'kom', 'kommer', 'kun', 'kunne',
    'lang', 'lidt', 'lige', 'lille', 'løb',
    'man', 'mange', 'med', 'meget', 'mere', 'mig', 'min', 'mod', 'mon', 'må',
    'ned', 'nej', 'noget', 'nok', 'nu', 'når',
    'og', 'også', 'om', 'op', 'os', 'over',
    'på',
    'sagde', 'se', 'selv', 'sidste', 'sig', 'sin', 'sine', 'skal', 'skulle', 'små', 'som', 'stor', 'store', 'så',
    'tid', 'til', 'tog',
    'ud', 'under',
    'var', 'ved', 'vi', 'vil', 'ville', 'være', 'været',
    'år'];

  newWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}

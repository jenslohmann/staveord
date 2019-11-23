// src/app/greetings.service.ts
import {Injectable} from '@angular/core';
import {SpeechSynthesizerService} from './speech.service';

@Injectable()
export class GreetingsService {
  private speech: SpeechSynthesizerService;

  spellTo = ['Du skal nu stave til:',
    'Stav til:'
  ];

  success: [string, string, number][] = [['Flot klaret.', 'da-DK', 1],
    ['Den sad lige i skabet.', 'da-DK', 1],
    ['Fedt nok.', 'da-DK', 1],
    ['Oh yeah!', 'en-US', 0.2],
    ['Top dollar', 'en-US', 0.2]];

  noEntries: string[] = ['Du skal skrive noget.',
  'Du har jo ikke skrevet noget?',
  'Der skal stå noget i feltet.'];

  constructor(speech: SpeechSynthesizerService) {
    this.speech = speech;
  }

  spell(word: string): string {
    return this.getRandom(this.spellTo) + word;
  }

  wellDone(): SpeechSynthesisUtterance {
    const successText = this.getRandom(this.success);
    return this.speech.utterance(successText[0], successText[1], successText[2]);
  }

  noEntry() {
    return this.getRandom(this.noEntries);
  }

  error(enteredText: string, wordToSpell: string) {
    return 'Du skrev: ' + enteredText + '; det skulle have været: ' + wordToSpell;
  }

  getRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}

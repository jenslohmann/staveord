import {Component} from '@angular/core';
import {SpeechSynthesizerService} from './speech.service';
import {WordService} from './word.service';
import {GreetingsService} from './greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private speech: SpeechSynthesizerService;
  private words: WordService;
  private greetings: GreetingsService;

  constructor(speech: SpeechSynthesizerService, wordService: WordService, greetingsService: GreetingsService) {
    this.speech = speech;
    this.words = wordService;
    this.greetings = greetingsService;
    this.bullsEyes = 0;
    this.nextWord();
  }

  wordToSpell: [string, string];
  enteredText: string;
  bullsEyes: number;

  title = 'staveord';

  headerSpeak() {
    this.speech.say('Den lille app for børn, der vil lære at stave.');
  }

  helpMe() {
    this.speech.say('Klik på den blå knap for at høre det ord, du skal stave til. ' +
      'Når du tror, du har stavet rigtigt, så klik på den grønne knap.');
  }

  sayWordToSpell(): void {
    this.speech.say(this.wordToSpell[0] + '.');
  }

  nextWord(): void {
    this.enteredText = '';
    this.wordToSpell = this.words.newWord();
    this.speech.say(this.greetings.spell(this.wordToSpell[1], this.wordToSpell[0]));
  }

  testEquality() {
    const enteredText = this.enteredText.trim().toLowerCase();
    if (enteredText === this.wordToSpell[0].toLowerCase()) {

      this.speech.utter(this.greetings.wellDone());

      this.bullsEyes += 1;

      if (this.bullsEyes % 10 === 0) {
        this.speech.say('Nu har du ' + this.bullsEyes + ' rigtige. FLOT!');
      }

      this.nextWord();
    } else {
      if (enteredText === '') {
        this.speech.say(this.greetings.noEntry());
      } else {
        this.speech.say(this.greetings.error(enteredText, this.wordToSpell[0]));
      }
    }
  }

  giveUp() {
    this.speech.say('OK, den var måske for svær. Vi prøver et nyt ord.');
    this.nextWord();
  }
}

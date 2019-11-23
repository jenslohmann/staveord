// src/app/speech.service.ts
import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class SpeechSynthesizerService {

  constructor() {
  }

  say(text: string): void {
    speechSynthesis.speak(this.utterance(text));
  }

  utterance(greeting: string, language: string = 'da-DK', pitch: number = 1): SpeechSynthesisUtterance {
    const utterance = new SpeechSynthesisUtterance();
    utterance.volume = 1;
    utterance.rate = 0.9;
    utterance.text = greeting;
    utterance.lang = language;
    utterance.pitch = pitch;
    return utterance;
  }

  utter(utterance: SpeechSynthesisUtterance) {
    speechSynthesis.speak(utterance);
  }
}

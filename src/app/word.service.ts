// src/app/word.service.ts
import {Injectable} from '@angular/core';

@Injectable()
export class WordService {
  words = ['hejsa', 'ikke', 'sagde', 'sidste', 'sine', 'glad', 'få', 'ind', 'skal', 'man', 'os', 'alle', 'mod', 'fin', 'nej'];

  newWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SpeechSynthesizerService } from './speech.service';
import { WordService } from './word.service';
import { GreetingsService } from './greetings.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule
  ],
  providers: [SpeechSynthesizerService, WordService, GreetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

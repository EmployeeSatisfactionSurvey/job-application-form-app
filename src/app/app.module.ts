import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyModule } from 'survey-angular-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SurveyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

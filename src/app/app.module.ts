import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCardComponent } from './first-card/first-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondCardComponent } from './second-card/second-card.component';
import { ThirdCardComponent } from './third-card/third-card.component';
import { FourthCardComponent } from './fourth-card/fourth-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent,
    FourthCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

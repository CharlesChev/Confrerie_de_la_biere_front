import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { CardComponent } from './component/card/card.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    AproposComponent,
    LesbieresComponent,
    LacarteComponent,
    HomeComponent,
    MentionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

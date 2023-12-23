import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConfrerieComponent } from './confrerie.component';
import { MainComponent } from './component/main/main.component';
import { CardComponent } from './component/card/card.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';


@NgModule({
  declarations: [
    ConfrerieComponent,
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
    RouterModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [ConfrerieComponent]
})
export class AppModule { }

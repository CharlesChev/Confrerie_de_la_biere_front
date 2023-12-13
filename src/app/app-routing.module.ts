import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './component/apropos/apropos.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';

const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'carte', component: LacarteComponent },
  { path: 'lesbieres', component: LesbieresComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '', component: HomeComponent,
    children: [
      {path:'mentions', component: MentionsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

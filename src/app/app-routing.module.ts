import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './component/apropos/apropos.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'apropos', component: AproposComponent},
  {path:'carte', component: LacarteComponent},
  {path:'lesbieres', component: LesbieresComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

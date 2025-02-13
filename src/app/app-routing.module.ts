import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './component/apropos/apropos.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';
import { BiereComponent } from './component/biere/biere.component';
import { BiereFormComponent } from './component/back-office/biere-form/biere-form.component';
import { DashboardComponent } from './component/back-office/dashboard/dashboard.component';
import { ModifComponent } from './component/back-office/modif/modif.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'carte', component: LacarteComponent },
  { path: 'lesbieres', component: LesbieresComponent, },
  { path: 'mentions', component: MentionsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'biere/:id', component: BiereComponent },
  { path:'connection', component: ConnectionComponent},
  { path: 'modif/:id', component: ModifComponent,canActivate: [AuthGuard] },
  { path: 'add', component: BiereFormComponent,canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent },
];

const routerOptions = {
  anchorScrolling: "enabled" as "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

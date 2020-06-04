import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PolozeniIspitiComponent } from './components/polozeni-ispiti/polozeni-ispiti.component';
import { IzaberiPredmeteComponent } from './components/izaberi-predmete/izaberi-predmete.component';
import { PregledFinansijaComponent } from './components/pregled-finansija/pregled-finansija.component';
import { PregledPredmetaComponent } from './components/pregled-predmeta/pregled-predmeta.component';
import { PrikazStudenataComponent } from './components/prikaz-studenata/prikaz-studenata.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/logout/logout.component';




const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full',component: LoginComponent },
  { path: 'login', pathMatch: 'full',component: LoginComponent },
  { path: 'logout', pathMatch: 'full',component: LogoutComponent },
  { path: 'main', pathMatch: 'full',component: MainComponent },
  { path: 'welcome', pathMatch: 'full',component: WelcomeComponent },
  { path: 'home', pathMatch: 'full',component: WelcomeComponent },
  { path: 'pispiti', pathMatch: 'full',component: PolozeniIspitiComponent },
  { path: 'izPred', pathMatch: 'full',component: IzaberiPredmeteComponent},
  { path: 'prefinan', pathMatch: 'full',component: PregledFinansijaComponent},
  { path: 'predmetiStudenti', pathMatch: 'full',component: PregledPredmetaComponent},
  { path: 'prikazStudenata/:id',component:PrikazStudenataComponent}, 
  { path: 'glavni',component:AppComponent}, 

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }

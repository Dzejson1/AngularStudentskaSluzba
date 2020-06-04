import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutesModule } from './app-routes.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PolozeniIspitiComponent } from './components/polozeni-ispiti/polozeni-ispiti.component';
import { ProfesorService } from './services/profesor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IzaberiPredmeteComponent } from './components/izaberi-predmete/izaberi-predmete.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PregledFinansijaComponent } from './components/pregled-finansija/pregled-finansija.component';
import { PregledPredmetaComponent } from './components/pregled-predmeta/pregled-predmeta.component';
import { PrikazStudenataComponent } from './components/prikaz-studenata/prikaz-studenata.component';
import { AuthService } from './services/auth.service';
import { SluzbaAppInterceptor } from './services/sluzba-app.intercaptor';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WelcomeComponent,
    PolozeniIspitiComponent,
    IzaberiPredmeteComponent,
    PregledFinansijaComponent,
    PregledPredmetaComponent,
    PrikazStudenataComponent,
    LogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ProfesorService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:SluzbaAppInterceptor,
      multi:true
    },
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

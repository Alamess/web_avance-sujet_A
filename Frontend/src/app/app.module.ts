import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './views/form1/form1.component';
import { ReclamationService } from './services/reclamation/reclamation.service';
import { Form2Component } from './views/form2/form2.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { AuthService } from './services/auth/auth.service';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowComponent } from './components/how/how.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { HomeService } from './services/home/home.service';


@NgModule({
  declarations: [AppComponent, Form1Component, Form2Component, SignUpComponent, AboutComponent, FooterComponent, HowComponent, NavbarComponent, HomeComponent,],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers:[ReclamationService,AuthService,HomeService],
  bootstrap: [AppComponent]
})

export class AppModule { }

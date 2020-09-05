import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //works wit forms
import { HttpClientModule } from '@angular/common/http'; //to work with ajax/http/API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientLoginComponent } from './client-login/client-login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { NewMComponent } from './new-m/new-m.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TrendingComponent } from './trending/trending.component';
import { BookMComponent } from './book-m/book-m.component';
import { SeatsComponent } from './seats/seats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { BookingComponent } from './booking/booking.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLoginComponent,
    LandingComponent,
    RegisterComponent,
    ForgetComponent,
    DetailsComponent,
    NewMComponent,
    ComingSoonComponent,
    TrendingComponent,
    BookMComponent,
    SeatsComponent,
    NavbarComponent,
    MainComponent,
    BookingComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

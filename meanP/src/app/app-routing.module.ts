import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLoginComponent } from './client-login/client-login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { NewMComponent } from './new-m/new-m.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TrendingComponent } from './trending/trending.component';
import { BookingComponent } from './booking/booking.component';
import { SeatsComponent } from './seats/seats.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'login', component: ClientLoginComponent },
  { path: 'booking', component: BookingComponent },
  {
    path: 'home',
    component: LandingComponent,
  },
  { path: 'Trending', component: TrendingComponent },
  { path: 'Booking', component: SeatsComponent },

  { path: 'Comings', component: ComingSoonComponent },
  { path: 'New', component: NewMComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { provideRouter, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in';
import { SignUpComponent } from './pages/sign-up/sign-up';
import { MessageFormComponent } from './pages/message-form/message-form';
import { authGuard, guestGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [guestGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [guestGuard] },
  { path: 'message', component: MessageFormComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];

export const appConfig = [
  provideRouter(routes)
];
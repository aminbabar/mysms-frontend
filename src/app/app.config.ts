import { provideRouter, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in';
import { SignUpComponent } from './pages/sign-up/sign-up';
import { MessageFormComponent } from './pages/message-form/message-form';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'message', component: MessageFormComponent }
];

export const appConfig = [
  provideRouter(routes)
];
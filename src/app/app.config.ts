import { provideRouter, Routes } from '@angular/router';
import { MessageFormComponent } from './pages/message-form/message-form';

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' },
  { path: 'message', component: MessageFormComponent },
];

export const appConfig = [
  provideRouter(routes),
];
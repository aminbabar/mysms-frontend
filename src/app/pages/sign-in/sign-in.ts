import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    const payload = {
      user: {
        email: this.email,
        password: this.password
      }
    };

    this.http.post(`${environment.apiUrl}/users/sign_in`, payload, { observe: 'response' }).subscribe({
      next: (res: any) => {
        const token = res.headers.get('authorization')?.replace('Bearer ', '');
        if (token) localStorage.setItem('auth_token', token);
        this.router.navigate(['/message']);
      },
      error: err => {
        console.error(err);
        this.error = 'Invalid email or password';
      }
    });
  }

  onDemoLogin(): void {
    this.email = 'demo@example.com';
    this.password = 'password123';

    this.onSubmit();
  }
}

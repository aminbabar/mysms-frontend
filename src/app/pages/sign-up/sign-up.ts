import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css'],
  imports: [FormsModule, CommonModule, RouterLink]
})
export class SignUpComponent {
  email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) { }

  onRegister() {
    const payload = {
      user: {
        email: this.email,
        password: this.password
      }
    };

    this.http.post(`${environment.apiUrl}/users`, payload, { observe: 'response' })
      .subscribe({
        next: (res: any) => {
          const token = res.headers.get('authorization')?.replace('Bearer ', '');
          if (token) localStorage.setItem('auth_token', token);
          debugger;
          this.router.navigate(['/message']);
        },
        error: () => {
          this.error = 'Unable to sign up. Please try again.';
        }
      });
  }
}

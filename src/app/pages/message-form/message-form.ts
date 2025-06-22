import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-form.html',
  styleUrls: ['./message-form.css']
})
export class MessageFormComponent {
  phone: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const payload = {
      message: {
        to: this.phone,
        body: this.message
      }
    };

    this.http.post(`${environment.apiUrl}/api/v1/messages`, payload).subscribe({
      next: (res) => {
        console.log('Message sent:', res);
        this.onClear();
      },
      error: (err) => {
        console.error('Error sending message:', err);
      }
    });
  }

  onClear() {
    this.phone = '';
    this.message = '';
  }
}
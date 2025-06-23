import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageHistoryComponent } from '../message-history/message-history';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [FormsModule, MessageHistoryComponent],
  templateUrl: './message-form.html',
  styleUrls: ['./message-form.css']
})
export class MessageFormComponent {
  phone = '';
  message = '';
  messages = signal<any[]>([]);

  constructor(private http: HttpClient) {
    this.loadMessages();
  }

  loadMessages() {
    this.http.get<any[]>(`${environment.apiUrl}/api/v1/messages`)
      .subscribe({
        next: res => this.messages.set(res),
        error: err => console.error('Failed to load messages', err)
      });
  }

  onSubmit() {
    const payload = {
      message: {
        to: this.phone,
        body: this.message
      }
    };

    this.http.post(`${environment.apiUrl}/api/v1/messages`, payload)
      .subscribe({
        next: () => {
          this.onClear();
          this.loadMessages();
        },
        error: err => console.error('Submit failed', err)
      });
  }

  onClear() {
    this.phone = '';
    this.message = '';
  }
}

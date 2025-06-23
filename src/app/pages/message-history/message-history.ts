import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-history.html',
  styleUrls: ['./message-history.css']
})
export class MessageHistoryComponent {
  @Input() messages: any[] = [];

  charCount(msg: string): number {
    return msg?.length || 0;
  }
}

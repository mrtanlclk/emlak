import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './iletisim.html',
  styleUrl: './iletisim.scss'
})
export class IletisimComponent {
  title = 'İletişim';
}
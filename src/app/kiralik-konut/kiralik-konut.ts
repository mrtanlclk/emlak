import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kiralik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kiralik-konut.html',
  styleUrl: './kiralik-konut.scss'
})
export class KiralikKonutComponent {
  title = 'Kiralık Konut';
}
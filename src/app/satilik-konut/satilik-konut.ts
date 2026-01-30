import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-satilik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './satilik-konut.html',
  styleUrl: './satilik-konut.scss'
})
export class SatilikKonutComponent {
  title = 'Satılık Konut';
}
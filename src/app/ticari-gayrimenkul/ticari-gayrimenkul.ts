import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticari-gayrimenkul',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticari-gayrimenkul.html',
  styleUrl: './ticari-gayrimenkul.scss'
})
export class TicariGayrimenkulComponent {
  title = 'Ticari Gayrimenkul';
}
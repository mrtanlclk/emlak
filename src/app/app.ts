import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('emlak');
  protected readonly menuOpen = signal(false);
  protected readonly hizmetlerDropdownOpen = signal(false);

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    // Handle fragment scrolling on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        setTimeout(() => {
          const element = document.getElementById(tree.fragment!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.hizmetlerDropdownOpen.set(false);
  }

  toggleHizmetlerDropdown() {
    this.hizmetlerDropdownOpen.set(!this.hizmetlerDropdownOpen());
  }

  closeDropdowns() {
    this.hizmetlerDropdownOpen.set(false);
  }
}

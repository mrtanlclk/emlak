import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TranslationService, type Language } from './services/translation.service';

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
  protected readonly languageDropdownOpen = signal(false);
  protected readonly currentLanguage = signal<Language>('en');
  protected readonly languages: { code: Language; name: string; flag: string }[] = [
    { code: 'tr', name: 'Türkçe', flag: 'TR' },
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'ar', name: 'العربية', flag: 'AR' }
  ];

  constructor(
    private router: Router,
    public translationService: TranslationService
  ) {
    this.currentLanguage = this.translationService.getLanguageSignal();
  }

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

    this.updateMobileLanguageLayout();
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.hizmetlerDropdownOpen.set(false);
    this.languageDropdownOpen.set(false);
  }

  toggleHizmetlerDropdown() {
    this.hizmetlerDropdownOpen.set(!this.hizmetlerDropdownOpen());
  }

  toggleLanguageDropdown() {
    this.languageDropdownOpen.set(!this.languageDropdownOpen());
  }

  setLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.languageDropdownOpen.set(false);
    this.updateMobileLanguageLayout();
  }

  private updateMobileLanguageLayout() {
    const mobileLang = document.querySelector('.mobile-language-dropdown') as HTMLElement | null;
    if (!mobileLang) {
      return;
    }

    if (this.currentLanguage() === 'ar') {
      mobileLang.style.marginRight = 'auto';
      mobileLang.style.marginLeft = '0';
    } else {
      mobileLang.style.marginRight = '';
      mobileLang.style.marginLeft = '';
    }
  }

  getCurrentLanguageFlag(): string {
    const lang = this.currentLanguage();
    const match = this.languages.find(item => item.code === lang);
    return match ? match.flag : '';
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  closeDropdowns() {
    this.hizmetlerDropdownOpen.set(false);
    this.languageDropdownOpen.set(false);
  }
}

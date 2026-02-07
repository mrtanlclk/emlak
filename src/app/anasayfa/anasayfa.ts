import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { MetaService } from '../services/meta.service';
import { TranslationService } from '../services/translation.service';

register();

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anasayfa.html',
  styleUrl: './anasayfa.scss'
})
export class AnasayfaComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('heroSwiper')
  private heroSwiper?: ElementRef<HTMLElement & { swiper?: any }>;

  private resizeDebounce?: number;
  private viewReady = false;

  slides = [
    {
      title: 'Hayalinizdeki ev sizleri bekliyor',
      subtitle: 'Satılık ve Kiralık Emlak Danışmanlığı',
      image: 'assets/img/dubai-1.jpg'
    },
    {
      title: 'Güvenilir Emlak Danışmanlığı',
      subtitle: 'Yatırımınızı güvenceye alın',
      image: 'assets/img/dubai-2.jpg'
    },
    {
      title: 'Ticari ve Konut Projeleri',
      subtitle: 'Profesyonel emlak hizmetleri',
      image: 'assets/img/dubai-3.jpg'
    }
  ];

  testimonials = [
    {
      text: 'testimonial1Eda',
      author: 'testimonial1EdaAuthor'
    },
    {
      text: 'testimonial2Mazhar',
      author: 'testimonial2MazharAuthor'
    },
    {
      text: 'testimonial3Mert',
      author: 'testimonial3MertAuthor'
    }
  ];

  constructor(
    private router: Router,
    private metaService: MetaService,
    public translationService: TranslationService
  ) {
    this.setPageMeta();
    
    // Track language changes and update slides accordingly
    effect(() => {
      this.translationService.getLanguage();
      this.updateSlidesLanguage();
      if (!this.viewReady) {
        return;
      }

      // Reinitialize swiper after language change to refresh slide content
      setTimeout(() => {
        this.reinitializeSwiper();
        this.updateSwiper();
      }, 0);
    });
  }

  ngOnInit() {
    this.updateSlidesLanguage();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'ZV Line Real Estate - Emlak Satış ve Kiralama',
      description: 'ZV Line Real Estate ile lüksüs konut, ticari gayrimenkul ve emlak kiralama hizmetleri. Profesyonel danışmanlarımız size yardımcı olacaktır.',
      keywords: 'emlak, gayrimenkul satışı, konut kiralama, yatırım, emlak danışmanlığı',
      ogTitle: 'ZV Line Real Estate - Emlak Satış ve Kiralama',
      ogDescription: 'Lüksüs konut, ticari gayrimenkul ve emlak kiralama hizmetleri',
      url: this.metaService.getBaseUrl()
    });

    // Set structured data for Organization
    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ZV Line Real Estate',
      'alternateName': 'ZV Line',
      'url': this.metaService.getBaseUrl(),
      'logo': this.metaService.getBaseUrl() + '/assets/img/colored-logo.svg',
      'description': 'Emlak satış ve kiralama hizmetleri sunmaktadır',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'availableLanguage': ['tr', 'en']
      },
      'sameAs': [
        'https://www.facebook.com/zvline',
        'https://www.instagram.com/zvline',
        'https://www.linkedin.com/company/zvline'
      ]
    });
  }

  ngAfterViewInit() {
    this.viewReady = true;
    this.updateSwiper();
  }

  @HostListener('window:resize')
  onResize() {
    // Debounce to avoid thrashing update calls on continuous resize
    window.clearTimeout(this.resizeDebounce);
    this.resizeDebounce = window.setTimeout(() => {
      this.updateSwiper();
      this.reinitializeSwiper();
    }, 200);
  }

  @HostListener('window:orientationchange')
  onOrientationChange() {
    // Handle orientation changes on mobile devices
    setTimeout(() => {
      this.updateSwiper();
      this.reinitializeSwiper();
    }, 300);
  }

  ngOnDestroy() {
    if (this.resizeDebounce) {
      window.clearTimeout(this.resizeDebounce);
    }
  }

  goToTeklif() {
    this.router.navigate(['/teklif']);
  }

  private updateSwiper() {
    const swiperInstance = this.heroSwiper?.nativeElement?.swiper;
    if (!swiperInstance?.update) {
      return;
    }

    const slides = swiperInstance.slides;
    if (!slides || !slides.length) {
      return;
    }

    swiperInstance.update();
    swiperInstance.updateSlides?.();
    swiperInstance.updateSize?.();
  }

  private reinitializeSwiper() {
    const swiperElement = this.heroSwiper?.nativeElement as any;
    const swiperInstance = swiperElement?.swiper;
    
    if (swiperInstance) {
      // Swiper'ı yok et ve yeniden oluştur
      swiperInstance.destroy(true, true);
      
      // Kısa bir gecikme ile yeniden başlat
      setTimeout(() => {
        if (swiperElement?.initialize) {
          swiperElement.initialize();
        }
      }, 100);
    }
  }

  private updateSlidesLanguage() {
    const lang = this.translationService.getLanguage();
    if (lang === 'tr') {
      this.slides = [
        {
          title: 'Hayalinizdeki ev sizleri bekliyor',
          subtitle: 'Satılık ve Kiralık Emlak Danışmanlığı',
          image: 'assets/img/dubai-1.jpg'
        },
        {
          title: 'Güvenilir Emlak Danışmanlığı',
          subtitle: 'Yatırımınızı güvenceye alın',
          image: 'assets/img/dubai-2.jpg'
        },
        {
          title: 'Ticari ve Konut Projeleri',
          subtitle: 'Profesyonel emlak hizmetleri',
          image: 'assets/img/dubai-3.jpg'
        }
      ];
    } else if (lang === 'en') {
      this.slides = [
        {
          title: 'Your dream home is waiting for you',
          subtitle: 'Property Sales and Rental Consulting',
          image: 'assets/img/dubai-1.jpg'
        },
        {
          title: 'Reliable Real Estate Consulting',
          subtitle: 'Secure your investment',
          image: 'assets/img/dubai-2.jpg'
        },
        {
          title: 'Commercial and Residential Projects',
          subtitle: 'Professional real estate services',
          image: 'assets/img/dubai-3.jpg'
        }
      ];
    } else if (lang === 'ar') {
      this.slides = [
        {
          title: 'منزلك الذي تحلم به ينتظرك',
          subtitle: 'استشارات بيع وتأجير العقارات',
          image: 'assets/img/dubai-1.jpg'
        },
        {
          title: 'استشارات عقارية موثوقة',
          subtitle: 'أمن استثمارك',
          image: 'assets/img/dubai-2.jpg'
        },
        {
          title: 'مشاريع تجارية وسكنية',
          subtitle: 'خدمات عقارية احترافية',
          image: 'assets/img/dubai-3.jpg'
        }
      ];
    }
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}

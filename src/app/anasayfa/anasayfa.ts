import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './anasayfa.html',
  styleUrl: './anasayfa.scss'
})
export class AnasayfaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSwiper')
  private heroSwiper?: ElementRef<HTMLElement & { swiper?: any }>;

  private resizeDebounce?: number;

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

  constructor(private router: Router) {}

  ngAfterViewInit() {
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
}

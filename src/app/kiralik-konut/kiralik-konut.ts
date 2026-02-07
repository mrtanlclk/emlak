import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-kiralik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kiralik-konut.html',
  styleUrl: './kiralik-konut.scss'
})
export class KiralikKonutComponent {
  title = 'Kiralık Konut';

  constructor(
    private metaService: MetaService,
    public translationService: TranslationService
  ) {
    this.setPageMeta();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'Kiralık Konut - Emlak | ZV Line Real Estate',
      description: 'Kiralık konut fırsatlarını bulun. Studentler, profesyoneller ve aileler için uygun daireler ve evler.',
      keywords: 'kiralık konut, daire kiralama, ev kiralama, apartman kiralama',
      ogTitle: 'Kiralık Konut - Emlak',
      ogDescription: 'Kiralık konutlar ve daireler',
      url: this.metaService.getBaseUrl() + '/kiralik-konut'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Kiralık Konut',
      'description': 'Kiralık konut danışmanlığı hizmetleri',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Türkiye'
    });
  }
}
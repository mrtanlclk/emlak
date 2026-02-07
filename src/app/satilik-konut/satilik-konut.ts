import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-satilik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './satilik-konut.html',
  styleUrl: './satilik-konut.scss'
})
export class SatilikKonutComponent {
  title = 'Satılık Konut';

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
      title: 'Satılık Konut - Emlak | ZV Line Real Estate',
      description: 'Satılık konut fırsatlarını keşfedin. Lüksüs daireler, villalar ve modern konutlar hakkında bilgi alın.',
      keywords: 'satılık konut, emlak satışı, lüksüs daire, villa, modern konut',
      ogTitle: 'Satılık Konut - Emlak',
      ogDescription: 'Satılık lüksüs konut projelerine göz atın',
      url: this.metaService.getBaseUrl() + '/satilik-konut'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Satılık Konut',
      'description': 'Satılık konut danışmanlığı hizmetleri',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Türkiye'
    });
  }
}
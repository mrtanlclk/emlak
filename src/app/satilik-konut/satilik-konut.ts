import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-satilik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './satilik-konut.html',
  styleUrl: './satilik-konut.scss'
})
export class SatilikKonutComponent {
  title = 'Satılık Konut';

  constructor(private metaService: MetaService) {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'Satılık Konut - Dubai Emlak | ZV Line Real Estate',
      description: 'Dubai\'de satılık konut fırsatlarını keşfedin. Lüksüs daireler, villalar ve modern konutlar hakkında bilgi alın.',
      keywords: 'satılık konut Dubai, emlak satışı, lüksüs daire, villa, modern konut',
      ogTitle: 'Satılık Konut - Dubai Emlak',
      ogDescription: 'Dubai\'de satılık lüksüs konut projelerine göz atın',
      url: this.metaService.getBaseUrl() + '/satilik-konut'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Satılık Konut',
      'description': 'Dubai\'de satılık konut danışmanlığı hizmetleri',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Dubai'
    });
  }
}
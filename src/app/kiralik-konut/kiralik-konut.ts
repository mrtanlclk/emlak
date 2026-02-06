import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-kiralik-konut',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kiralik-konut.html',
  styleUrl: './kiralik-konut.scss'
})
export class KiralikKonutComponent {
  title = 'Kiralık Konut';

  constructor(private metaService: MetaService) {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'Kiralık Konut - Dubai Emlak | ZV Line Real Estate',
      description: 'Dubai\'de kiralık konut fırsatlarını bulun. Studentler, profesyoneller ve aileler için uygun daireler ve evler.',
      keywords: 'kiralık konut Dubai, daire kiralama, ev kiralama, apartman kiralama',
      ogTitle: 'Kiralık Konut - Dubai Emlak',
      ogDescription: 'Dubai\'de kiralık konutlar ve daireler',
      url: this.metaService.getBaseUrl() + '/kiralik-konut'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Kiralık Konut',
      'description': 'Dubai\'de kiralık konut danışmanlığı hizmetleri',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Dubai'
    });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './iletisim.html',
  styleUrl: './iletisim.scss'
})
export class IletisimComponent {
  title = 'İletişim';

  constructor(private metaService: MetaService) {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'İletişim - ZV Line Real Estate',
      description: 'ZV Line Real Estate ile iletişime geçin. Dubai emlak danışmanlığı için sorularınızı sorun veya randevu alın.',
      keywords: 'iletişim, ZV Line Real Estate, emlak danışmanlığı, destek, randevu',
      ogTitle: 'İletişim - ZV Line Real Estate',
      ogDescription: 'Bizimle iletişime geçin ve Dubai emlak projeleri hakkında bilgi alın',
      url: this.metaService.getBaseUrl() + '/iletisim'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'ZV Line Real Estate',
      'description': 'Dubai\'de emlak satış ve kiralama hizmetleri',
      'url': this.metaService.getBaseUrl() + '/iletisim',
      'telephone': '+971XXXXXXXXX',
      'email': 'info@zvline.com.tr',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'UAE'
      }
    });
  }
}
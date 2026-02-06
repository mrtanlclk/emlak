import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hakkimizda.html',
  styleUrl: './hakkimizda.scss'
})
export class HakkimizdaComponent {
  constructor(private metaService: MetaService) {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'Hakkımızda - ZV Line Real Estate',
      description: 'ZV Line Real Estate hakkında bilgi edinin. Emlak sektöründe yılların deneyimi ile müşterilerine en iyi hizmetleri sunmaktadır.',
      keywords: 'ZV Line Real Estate hakkında, emlak danışmanlığı, gayrimenkul, profesyonel takım',
      ogTitle: 'Hakkımızda - ZV Line Real Estate',
      ogDescription: 'Emlak sektöründe lider bir şirket olarak hizmet vermektedir',
      url: this.metaService.getBaseUrl() + '/hakkimizda'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'ZV Line Real Estate',
      'description': 'Dubai\'de emlak satış ve kiralama hizmetleri sunmaktadır',
      'url': this.metaService.getBaseUrl() + '/hakkimizda',
      'areaServed': 'Dubai, UAE'
    });
  }
}
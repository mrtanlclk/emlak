import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-ticari-gayrimenkul',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticari-gayrimenkul.html',
  styleUrl: './ticari-gayrimenkul.scss'
})
export class TicariGayrimenkulComponent {
  title = 'Ticari Gayrimenkul';

  constructor(private metaService: MetaService) {
    this.setPageMeta();
  }

  private setPageMeta() {
    this.metaService.setMetaTags({
      title: 'Ticari Gayrimenkul - Dubai Yatırım Fırsatları | ZV Line Real Estate',
      description: 'Dubai\'de ticari gayrimenkul yatırım fırsatları. Ofis, magaza, atölye ve yatırım projeleri hakkında bilgi alın.',
      keywords: 'ticari gayrimenkul Dubai, ofis, magaza, atölye, yatırım, ticari alanlar',
      ogTitle: 'Ticari Gayrimenkul - Dubai Yatırım Fırsatları',
      ogDescription: 'Dubai\'de ticari gayrimenkul ve yatırım projeleri',
      url: this.metaService.getBaseUrl() + '/ticari-gayrimenkul'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Ticari Gayrimenkul',
      'description': 'Dubai\'de ticari gayrimenkul danışmanlığı ve yatırım fırsatları',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Dubai'
    });
  }
}
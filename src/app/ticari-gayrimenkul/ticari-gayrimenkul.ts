import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MetaService } from '../services/meta.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-ticari-gayrimenkul',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticari-gayrimenkul.html',
  styleUrl: './ticari-gayrimenkul.scss'
})
export class TicariGayrimenkulComponent {
  title = 'Ticari Gayrimenkul';

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
      title: 'Ticari Gayrimenkul - Yatırım Fırsatları | ZV Line Real Estate',
      description: 'Ticari gayrimenkul yatırım fırsatları. Ofis, magaza, atölye ve yatırım projeleri hakkında bilgi alın.',
      keywords: 'ticari gayrimenkul, ofis, magaza, atölye, yatırım, ticari alanlar',
      ogTitle: 'Ticari Gayrimenkul - Yatırım Fırsatları',
      ogDescription: 'Ticari gayrimenkul ve yatırım projeleri',
      url: this.metaService.getBaseUrl() + '/ticari-gayrimenkul'
    });

    this.metaService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Ticari Gayrimenkul',
      'description': 'Ticari gayrimenkul danışmanlığı ve yatırım fırsatları',
      'provider': {
        '@type': 'Organization',
        'name': 'ZV Line Real Estate'
      },
      'areaServed': 'Türkiye'
    });
  }
}
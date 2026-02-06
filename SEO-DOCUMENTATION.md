# SEO Implementation Guide - ZV Line Real Estate

## Genel Bakış (Overview)
Bu dokümanda, ZV Line Real Estate websitesine eklenmiş SEO iyileştirmelerinin detaylı açıklaması bulunmaktadır.

## 1. Meta Service (`src/app/services/meta.service.ts`)

### Amaç
Angular uygulamasında dinamik meta tag yönetimi ve yapılandırılmış veri (JSON-LD) eklenmesini sağlar.

### Özellikleri
- **setMetaTags()**: Sayfa başlığı, açıklaması, anahtar kelimeler ve sosyal medya taglarını ayarlar
  - `title`: Sayfa başlığı
  - `description`: Meta açıklaması (160 karakter altında tutulmalı)
  - `keywords`: Anahtar kelimeler
  - `ogTitle`, `ogDescription`, `ogImage`: OpenGraph tagleri
  - `url`: Sayfanın kanonik URL'i

- **setStructuredData()**: JSON-LD yapılandırılmış veri ekler
  - Arama motorlarının içeriği daha iyi anlaması sağlar
  - Schema.org standartlarına uygun

- **getBaseUrl()**: Sitenin temel URL'ini döndürür

### Kullanım Örneği
```typescript
constructor(private metaService: MetaService) {
  this.metaService.setMetaTags({
    title: 'Sayfa Başlığı',
    description: 'Sayfa açıklaması',
    keywords: 'anahtar kelime1, anahtar kelime2',
    ogTitle: 'Sosyal Medya Başlığı',
    ogDescription: 'Sosyal Medya Açıklaması',
    url: this.metaService.getBaseUrl() + '/yol'
  });
}
```

## 2. HTML Meta Tags (src/index.html)

### Eklenen Taglar

#### Açıklama Tagleri
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="ZV Line Real Estate">
<meta name="robots" content="index, follow">
<meta name="language" content="Turkish">
```

#### OpenGraph Tagleri (Sosyal Medya)
```html
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:site_name" content="...">
```

#### Twitter Card Tagleri
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

#### Teknik Taglar
```html
<link rel="canonical" href="...">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<meta name="theme-color" content="#2d3748">
```

## 3. Robots.txt (public/robots.txt)

### Amaç
Arama motoru robotlarına sitenin hangi kısımlarını taraması gerektiğini söyler.

### İçerik
- Tüm arama motorlarına erişim izni verir
- Admin ve API uç noktalarına erişimi yasaklar
- Sitemap.xml konumunu belirtir

## 4. Sitemap.xml (public/sitemap.xml)

### Amaç
Tüm sayfaların adresi ve güncelleme sıklığını arama motorlarına sağlar.

### Sayfalar
- Anasayfa (priority: 1.0, changefreq: weekly)
- Hakkımızda (priority: 0.8, changefreq: monthly)
- Satılık Konut (priority: 0.9, changefreq: weekly)
- Kiralık Konut (priority: 0.9, changefreq: weekly)
- Ticari Gayrimenkul (priority: 0.9, changefreq: weekly)
- İletişim (priority: 0.8, changefreq: monthly)

## 5. .htaccess Yapılandırması (public/.htaccess)

### Özellikleri

#### URL Yeniden Yazma
- HTTP isteklerini HTTPS'ye yönlendirir
- Angular yönlendirmesi için tüm istekleri index.html'e yönlendirir

#### Gzip Sıkıştırma
- HTML, CSS, JavaScript dosyalarını sıkıştırır
- Sayfa yükleme hızını artırır

#### Tarayıcı Cache'i
- Görseller: 1 yıl
- CSS/JavaScript: 1 ay
- HTML: Her ziyaret

#### Güvenlik Başlıkları
- X-Content-Type-Options: MIME type sniffing'i önler
- X-Frame-Options: Clickjacking saldırılarını önler
- X-XSS-Protection: XSS saldırılarını önler

## 6. Sayfya Başı Meta Taglar

Her sayfa bileşeni aşağıdaki SEO bilgilerini içerir:

### Anasayfa
- Title: "ZV Line Real Estate - Emlak Satış ve Kiralama"
- Açıklama: Lüksüs konut ve gayrimenkul hizmetleri
- Structured Data: Organization schema

### Hakkımızda
- Title: "Hakkımızda - ZV Line Real Estate"
- Açıklama: Şirket hakkında bilgi
- Structured Data: LocalBusiness schema

### Satılık Konut
- Title: "Satılık Konut - Emlak | ZV Line Real Estate"
- Açıklama: Satılık konut seçenekleri
- Structured Data: Service schema

### Kiralık Konut
- Title: "Kiralık Konut - Emlak | ZV Line Real Estate"
- Açıklama: Kiralık konut seçenekleri
- Structured Data: Service schema

### Ticari Gayrimenkul
- Title: "Ticari Gayrimenkul - Yatırım Fırsatları | ZV Line Real Estate"
- Açıklama: Ticari gayrimenkul fırsatları
- Structured Data: Service schema

### İletişim
- Title: "İletişim - ZV Line Real Estate"
- Açıklama: İletişim bilgileri
- Structured Data: LocalBusiness schema

## 7. Anahtar Kelimeler Stratejisi

### Birincil Anahtar Kelimeler
- Emlak
- Gayrimenkul satışı
- Konut kiralama
- Yatırım

### İkincil Anahtar Kelimeler
- Lüksüs daire
- Villa satışı
- Ofis kiralama
- Ticari alanlar
- Emlak danışmanlığı

## 8. Teknik SEO Iyileştirmeleri

### Mobile Uyumluluğu
- Responsive tasarım ✓
- Viewport meta tag ✓
- Dokunmatik navigasyon ✓

### Sayfa Hızı
- Gzip sıkıştırma ✓
- Browser caching ✓
- CDN tavsiye edilir

### Erişilebilirlik
- Alt text tüm görsellerde ✓
- Başlık hiyerarşisi (H1, H2, H3) ✓
- Semantic HTML ✓

## 9. Google Search Console İçin

1. **Sitemap Gönder**: Google Search Console'da `sitemap.xml` gönder
2. **Robots.txt Kontrol Et**: robots.txt dosyasının doğru yapılandırıldığını kontrol et
3. **Canonicalization**: Canonical taglar kontrol edilir
4. **Mobil Uyumluluk**: Mobile-friendly testi geçer

## 10. İyileştirme Önerileri

### Kısa Vadeli
1. Google Search Console'da sitemi kaydet
2. Sitemap.xml ve robots.txt'i gönder
3. Backlink alma
4. İçerik kalitesini arttır

### Orta Vadeli
1. Local SEO (Google My Business)
2. Şehir sayfaları (İstanbul, Ankara, Izmir, vb.)
3. Blog bölümü ekle
4. Müşteri yorumları ekle

### Uzun Vadeli
1. Authority sitelerde backlink al
2. Sosyal medya varlığını güçlendir
3. Regular içerik güncellemeleri
4. Voice search optimizasyonu

## 11. SEO Kontrolü İçin Araçlar

- Google Search Console
- Google PageSpeed Insights
- Ubersuggest
- SEMrush
- Ahrefs
- Moz

## 12. Canonical URL

Tüm sayfalar için canonical URL set edilmiştir:
```
https://zvline.com.tr
https://zvline.com.tr/hakkimizda
https://zvline.com.tr/satilik-konut
https://zvline.com.tr/kiralik-konut
https://zvline.com.tr/ticari-gayrimenkul
https://zvline.com.tr/iletisim
```

## Not
- Domain adı `https://zvline.com.tr` olarak varsayılmıştır
- Gerçek domain ile `.htaccess` ve `sitemap.xml` güncellenmelidir
- Telefon ve email bilgileri `iletisim.ts` dosyasında güncellenmelidir

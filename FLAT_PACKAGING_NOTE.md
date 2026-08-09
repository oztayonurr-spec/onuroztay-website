# MASTER v9 FLAT

Bu paket MASTER v9'un içerik ve tasarımını değiştirmez.

Teknik değişiklik:
- `assets/styles.css` içeriği HTML sayfalarının içine aynen gömülmüştür.
- `assets/app.js` ve proje sayfasındaki `assets/projects.js` içerikleri HTML içine aynen gömülmüştür.
- Kullanılan yerel görseller aynı dosya baytlarıyla data URI olarak ilgili HTML'e gömülmüştür.
- Favicon aynı SVG baytlarıyla HTML içine gömülmüştür.
- Bu nedenle GitHub'a `assets` klasörü yüklemek gerekmez.

Amaç: iPhone'dan yalnızca ana dizindeki dosyaları yükleyerek MASTER v9 ile aynı görünüm ve içeriği yayınlayabilmek.

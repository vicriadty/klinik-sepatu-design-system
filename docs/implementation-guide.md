# Panduan Implementasi

## Urutan CSS

Load `styles/base.css` lalu `styles/components.css`. `base.css` mengimpor `tokens.css`. Jangan mengubah token dalam halaman demo.

## Pola Halaman

Gunakan landmark `header > nav`, satu `main`, section yang berjudul, dan `footer`. Header memakai lockup horizontal di desktop dan icon resmi pada mobile. Footer memakai lockup bertumpuk. Gunakan WhatsApp resmi untuk konsultasi:

`https://api.whatsapp.com/send/?phone=6287712783593&text&type=phone_number&app_absent=0`

## Konten Service

Kartu treatment perlu nama, ringkasan, `meta-row`, dan CTA konsultasi. Jangan mengganti rentang repair menjadi harga tunggal atau “mulai dari”. Cantumkan unit cleaning per pasang, Gear Care per item, dan hari kalender bila konteksnya harga/estimasi.

## Real Media

Jangan memakai data URI atau menyalin wireframe. Isi `.card__media` dengan foto resmi/Drive yang sudah disetujui dan pertahankan alt yang menggambarkan isi foto, bukan klaim hasil. Foto model boleh digunakan. Before/after Drive telah dipetakan menurut service, jadi tampilkan label service yang bersesuaian saat memasukkan foto tersebut.

## Review

Periksa target sentuh, tab keyboard, focus ring, konten reduced motion, dan CTA mobile yang sticky. Jalankan `npm run check`.

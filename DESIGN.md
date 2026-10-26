---
version: alpha
name: Klinik Sepatu
description: Editorial monochrome design system for a mobile-first shoe-care workshop decision and learning experience.
colors:
  primary: "#101010"
  secondary: "#5B5B56"
  tertiary: "#176B45"
  neutral: "#F5F5F2"
  white: "#FFFFFF"
  line: "#C9C9C4"
  danger: "#A32121"
  notice: "#765B00"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.045em"
  h1:
    fontFamily: ui-sans-serif
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  h2:
    fontFamily: ui-sans-serif
    fontSize: 2rem
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  h3:
    fontFamily: ui-sans-serif
    fontSize: 1.25rem
    fontWeight: 750
    lineHeight: 1.2
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: 0px
  control: 0px
  card: 0px
  pill: 999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  6: 24px
  8: 32px
  12: 48px
  16: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body-md}"
    rounded: "{rounded.control}"
    padding: 12px
    height: 44px
  button-primary-hover:
    backgroundColor: "#292929"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.control}"
    padding: 12px
    height: 44px
  badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 8px
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: 16px
  card-inverse:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: 16px
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
    padding: 12px
    height: 44px
---

## Overview

Klinik Sepatu adalah sistem **Decide / Learn** untuk membantu pelanggan memahami kemungkinan treatment dan memulai konsultasi foto. Sistem ini bukan dashboard. Bahasa visualnya editorial monokrom, berjarak rapat seperti label workshop, dan mengutamakan bukti pengerjaan nyata. WhatsApp adalah jalur aksi utama ketika keputusan memerlukan pemeriksaan kondisi.

## Colors

- **Primary / ink:** teks utama, aturan, bidang inverse, dan CTA WhatsApp.
- **Neutral / paper:** kanvas hangat agar logo gelap dan dokumentasi workshop tetap jelas.
- **Secondary / muted:** metadata sekunder; jangan gunakan untuk teks kecil di atas paper bila kontras tidak memadai.
- **Tertiary / success:** hanya untuk status berhasil, bukan warna dekoratif merek.
- **Danger:** hanya untuk kesalahan yang perlu tindakan.
- Jangan menambah gradient, glass effect, atau warna aksen dekoratif.

## Typography

Gunakan system sans yang presisi agar tidak ada ketergantungan font eksternal. Display dan heading memakai tracking rapat; body tetap lapang. Gunakan mono hanya untuk eyebrow, harga, estimasi, nomor urut, dan metadata teknis. Jangan membuat setiap label menjadi uppercase.

## Layout

Gunakan skala 4px. Lebar konten maksimum 72rem dengan gutter 16px pada mobile dan minimal 32px pada layar lebar. Ritme section adalah 32px pada mobile dan 48px pada desktop. Breakpoint referensi: 30rem, 48rem, 64rem, dan 80rem. Susun informasi dalam urutan keputusan: masalah, kemungkinan layanan, harga/estimasi, bukti, lalu CTA konsultasi.

## Elevation & Depth

Gunakan `--elevation-raised` sebagai shadow-as-border satu piksel. Bayangan offset hanya untuk CTA mobile yang perlu terasa tertambat. Jangan memakai soft shadow bertumpuk. Bidang gelap, garis, dan ruang kosong harus menciptakan hierarki sebelum elevation ditambahkan.

## Shapes

Kontrol dan kartu bersudut siku untuk karakter kerja bengkel. Bentuk pill hanya untuk badge status. Target interaksi minimum 44px. Logo harus diletakkan pada bidang terang; jangan merekayasa ulang warna atau proporsinya.

## Components

- **Buttons dan links:** satu aksi jelas. Gunakan primary untuk WhatsApp, secondary untuk navigasi keputusan, dan quiet link untuk referensi.
- **Header/nav:** sticky dengan border tipis; lockup horizontal di desktop dan icon resmi di mobile.
- **Sticky mobile CTA:** hanya satu CTA WhatsApp dominan, dengan safe-area spacing.
- **Cards:** treatment, product, dan proof memakai struktur yang sama tetapi konten berbeda. Slot media bukan gambar palsu.
- **Meta rows:** harga, unit, estimasi, dan sumber harus dapat dipindai dan tidak menyamarkan rentang harga.
- **Fields:** native input, label terlihat, bantuan tekstual, dan state error/success yang tidak bergantung pada warna saja.
- **FAQ:** gunakan `details`/`summary` sebelum JavaScript.
- **States:** sediakan hover, focus-visible, active, disabled, loading, error, dan success saat relevan.

## Do's and Don'ts

**Do**

- Tulis “kemungkinan layanan” sampai foto diperiksa.
- Nyatakan cleaning per pasang, Gear Care per item, repair sebagai rentang, dan estimasi dalam hari kalender.
- Gunakan dokumentasi before/after yang sudah dipetakan menurut service.
- Hormati `prefers-reduced-motion` dan pertahankan fokus keyboard yang terlihat.

**Don't**

- Jangan menjanjikan “kembali seperti baru”, “pasti bersih”, atau hasil universal.
- Jangan membuat pola dashboard SaaS, kartu kaca, gradient dekoratif, atau iconografi inventif.
- Jangan mengubah logo, mengarang foto hasil, atau menyimpulkan treatment final dari kartu.
- Jangan membuat disclaimer komplain yang menghapus hak konsumen.
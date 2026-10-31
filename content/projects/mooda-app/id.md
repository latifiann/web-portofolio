---
locale: id
title: Mooda App
summary: Aplikasi mobile ride-hailing berbasis Flutter untuk penumpang, dikembangkan selama magang sebagai satu-satunya mobile developer di tim. Saya membangun alur autentikasi, pemesanan perjalanan, status perjalanan secara langsung, penilaian, dan riwayat dengan mengintegrasikan backend tim.
cardSummary: Prototipe ride-hailing berbasis Flutter untuk penumpang, dikembangkan selama magang sebagai satu-satunya mobile developer di tim.
roleSummary: Mobile Developer · PT Piramida Teknologi Informasi
seoDescription: Studi kasus Mooda App tentang peran saya sebagai satu-satunya mobile developer pada prototipe ride-hailing Flutter dengan pelacakan perjalanan langsung.
mediaAlt:
  hero: Tiga layar ponsel menampilkan Mooda App, dengan peta dan tombol Request a Ride, splash screen, serta formulir perjalanan berisi lokasi jemput, tujuan, jenis kendaraan, dan opsi pembayaran.
mediaCaption:
  hero: Visual ini menampilkan aplikasi penumpang yang saya bangun selama magang. Tangkapan layar menggunakan data demo. Backend dan frontend web yang dibangun tim tidak ditampilkan.
outcomeSummary: Tim menghasilkan prototipe ride-hailing yang berfungsi untuk penumpang dan pengemudi. Prototipe ini tidak dipublikasikan di app store, dan kode sumber tetap dimiliki perusahaan.
highlights:
  - label: Kontribusi
    value: Aplikasi penumpang secara menyeluruh
    note: Autentikasi, pemesanan dan pembatalan, status perjalanan secara langsung, penilaian, profil, dan riwayat.
  - label: Integrasi
    value: REST API dan Socket.IO
    note: Dio untuk permintaan ke backend dan Socket.IO untuk pembaruan perjalanan secara langsung.
  - label: Status proyek
    value: Prototipe, belum dirilis
    note: Prototipe ride-hailing internal yang tidak dipublikasikan di app store.
---

## Gambaran umum

Mooda App adalah aplikasi ride-hailing untuk memesan perjalanan, dikembangkan selama magang saya di PT Piramida Teknologi Informasi pada Juli–Desember 2025. Tim beranggotakan empat orang bekerja dengan proses gabungan Agile-Waterfall: dua backend developer, satu frontend web developer, dan saya sebagai satu-satunya mobile developer.

Saya membangun aplikasi mobile untuk penumpang. Backend API dan frontend web dibangun oleh rekan tim, sehingga studi kasus ini hanya membahas sisi mobile. Kode sumber dimiliki perusahaan, sehingga tidak ada tautan repository yang dipublikasikan. Tangkapan layar menggunakan data demo.

Aplikasi menggunakan feature-based layered architecture. Riverpod menangani state management, GoRouter mengatur navigasi berdasarkan status autentikasi, Hive menyimpan session lokal, dan Dio menghubungkan aplikasi ke REST API tim. Pembaruan perjalanan diterima melalui Socket.IO, sementara Google Maps menangani geolocation, reverse geocoding, pemilihan lokasi, dan pembaruan lokasi pengemudi.

## Tanggung jawab saya

- Membangun aplikasi mobile penumpang dengan Flutter sebagai satu-satunya mobile developer di tim, mulai dari antarmuka hingga integrasi backend.
- Mengimplementasikan autentikasi, pemesanan dan pembatalan perjalanan, status perjalanan secara langsung, penilaian, profil, status pengemudi, dan riwayat perjalanan.
- Menghubungkan aplikasi ke backend tim melalui REST API dengan Dio dan menerima pembaruan perjalanan melalui Socket.IO.
- Mengintegrasikan Google Maps untuk geolocation, reverse geocoding, pemilihan lokasi, dan pelacakan lokasi pengemudi.
- Mengelola state dengan Riverpod, navigasi dengan GoRouter, dan session lokal dengan Hive dalam feature-based layered architecture.
- Mendesain antarmuka di Figma dan menguji alur penumpang serta pengemudi secara manual di Android.

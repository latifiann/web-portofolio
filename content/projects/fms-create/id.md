---
locale: id
title: FMS-CREATE
summary: Aplikasi Flutter sisi penumpang untuk operasional armada kendaraan listrik, dibangun secara individu di dalam ekosistem FMS lintas platform dengan arsitektur modular monolith, bersama varian prototipe untuk operator.
cardSummary: Aplikasi Flutter sisi penumpang untuk operasional armada kendaraan listrik, dibangun dengan arsitektur modular, REST API, SSE, dan Google Maps.
roleSummary: Mobile Developer · Tugas akhir perkuliahan
seoDescription: Studi kasus FMS-CREATE tentang aplikasi Flutter sisi penumpang dan prototipe operator yang saya bangun di ekosistem armada kendaraan listrik.
mediaAlt:
  hero: Layar mobile FMS-CREATE sisi penumpang di samping antarmuka dashboard armada dari ekosistem tim yang lebih luas.
mediaCaption:
  hero: Visual ini menampilkan ekosistem FMS-CREATE secara lebih luas. Antarmuka dashboard termasuk konteks operasional armada tim. Studi kasus ini berfokus pada varian mobile yang saya bangun.
outcomeSummary: Aplikasi penumpang dan prototipe operator selesai sebagai tugas akhir perkuliahan, dengan pengujian manual dan otomatis untuk perilaku aplikasi dan kepatuhan aturan arsitektur. Kedua build Android tetap internal.
highlights:
  - label: Kontribusi
    value: Aplikasi penumpang dan prototipe operator
    note: Membangun kedua varian mobile di dalam ekosistem FMS tim.
  - label: Arsitektur
    value: Modular monolith
    note: Varian dirakit dari modul sebelum build APK, bukan dipasang saat aplikasi berjalan.
  - label: Status proyek
    value: Selesai, build internal
    note: Varian operator tetap berupa prototipe. Kedua varian belum dirilis di app store.
---

## Gambaran umum

FMS-CREATE adalah sistem manajemen armada untuk operasional bus listrik. Penumpang memakai aplikasi mobile untuk melihat rute, halte, estimasi kedatangan, dan posisi bus secara langsung. Varian kedua melayani operator armada.

Aplikasi ini menjadi tugas akhir saya untuk program studi Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS). Saya membangun aplikasi sisi penumpang dan seluruh prototipe operator secara individu, di dalam ekosistem yang lebih luas yang dikerjakan tim lintas platform. Basis kode mobile berbentuk modular monolith, dirancang agar modulnya dapat diorkestrasi menjadi beberapa varian aplikasi. Setiap varian dirakit dengan memilih sekumpulan modul sebelum build APK. Pemilihan modul terjadi saat build, bukan secara dinamis ketika aplikasi berjalan.

Rekan tim membangun Nusantara EV Connect, aplikasi orkestrasi yang menyediakan pemilih modul dan mengotomatiskan build APK. Saya tidak membangun alat orkestrasi tersebut. Repository bersifat privat dan kedua build Android tetap internal, sehingga proyek ini tidak punya listing di store maupun demo publik.

## Tanggung jawab saya

- Membangun aplikasi mobile sisi penumpang di atas modular monolith dengan satu runner, lima feature module, dan empat core module.
- Membangun seluruh varian operator sebagai prototipe di atas fondasi modular yang sama.
- Merakit setiap varian dengan arsitektur modular monolith melalui registrasi modul saat build dan saat inisialisasi, tanpa pemasangan modul ketika aplikasi berjalan.
- Mengimplementasikan autentikasi OTP, pemulihan sesi, dashboard mobile, dan pelacakan kendaraan dengan Google Maps.
- Mengintegrasikan REST API untuk pemuatan data awal dan Server-Sent Events untuk pembaruan lokasi secara langsung.
- Menangani stream lifecycle, exponential backoff, secure storage, dan pemulihan koneksi yang menyesuaikan kondisi jaringan.
- Mengembangkan shared infrastructure dan komponen UI yang dapat dipakai ulang dengan Riverpod, GoRouter, dan Dio.
- Menjalankan pengujian manual dan otomatis untuk perilaku aplikasi serta kepatuhan aturan arsitektur.

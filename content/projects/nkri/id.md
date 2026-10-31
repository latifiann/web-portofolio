---
locale: id
title: NKRI
summary: Aplikasi perpesanan real-time untuk chat pribadi dan grup, berbagi berkas, serta panggilan, dikembangkan selama magang sebagai salah satu dari dua mobile developer. Saya menangani pengiriman pesan, penanganan koneksi ulang, pencarian, dan prototipe panggilan WebRTC.
cardSummary: Aplikasi perpesanan real-time untuk chat, berbagi berkas, dan panggilan, dikembangkan selama magang oleh tim lintas peran beranggotakan enam orang.
roleSummary: Mobile Developer · Produk magang
seoDescription: Studi kasus NKRI tentang kontribusi mobile saya, meliputi pesan WebSocket, pencarian, lampiran, dan prototipe panggilan WebRTC.
mediaAlt:
  hero: Tiga layar ponsel menampilkan aplikasi perpesanan NKRI, dengan percakapan berisi lampiran foto, layar login, dan daftar chat dengan filter belum dibaca, grup, serta favorit.
mediaCaption:
  hero: Visual ini menampilkan produk NKRI yang dipelihara perusahaan. Tangkapan layar menggunakan data demo. Studi kasus ini membahas modul komunikasi real-time yang saya kerjakan.
outcomeSummary: Produk perpesanan ini dipelihara oleh perusahaan. Kontribusi saya mencakup modul komunikasi real-time dan prototipe panggilan eksperimental selama magang.
highlights:
  - label: Kontribusi
    value: Komunikasi real-time
    note: Pengiriman pesan, penanganan koneksi ulang, background service, dan status aktivitas.
  - label: Prototipe
    value: Panggilan suara dan video
    note: Prototipe signaling WebRTC, bukan platform panggilan yang sudah dirilis.
  - label: Status proyek
    value: Dipelihara perusahaan
    note: Kontribusi saya mencakup periode magang, Januari sampai Juni 2025.
---

## Gambaran umum

NKRI adalah aplikasi komunikasi real-time untuk chat pribadi dan grup, berbagi berkas, serta panggilan suara atau video. Saya bergabung selama magang di Mitra Informatika pada Januari–Juni 2025 sebagai salah satu dari dua mobile developer dalam tim lintas peran beranggotakan enam orang.

Aplikasi mobile dibangun dengan Flutter dan sekumpulan komponen UI yang dapat dipakai ulang. Riverpod mengelola state, Isar menyimpan data lokal, Dio menangani permintaan HTTP, dan AutoRoute mengatur navigasi. Trafik real-time berpindah dari Socket.IO ke WebSocket selama saya terlibat.

Saya bekerja pada klien mobile. Perusahaan memelihara produk, menyimpan kode sumber secara privat, dan memiliki layanan backend, sehingga studi kasus ini hanya membahas kontribusi mobile saya. Tangkapan layar menggunakan data demo.

Fitur panggilan tetap berupa prototipe. Kami membangun panggilan suara dan video pribadi di atas WebRTC dengan signaling WebSocket, mencakup pertukaran offer dan answer, ICE candidate, media stream, call state, serta alur menerima dan mengakhiri panggilan.

## Tanggung jawab saya

- Mengerjakan modul komunikasi real-time sebagai salah satu dari dua mobile developer, mulai dari pengiriman pesan hingga integrasi background service.
- Memindahkan trafik real-time dari Socket.IO ke WebSocket serta menangani koneksi ulang dan status aktivitas pengguna.
- Membangun prototipe panggilan suara dan video dengan signaling WebRTC, termasuk pertukaran offer dan answer, ICE candidate, media stream, dan call state.
- Menambahkan pencarian pesan, filter pesan, dan pagination ruang chat dengan Riverpod, termasuk debounce dan penanganan akhir data.
- Berkontribusi pada upload dan download lampiran untuk gambar, dokumen, voice note, dan video, termasuk preview media, detail grup, daftar anggota, metadata ruang, foto grup, serta awal alur pembuatan grup.

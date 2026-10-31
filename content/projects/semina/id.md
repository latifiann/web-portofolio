---
locale: id
title: Semina
summary: Proyek website untuk pembelian tiket event, dikembangkan dari materi kelas MERN BuildWithAngga. Kontribusi saya mencakup CMS React untuk pengelolaan event dan backend API untuk checkout tiket. Checkout melalui antarmuka web peserta belum terintegrasi.
cardSummary: Proyek pembelajaran website untuk pembelian tiket event dari materi kelas MERN BuildWithAngga, dengan CMS React dan API checkout. Checkout web peserta belum terintegrasi.
roleSummary: Full-Stack Developer · Proyek pribadi
seoDescription: Semina, proyek website pembelian tiket event dari kelas MERN BuildWithAngga. Kontribusi CMS React dan API. Checkout web peserta belum terintegrasi.
mediaAlt:
  hero: Halaman utama platform acara bertema gelap yang mempromosikan acara teknologi dengan tombol hijau Browse Now.
mediaCaption:
  hero: Visual ini merepresentasikan konteks platform acara dari materi pembelajaran yang penggunaannya telah diizinkan. Ini bukan tangkapan layar CMS yang saya bangun. Studi kasus ini berfokus pada pekerjaan CMS React dan backend API saya.
outcomeSummary: CMS dan API diimplementasikan serta ditinjau melalui kode sumber. Build frontend, pengujian browser, perilaku endpoint, pengiriman email, transaksi, dan concurrency tidak terverifikasi dalam peninjauan tersebut, dan tidak ada deployment publik.
highlights:
  - label: Kontribusi
    value: CMS event dan API checkout
    note: CMS React dengan alur event dan order di backend.
  - label: Implementasi
    value: Alur CMS dan transaksi
    note: Form event dinamis dan validasi checkout di sisi server.
  - label: Konteks proyek
    value: Proyek pembelajaran mandiri
    note: Dikembangkan dari materi kelas BuildWithAngga.
---

## Gambaran umum

Semina adalah proyek website untuk pembelian tiket event. Proyek ini mencakup CMS React untuk mengelola kategori, speaker, metode pembayaran, event, dan daftar order, serta backend API untuk autentikasi peserta, riwayat order, dan checkout tiket.

Proyek pembelajaran mandiri ini dikembangkan dari materi backend BuildWithAngga melalui kelas Full Stack Developer — MERN Website Event. Materi kelas menjadi cakupan awal, lalu saya mengembangkannya menjadi alur kerja yang dijelaskan di sini.

Antarmuka sisi peserta masih berupa template HTML statis, sehingga registrasi dan checkout peserta melalui antarmuka web belum terintegrasi. Tidak ada deployment publik yang terverifikasi, dan repository backend menjadi satu-satunya tujuan kode publik.

## Tanggung jawab saya

- Membangun CMS React untuk kategori, speaker, metode pembayaran, dan event dengan React Bootstrap, Redux, dan Redux Thunk.
- Menambahkan pencarian dengan debounce, filter kategori dan speaker, serta upload gambar pada daftar CMS.
- Membangun form event dengan key points dinamis dan kategori tiket, harga, stok, status aktif, serta status Draft atau Published.
- Mengintegrasikan session persistence, route guard berbasis role, autentikasi JWT, dan penanganan HTTP 401 di frontend.
- Mengimplementasikan token CMS dan peserta yang terpisah, hashing kata sandi dengan bcrypt, otorisasi berbasis role untuk owner, organizer, dan admin, serta pembatasan data per organizer di backend.
- Membangun checkout dengan transaksi MongoDB yang memvalidasi event, metode pembayaran, status tiket, jumlah, dan stok, dengan harga dan total dihitung di server.
- Menambahkan daftar order di CMS dengan pagination dan filter rentang tanggal.
- Mengintegrasikan aktivasi OTP dan email konfirmasi checkout melalui Nodemailer dan Mustache, ditambah upload JPEG dan PNG hingga 3 MB melalui Multer serta penanganan error terpusat.

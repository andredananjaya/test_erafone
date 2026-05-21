# 🚀 Cura Health Automation Testing Framework (Playwright)
Framework end-to-end testing yang andal untuk aplikasi web Cura Health, dibangun menggunakan Playwright dengan implementasi best practice modern.

## 📋 Prasyarat
Pastikan Anda telah menginstal dependensi dasar sebelum memulai:
- Node.js (v14 atau versi yang lebih baru)
- NPM (terinstal otomatis bersama Node.js)

## ⚙️ Instalasi
Ikuti langkah-langkah berikut untuk menyiapkan project di lingkungan lokal Anda:

1. **Clone repository**
   ```bash
   git clone https://github.com/andredananjaya/test_erafone.git
   cd test_erafone
   ```

2. **Instal semua dependensi project**
   ```bash
   npm install
   npm i dotenv
   ```

3. **Instal browser yang didukung Playwright**
   ```bash
   npx playwright install
   ```

## 🔧 Konfigurasi Lingkungan
Buat file `.env` di direktori root project untuk menyimpan variabel lingkungan. Salin konfigurasi contoh di bawah ini, dan sesuaikan nilainya sesuai lingkungan Anda:

> ⚠️ **Penting**: Isi di bawah ini hanya contoh. Jangan pernah menyimpan kredensial asli (username, password, API key) di repositori. Selalu tambahkan file `.env` ke `.gitignore` untuk melindungi data sensitif Anda.

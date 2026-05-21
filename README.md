Project ini adalah framework automation testing untuk Cura Health menggunakan Playwright.

Prasyarat
Pastikan Anda telah menginstal:

Node.js (versi 14 atau lebih baru)
NPM (biasanya terinstal otomatis dengan Node.js)
Instalasi
Clone repository ini:

git clone https://github.com/andredananjaya/test_erafone.git
cd test_erafone
Install dependencies:

npm install
npm i dotenv
Install browser Playwright:

npx playwright install
Konfigurasi
Buat file .env di root directory project dan tambahkan konfigurasi berikut:

Catatan: Isi .env di bawah ini hanya contoh.
Jangan pernah menyimpan kredensial asli Anda — simpan file .env yang sebenarnya secara pribadi dan tambahkan ke `.gitignore**.

WEB_URL=https://katalon-demo-cura.herokuapp.com/
Catatan: Project ini menggunakan dotenv untuk mengelola environment variables. Pastikan file .env sudah dibuat sebelum menjalankan test.

Menjalankan Test
Untuk menjalankan test scenario (khususnya yang memiliki tag @login/@appointment):

npx playwright test --grep @login --project=chromium
Atau menjalankan semua test menggunakan command Playwright langsung:

npx playwright test
Untuk melihat laporan hasil test:

npx playwright show-report

Struktur Project

tests/: Berisi file-file test scenario (contoh: createAppointment.spec.js).

page-object/: Implementasi Page Object Model (POM). File pageobject.js berisi locator dan method yang digunakan dalam test.

helper/: Berisi data helper seperti data user untuk login (datauser.js).

Dashboard/: Berisi page object spesifik untuk halaman Dashboard (jika ada).

playwright.config.js: Konfigurasi utama untuk Playwright.

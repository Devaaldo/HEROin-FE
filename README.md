# HEROin - Frontend

HEROin (Health Evaluation for Reducing Online-gaming negative impact) adalah sistem pakar untuk mengidentifikasi dampak negatif kecanduan game online di kalangan mahasiswa dengan metode backward chaining dan certainty factor.

## Fitur

- Antarmuka interaktif dengan bootstrap
- Alur sistematis 5 halaman: Home, Identitas, Hipotesis, Kuesioner, Hasil
- Dashboard admin untuk melihat statistik dan laporan
- Visualisasi data dengan Chart.js
- Ekspor hasil analisis dalam format Excel dan PDF

## Teknologi yang Digunakan

- React.js
- React Router Dom
- Bootstrap 5
- Axios
- Chart.js dan React-Chartjs-2

## Persyaratan Sistem

- Node.js 14.x atau lebih baru
- NPM atau Yarn

## Cara Instalasi

1. Clone repositori
```sh
git clone https://github.com/username/heroin-frontend.git
cd heroin-frontend
```

2. Install dependensi
```sh
npm install
```

3. Konfigurasikan API endpoint (jika perlu)
Buka file `src/config.js` atau file konfigurasi serupa dan sesuaikan API endpoint backend:
```js
// Contoh config.js
export const API_URL = 'http://localhost:5000/api';
```

4. Jalankan aplikasi
```sh
npm start
```

Aplikasi akan berjalan di http://localhost:3000

## Struktur Proyek

```
src/
├── components/         # Komponen yang dapat digunakan kembali
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/              # Halaman utama
│   ├── Home.jsx        # Halaman beranda
│   ├── UserInfo.jsx    # Form identitas
│   ├── Hypothesis.jsx  # Pemilihan hipotesis
│   ├── Questionnaire.jsx # Kuesioner dengan certainty factor
│   ├── Result.jsx      # Hasil analisis
│   └── Dashboard.jsx   # Dashboard admin
├── App.jsx             # Konfigurasi aplikasi dan routing
└── index.jsx           # Entry point
```

## Alur Penggunaan

1. **Home**: Pengenalan aplikasi dan penjelasan tentang sistem pakar
2. **Identitas**: Pengisian data identitas mahasiswa (nama, usia, angkatan, dll.)
3. **Hipotesis**: Pemilihan hipotesis dampak negatif (backward chaining)
4. **Kuesioner**: Pengisian kuesioner dengan nilai certainty factor
5. **Hasil**: Tampilan hasil analisis, diagnosis, dan rekomendasi
6. **Dashboard**: Visualisasi data dan statistik untuk pakar/admin

## Metode Certainty Factor

Aplikasi ini menggunakan metode Certainty Factor (CF) untuk mengukur tingkat keyakinan dengan skala:

| Pernyataan Pakar | Skala atau Nilai User |
|------------------|------------------------|
| Sangat yakin     | 1                      |
| Yakin            | 0.8                    |
| Cukup Yakin      | 0.6                    |
| Hampir yakin     | 0.4                    |
| Kurang yakin     | 0.2                    |
| Tidak yakin      | 0                      |

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk diskusi fitur baru atau perbaikan.

## Lisensi

[MIT License](LICENSE)

## Kontak

akbarprdn2512@gmail.com

# Portofolio Zidan NF

Portfolio website built with Next.js, Tailwind CSS, and modern UI interactions.

## Tentang Proyek

Website ini menampilkan:
- Halaman landing dan profil
- Section portofolio
- Kontak dengan form yang bisa dihubungkan ke backend API
- Animasi dan tampilan responsif untuk perangkat mobile dan desktop

## Teknologi

- Next.js 13
- React 18
- Tailwind CSS
- DaisyUI
- AOS (scroll animation)
- React Icons
- React Hot Toast

## Cara Menjalankan Lokal

1. Clone repo ke komputer:

```bash
git clone https://github.com/fleajion/Portofolio-Zidan-NF.git
cd Portofolio-Zidan-NF
```

2. Install dependensi:

```bash
npm install
```

3. Jalankan server development:

```bash
npm run dev
```

4. Buka di browser:

```text
http://localhost:3000
```

## Build Produksi

Untuk menghasilkan build produksi:

```bash
npm run build
```

Jika semua berjalan baik, kamu bisa menjalankan versi produksi dengan:

```bash
npm run start
```

## Deploy ke Internet dengan Domain Gratis

Rekomendasi terbaik untuk deploy Next.js adalah menggunakan Vercel karena gratis dan mudah:

1. Buat akun Vercel dengan GitHub.
2. Import repository `fleajion/Portofolio-Zidan-NF`.
3. Gunakan default build command:
   - `npm run build`
4. Deploy.

Setelah deploy, Vercel akan memberikan domain gratis seperti:

```text
https://portofolio-zidan-nf.vercel.app
```

Jika ingin custom domain gratis, kamu bisa gunakan layanan DNS gratis seperti Cloudflare dan mengarahkannya ke Vercel.

## GitHub Actions: Build Produksi Otomatis

Pada repository ini sudah ditambahkan workflow GitHub Actions untuk build otomatis setiap push ke `main`:

- `.github/workflows/production-build.yml`

Workflow ini akan menjalankan instalasi dan build, memastikan deploy produksi siap.

## Catatan

Jika kamu ingin agar form kontak berfungsi sepenuhnya, pastikan API backend `pages/api/sendcontact.js` dikonfigurasi dengan webhook atau service yang sesuai.

---

Repository: https://github.com/fleajion/Portofolio-Zidan-NF

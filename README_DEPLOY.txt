PERBAIKAN DEPLOY VERCEL / GITHUB

Perbaikan yang dilakukan:
- Seluruh folder dan nama file di dalam images/ dibuat lowercase agar aman pada filesystem Linux/Vercel.
- Referensi gambar di HTML/CSS/JS disamakan dengan nama file sebenarnya (case-sensitive).
- Folder .git lama tidak disertakan agar project dapat dipush sebagai repository baru tanpa membawa metadata Git lama.

CARA PUSH KE GITHUB (Windows):
1. Ekstrak folder ini.
2. Buka Terminal/Git Bash di folder project.
3. Jalankan:
   git init
   git config core.ignorecase false
   git add -A
   git commit -m "Fix asset paths for Linux and Vercel"
   git branch -M main
   git remote add origin URL_REPOSITORY_GITHUB_ANDA
   git push -u origin main

Jika repository GitHub sudah pernah dipakai untuk project lama, sebaiknya gunakan repository yang sama lalu pastikan perubahan case file ikut terdeteksi. Untuk rename case-only yang masih tidak terdeteksi Git di Windows, gunakan:
   git mv images/Galeri images/galeri_tmp
   git mv images/galeri_tmp images/galeri

Catatan:
Project ini adalah static HTML/CSS/JS. Vercel dapat men-deploy-nya langsung tanpa framework tambahan selama index.html berada di root project.

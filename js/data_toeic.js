// Data 139 Mahasiswa TOEIC dari Excel
const studentsData = [
  {"no": 1, "nim": "240221040011", "nama": "Murdi Dayu Pratama", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 330, "listening": 325, "toeic": 655, "level": "Level 4", "status": "Menengah Atas"},
  {"no": 2, "nim": "240221040006", "nama": "Michael Joan Kotambonan", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 310, "listening": 300, "toeic": 610, "level": "Level 4", "status": "Menengah Atas"},
  {"no": 3, "nim": "240221040007", "nama": "Adinda Dwi Rahma Putri", "prodi": "Manajemen Informatika", "semester": 4, "reading": 195, "listening": 320, "toeic": 515, "level": "Level 3", "status": "Menengah"},
  {"no": 4, "nim": "240221040005", "nama": "Sheryl Cahya Adinda", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 210, "listening": 260, "toeic": 470, "level": "Level 3", "status": "Menengah"},
  {"no": 5, "nim": "240221040003", "nama": "Tata Aditya Yusuf Saputra", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 355, "listening": 115, "toeic": 470, "level": "Level 3", "status": "Menengah"},
  {"no": 6, "nim": "240221040014", "nama": "Hoviah Houlida", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 180, "listening": 255, "toeic": 435, "level": "Level 3", "status": "Menengah"},
  {"no": 7, "nim": "240221040012", "nama": "Reynaldi Bram Pardede", "prodi": "Manajemen Informatika", "semester": 2, "reading": 175, "listening": 260, "toeic": 435, "level": "Level 3", "status": "Menengah"},
  {"no": 8, "nim": "240221040013", "nama": "Renata Aulia Rasti", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 180, "listening": 250, "toeic": 430, "level": "Level 3", "status": "Menengah"},
  {"no": 9, "nim": "240221040002", "nama": "Santi Lokautari", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 175, "listening": 245, "toeic": 420, "level": "Level 3", "status": "Menengah"},
  {"no": 10, "nim": "240221040008", "nama": "Zulfan Al Fauzan", "prodi": "Manajemen Informatika", "semester": 4, "reading": 160, "listening": 255, "toeic": 415, "level": "Level 3", "status": "Menengah"},
  {"no": 11, "nim": "240221040004", "nama": "Abyyan Sulthan Yasik", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 115, "listening": 290, "toeic": 405, "level": "Level 3", "status": "Menengah"},
  {"no": 12, "nim": "240221040009", "nama": "Ahmad Faqih Mubarok", "prodi": "Manajemen Informatika", "semester": 4, "reading": 170, "listening": 230, "toeic": 400, "level": "Level 2", "status": "Dasar"},
  {"no": 13, "nim": "240221040001", "nama": "Sahwala Istikomariah", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 145, "listening": 250, "toeic": 395, "level": "Level 2", "status": "Dasar"},
  {"no": 14, "nim": "240444040007", "nama": "Zaskia Asshila Salwa", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 180, "listening": 210, "toeic": 390, "level": "Level 2", "status": "Dasar"},
  {"no": 15, "nim": "240444040004", "nama": "Cinde Tiara Putri Andrian", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 160, "listening": 230, "toeic": 390, "level": "Level 2", "status": "Dasar"},
  {"no": 16, "nim": "240444040020", "nama": "Ridho Fatu Rohman", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 170, "listening": 210, "toeic": 380, "level": "Level 2", "status": "Dasar"},
  {"no": 17, "nim": "240444040025", "nama": "Muhammad Hafidz Fauzi", "prodi": "Manajemen Informatika", "semester": 4, "reading": 125, "listening": 250, "toeic": 375, "level": "Level 2", "status": "Dasar"},
  {"no": 18, "nim": "240444040017", "nama": "Aninda Nurrizki", "prodi": "Manajemen Informatika", "semester": 4, "reading": 160, "listening": 195, "toeic": 355, "level": "Level 2", "status": "Dasar"},
  {"no": 19, "nim": "240444040015", "nama": "Nabila Kurniawati", "prodi": "Manajemen Informatika", "semester": 4, "reading": 140, "listening": 215, "toeic": 355, "level": "Level 2", "status": "Dasar"},
  {"no": 20, "nim": "240444040002", "nama": "Rizki Andriyan", "prodi": "Manajemen Informatika", "semester": 4, "reading": 170, "listening": 185, "toeic": 355, "level": "Level 2", "status": "Dasar"},
  {"no": 21, "nim": "240444040011", "nama": "Nesha Audi Maulidia", "prodi": "Manajemen Informatika", "semester": 4, "reading": 140, "listening": 210, "toeic": 350, "level": "Level 2", "status": "Dasar"},
  {"no": 22, "nim": "240444040005", "nama": "Muhammad Daffa Firdaus", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 95, "listening": 255, "toeic": 350, "level": "Level 2", "status": "Dasar"},
  {"no": 23, "nim": "240444040022", "nama": "Mochamad Fauzan Fadhillah", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 125, "listening": 220, "toeic": 345, "level": "Level 2", "status": "Dasar"},
  {"no": 24, "nim": "240444040010", "nama": "Advin Rabel", "prodi": "Manajemen Informatika", "semester": 4, "reading": 150, "listening": 190, "toeic": 340, "level": "Level 2", "status": "Dasar"},
  {"no": 25, "nim": "240444040003", "nama": "Vita Widyasari", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 175, "listening": 165, "toeic": 340, "level": "Level 2", "status": "Dasar"},
  {"no": 26, "nim": "240444040027", "nama": "Eka Putra Ananda", "prodi": "Manajemen Informatika", "semester": 2, "reading": 160, "listening": 175, "toeic": 335, "level": "Level 2", "status": "Dasar"},
  {"no": 27, "nim": "240444040013", "nama": "Olivia Ferisca", "prodi": "Manajemen Informatika", "semester": 4, "reading": 70, "listening": 255, "toeic": 325, "level": "Level 2", "status": "Dasar"},
  {"no": 28, "nim": "240444040019", "nama": "Trisha Aloina Mende", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 125, "listening": 200, "toeic": 325, "level": "Level 2", "status": "Dasar"},
  {"no": 29, "nim": "240444040026", "nama": "Zulfa Nailatul Fauziyah", "prodi": "Manajemen Informatika", "semester": 2, "reading": 145, "listening": 175, "toeic": 320, "level": "Level 2", "status": "Dasar"},
  {"no": 30, "nim": "240444040023", "nama": "Ridwan Maulana", "prodi": "Manajemen Informatika", "semester": 0, "reading": 120, "listening": 200, "toeic": 320, "level": "Level 2", "status": "Dasar"},
  {"no": 31, "nim": "240444040016", "nama": "Adelia Berliana Syaryanti", "prodi": "Manajemen Informatika", "semester": 4, "reading": 125, "listening": 190, "toeic": 315, "level": "Level 2", "status": "Dasar"},
  {"no": 32, "nim": "240444040009", "nama": "Bella Puspita", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 115, "listening": 195, "toeic": 310, "level": "Level 2", "status": "Dasar"},
  {"no": 33, "nim": "240444040012", "nama": "Rajwa Nailal Khusna", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 145, "listening": 160, "toeic": 305, "level": "Level 2", "status": "Dasar"},
  {"no": 34, "nim": "240444040021", "nama": "Syadidul Azmi Saefulloh", "prodi": "Manajemen Informatika", "semester": 2, "reading": 125, "listening": 180, "toeic": 305, "level": "Level 2", "status": "Dasar"},
  {"no": 35, "nim": "240444040006", "nama": "Zaskya Rahma Albasriani", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 120, "listening": 185, "toeic": 305, "level": "Level 2", "status": "Dasar"},
  {"no": 36, "nim": "240444040008", "nama": "Seli Widya Rahmawati", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 110, "listening": 195, "toeic": 305, "level": "Level 2", "status": "Dasar"},
  {"no": 37, "nim": "240444040014", "nama": "Dewi Lutfiah Mufti", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 120, "listening": 175, "toeic": 295, "level": "Level 2", "status": "Dasar"},
  {"no": 38, "nim": "240444040018", "nama": "Muhammad Alif Fadillah Said", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 65, "listening": 230, "toeic": 295, "level": "Level 2", "status": "Dasar"},
  {"no": 39, "nim": "240551040012", "nama": "Ita Sintia", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 85, "listening": 210, "toeic": 295, "level": "Level 2", "status": "Dasar"},
  {"no": 40, "nim": "240551040010", "nama": "Adinda Pratiwi", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 125, "listening": 170, "toeic": 295, "level": "Level 2", "status": "Dasar"},
  {"no": 41, "nim": "240551040032", "nama": "Natasya Sisca Florida Siallagan", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 180, "listening": 115, "toeic": 295, "level": "Level 2", "status": "Dasar"},
  {"no": 42, "nim": "240551040007", "nama": "Ahmad Thoriq Rahmandani", "prodi": "Manajemen Informatika", "semester": 2, "reading": 145, "listening": 145, "toeic": 290, "level": "Level 2", "status": "Dasar"},
  {"no": 43, "nim": "240551040018", "nama": "Syifa Rezkia", "prodi": "Manajemen Informatika", "semester": 2, "reading": 115, "listening": 175, "toeic": 290, "level": "Level 2", "status": "Dasar"},
  {"no": 44, "nim": "240551040027", "nama": "Didier Aliefh", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 90, "listening": 195, "toeic": 285, "level": "Level 2", "status": "Dasar"},
  {"no": 45, "nim": "240551040026", "nama": "Azkiya Fattaya", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 120, "listening": 165, "toeic": 285, "level": "Level 2", "status": "Dasar"},
  {"no": 46, "nim": "240551040035", "nama": "Fayzha Aurelya Sutisna", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 120, "listening": 160, "toeic": 280, "level": "Level 2", "status": "Dasar"},
  {"no": 47, "nim": "240551040016", "nama": "Pebrian", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 115, "listening": 165, "toeic": 280, "level": "Level 2", "status": "Dasar"},
  {"no": 48, "nim": "240551040003", "nama": "Adinda Nur Irawanti", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 90, "listening": 185, "toeic": 275, "level": "Level 2", "status": "Dasar"},
  {"no": 49, "nim": "240551040009", "nama": "Alya Fatma Syarifah", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 95, "listening": 175, "toeic": 270, "level": "Level 2", "status": "Dasar"},
  {"no": 50, "nim": "240551040006", "nama": "Anselmus Tungga", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 90, "listening": 180, "toeic": 270, "level": "Level 2", "status": "Dasar"},
  {"no": 51, "nim": "240551040008", "nama": "Finka Elena Putri", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 110, "listening": 160, "toeic": 270, "level": "Level 2", "status": "Dasar"},
  {"no": 52, "nim": "240551040019", "nama": "Nabila Zahra", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 100, "listening": 165, "toeic": 265, "level": "Level 2", "status": "Dasar"},
  {"no": 53, "nim": "240551040030", "nama": "Nuril Kamilah Cantika", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 100, "listening": 165, "toeic": 265, "level": "Level 2", "status": "Dasar"},
  {"no": 54, "nim": "240551040023", "nama": "Nesa Agustinaidah", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 130, "listening": 135, "toeic": 265, "level": "Level 2", "status": "Dasar"},
  {"no": 55, "nim": "240551040005", "nama": "Fajri Ramadhan", "prodi": "Manajemen Informatika", "semester": 4, "reading": 80, "listening": 180, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 56, "nim": "240551040036", "nama": "Muhamad Ozi Tibroni", "prodi": "Manajemen Informatika", "semester": 4, "reading": 110, "listening": 150, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 57, "nim": "240551040025", "nama": "Chelsea Putri Rahayu", "prodi": "Manajemen Informatika", "semester": 2, "reading": 90, "listening": 170, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 58, "nim": "240551040022", "nama": "Tiara Vasielia Novianti", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 130, "listening": 130, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 59, "nim": "240551040011", "nama": "Aditiya Hadi Siswanto", "prodi": "Manajemen Informatika", "semester": 0, "reading": 90, "listening": 170, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 60, "nim": "250221040017", "nama": "Arya Sudama", "prodi": "Manajemen Informatika", "semester": 0, "reading": 110, "listening": 150, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 61, "nim": "250221040006", "nama": "Safrina Khofsah", "prodi": "Manajemen Informatika", "semester": 0, "reading": 40, "listening": 220, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 62, "nim": "250221040005", "nama": "Sri Nur Syahidah", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 110, "listening": 150, "toeic": 260, "level": "Level 2", "status": "Dasar"},
  {"no": 63, "nim": "250221040016", "nama": "Eka Mulia Rahmadani", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 40, "listening": 215, "toeic": 255, "level": "Level 2", "status": "Dasar"},
  {"no": 64, "nim": "250221040014", "nama": "Eva Gista Pratiwi", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 90, "listening": 165, "toeic": 255, "level": "Level 2", "status": "Dasar"},
  {"no": 65, "nim": "250221040008", "nama": "Siti Rohimah", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 110, "listening": 140, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 66, "nim": "250221040007", "nama": "Elok Artha Kinasih", "prodi": "Manajemen Informatika", "semester": 4, "reading": 50, "listening": 200, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 67, "nim": "250221040015", "nama": "Muhammad Akbar Agustian", "prodi": "Manajemen Informatika", "semester": 4, "reading": 85, "listening": 165, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 68, "nim": "250221040012", "nama": "Astri Firda Aminati", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 80, "listening": 170, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 69, "nim": "250221040002", "nama": "Naila Salsabila", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 90, "listening": 160, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 70, "nim": "250221040003", "nama": "Muhamad Al Farizi", "prodi": "Manajemen Informatika", "semester": 2, "reading": 70, "listening": 180, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 71, "nim": "250221040013", "nama": "Tridevi Wulandari", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 85, "listening": 165, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 72, "nim": "250221040009", "nama": "Chaira Nur Fadillah", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 115, "listening": 135, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 73, "nim": "250221040011", "nama": "Na'ilah Zaafarani Hafizhah", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 85, "listening": 165, "toeic": 250, "level": "Level 1", "status": "Pemula"},
  {"no": 74, "nim": "250221040010", "nama": "May Afifah Berlianty", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 110, "listening": 135, "toeic": 245, "level": "Level 1", "status": "Pemula"},
  {"no": 75, "nim": "250444040008", "nama": "Fendy Pradana", "prodi": "Manajemen Informatika", "semester": 4, "reading": 110, "listening": 135, "toeic": 245, "level": "Level 1", "status": "Pemula"},
  {"no": 76, "nim": "250444040001", "nama": "Muhammad Nandi", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 80, "listening": 165, "toeic": 245, "level": "Level 1", "status": "Pemula"},
  {"no": 77, "nim": "250444040005", "nama": "Keira Bunga Aprilicia", "prodi": "Manajemen Informatika", "semester": 2, "reading": 60, "listening": 185, "toeic": 245, "level": "Level 1", "status": "Pemula"},
  {"no": 78, "nim": "250444040004", "nama": "Refa Juliana Rahman", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 70, "listening": 175, "toeic": 245, "level": "Level 1", "status": "Pemula"},
  {"no": 79, "nim": "250444040007", "nama": "Ratna Dewanti Astutiningtias", "prodi": "Manajemen Informatika", "semester": 4, "reading": 50, "listening": 190, "toeic": 240, "level": "Level 1", "status": "Pemula"},
  {"no": 80, "nim": "250444040011", "nama": "Mohammad Angga Putra", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 80, "listening": 160, "toeic": 240, "level": "Level 1", "status": "Pemula"},
  {"no": 81, "nim": "250444040009", "nama": "Fardhan Adzky Maula", "prodi": "Manajemen Informatika", "semester": 0, "reading": 60, "listening": 180, "toeic": 240, "level": "Level 1", "status": "Pemula"},
  {"no": 82, "nim": "250444040002", "nama": "Muhammad Fauzan", "prodi": "Manajemen Informatika", "semester": 0, "reading": 65, "listening": 175, "toeic": 240, "level": "Level 1", "status": "Pemula"},
  {"no": 83, "nim": "250444040003", "nama": "Atna Aulia Khodijah", "prodi": "Manajemen Informatika", "semester": 4, "reading": 85, "listening": 150, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 84, "nim": "250444040006", "nama": "Arya Gilang Ferdiansyah", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 95, "listening": 140, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 85, "nim": "250551040003", "nama": "Putry Melida", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 85, "listening": 150, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 86, "nim": "250551040002", "nama": "Raisya Salsabila Pratama", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 90, "listening": 145, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 87, "nim": "250551040014", "nama": "Resti Fujianih", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 50, "listening": 185, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 88, "nim": "250551040007", "nama": "Hanum Chairunisa", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 85, "listening": 150, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 89, "nim": "250551040009", "nama": "Silvi Indriyani Putri", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 70, "listening": 165, "toeic": 235, "level": "Level 1", "status": "Pemula"},
  {"no": 90, "nim": "250551040015", "nama": "Kayla Hayya Salsabila", "prodi": "Manajemen Informatika", "semester": 4, "reading": 90, "listening": 140, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 91, "nim": "250551040017", "nama": "Ayu Tresna Asih", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 60, "listening": 170, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 92, "nim": "250551040008", "nama": "Daniel Trisakti", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 80, "listening": 150, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 93, "nim": "250551040004", "nama": "Arina Nazla Muflihah", "prodi": "Manajemen Informatika", "semester": 0, "reading": 80, "listening": 150, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 94, "nim": "250551040012", "nama": "Muhamad Damar Abdilah", "prodi": "Manajemen Informatika", "semester": 0, "reading": 40, "listening": 190, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 95, "nim": "250551040010", "nama": "Muhammad Aldo Yumam", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 60, "listening": 170, "toeic": 230, "level": "Level 1", "status": "Pemula"},
  {"no": 96, "nim": "250551040010", "nama": "Bunga Citra Lestari", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 80, "listening": 145, "toeic": 225, "level": "Level 1", "status": "Pemula"},
  {"no": 97, "nim": "250551040010", "nama": "Fitri Tabela", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 60, "listening": 165, "toeic": 225, "level": "Level 1", "status": "Pemula"},
  {"no": 98, "nim": "250551040010", "nama": "Indah Maulida Amanda Tirta", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 80, "listening": 145, "toeic": 225, "level": "Level 1", "status": "Pemula"},
  {"no": 99, "nim": "250551040010", "nama": "Siti Fadilah", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 90, "listening": 135, "toeic": 225, "level": "Level 1", "status": "Pemula"},
  {"no": 100, "nim": "250551040010", "nama": "Nabila Safitri", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 50, "listening": 170, "toeic": 220, "level": "Level 1", "status": "Pemula"},
  {"no": 101, "nim": "250551040010", "nama": "Feby Fitriani Kriskianto", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 65, "listening": 150, "toeic": 215, "level": "Level 1", "status": "Pemula"},
  {"no": 102, "nim": "250551040010", "nama": "Wanda Uliyatul Aulia", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 70, "listening": 140, "toeic": 210, "level": "Level 1", "status": "Pemula"},
  {"no": 103, "nim": "250551040010", "nama": "Eka Yuliyanti", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 25, "listening": 185, "toeic": 210, "level": "Level 1", "status": "Pemula"},
  {"no": 104, "nim": "250551040010", "nama": "Sudinastiyan", "prodi": "Komputerisasi Akuntansi", "semester": 2, "reading": 70, "listening": 140, "toeic": 210, "level": "Level 1", "status": "Pemula"},
  {"no": 105, "nim": "250551040010", "nama": "Solehah", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 95, "listening": 110, "toeic": 205, "level": "Level 1", "status": "Pemula"},
  {"no": 106, "nim": "250551040010", "nama": "Rifki Putra Purnama", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 65, "listening": 140, "toeic": 205, "level": "Level 1", "status": "Pemula"},
  {"no": 107, "nim": "250551040010", "nama": "Muhamad Arifin Jaelani", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 60, "listening": 145, "toeic": 205, "level": "Level 1", "status": "Pemula"},
  {"no": 108, "nim": "250551040010", "nama": "Putri Nadilla Safitri", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 65, "listening": 140, "toeic": 205, "level": "Level 1", "status": "Pemula"},
  {"no": 109, "nim": "250551040010", "nama": "Qurratu Aini Mardiliah", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 35, "listening": 165, "toeic": 200, "level": "Level 1", "status": "Pemula"},
  {"no": 110, "nim": "250551040010", "nama": "Fauzan Nurzaman", "prodi": "Administrasi Bisnis Internasional", "semester": 2, "reading": 70, "listening": 130, "toeic": 200, "level": "Level 1", "status": "Pemula"},
  {"no": 111, "nim": "250551040010", "nama": "Muhamad Raflyansah Putra", "prodi": "Manajemen Informatika", "semester": 0, "reading": 125, "listening": 70, "toeic": 195, "level": "Level 1", "status": "Pemula"},
  {"no": 112, "nim": "250551040010", "nama": "Siti Aulia Faza Rahma", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 25, "listening": 170, "toeic": 195, "level": "Level 1", "status": "Pemula"},
  {"no": 113, "nim": "250551040010", "nama": "Dhea Hermalinda Putri", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 45, "listening": 145, "toeic": 190, "level": "Level 1", "status": "Pemula"},
  {"no": 114, "nim": "250551040010", "nama": "Shifa Fauzyyah Azhar", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 65, "listening": 125, "toeic": 190, "level": "Level 1", "status": "Pemula"},
  {"no": 115, "nim": "250551040010", "nama": "Rifki Syahdan Firdaus", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 65, "listening": 120, "toeic": 185, "level": "Level 1", "status": "Pemula"},
  {"no": 116, "nim": "250551040010", "nama": "Eka Aulia Salsabila", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 30, "listening": 150, "toeic": 180, "level": "Level 1", "status": "Pemula"},
  {"no": 117, "nim": "250551040010", "nama": "Intan Narini Pratiwi", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 30, "listening": 150, "toeic": 180, "level": "Level 1", "status": "Pemula"},
  {"no": 118, "nim": "250551040010", "nama": "Reza Aulia", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 25, "listening": 150, "toeic": 175, "level": "Level 1", "status": "Pemula"},
  {"no": 119, "nim": "250551040010", "nama": "Ahmad Syaki Pratama Wibowo", "prodi": "Manajemen Informatika", "semester": 4, "reading": 30, "listening": 140, "toeic": 170, "level": "Level 1", "status": "Pemula"},
  {"no": 120, "nim": "-", "nama": "Ahin Wirya", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 50, "listening": 120, "toeic": 170, "level": "Level 1", "status": "Pemula"},
  {"no": 121, "nim": "250551040010", "nama": "Siti Qurratul U'yyun", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 35, "listening": 135, "toeic": 170, "level": "Level 1", "status": "Pemula"},
  {"no": 122, "nim": "-", "nama": "Siti Zahra Zamaika", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 50, "listening": 115, "toeic": 165, "level": "Level 1", "status": "Pemula"},
  {"no": 123, "nim": "250551040010", "nama": "Olga Lukmanul Hakim", "prodi": "Manajemen Informatika", "semester": 4, "reading": 95, "listening": 70, "toeic": 165, "level": "Level 1", "status": "Pemula"},
  {"no": 124, "nim": "250551040010", "nama": "Muhammad Hafizd Al Khadafi", "prodi": "Manajemen Informatika", "semester": 0, "reading": 45, "listening": 115, "toeic": 160, "level": "Level 1", "status": "Pemula"},
  {"no": 125, "nim": "250551040010", "nama": "Dinda Pajri Agustin", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 50, "listening": 110, "toeic": 160, "level": "Level 1", "status": "Pemula"},
  {"no": 126, "nim": "250551040010", "nama": "Mela Dewi", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 90, "listening": 70, "toeic": 160, "level": "Level 1", "status": "Pemula"},
  {"no": 127, "nim": "250551040010", "nama": "Shelly Ratu Rahmadani", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 30, "listening": 130, "toeic": 160, "level": "Level 1", "status": "Pemula"},
  {"no": 128, "nim": "250551040010", "nama": "Aditya Saputra", "prodi": "Manajemen Informatika", "semester": 4, "reading": 35, "listening": 120, "toeic": 155, "level": "Level 1", "status": "Pemula"},
  {"no": 129, "nim": "250551040010", "nama": "Muhammad Ikhsan", "prodi": "Komputerisasi Akuntansi", "semester": 0, "reading": 10, "listening": 135, "toeic": 145, "level": "Level 1", "status": "Pemula"},
  {"no": 130, "nim": "250551040010", "nama": "Ahmad Patah", "prodi": "Komputerisasi Akuntansi", "semester": 4, "reading": 35, "listening": 100, "toeic": 135, "level": "Level 1", "status": "Pemula"},
  {"no": 131, "nim": "250551040010", "nama": "Muhamad Dzaky Nur'kholis", "prodi": "Manajemen Informatika", "semester": 4, "reading": 20, "listening": 95, "toeic": 115, "level": "Level 1", "status": "Pemula"},
  {"no": 132, "nim": "250551040010", "nama": "Huan Farel Rabbani", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 40, "listening": 70, "toeic": 110, "level": "Level 1", "status": "Pemula"},
  {"no": 133, "nim": "250551040010", "nama": "M. Rizki Ramadhani", "prodi": "Manajemen Informatika", "semester": 4, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 134, "nim": "250551040010", "nama": "Silfi Febriyanti", "prodi": "Manajemen Informatika", "semester": 4, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 135, "nim": "250551040010", "nama": "Hana Sulista", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 136, "nim": "250551040010", "nama": "Imam Rosidin", "prodi": "Administrasi Bisnis Internasional", "semester": 4, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 137, "nim": "250551040010", "nama": "Siti Robia Adawiyah", "prodi": "Manajemen Informatika", "semester": 0, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 138, "nim": "250551040010", "nama": "Suci Amanah Putri", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"},
  {"no": 139, "nim": "250551040010", "nama": "Achmad Moryno Malik Aziz", "prodi": "Administrasi Bisnis Internasional", "semester": 0, "reading": 0, "listening": 0, "toeic": 0, "level": "-", "status": "-"}
];

function renderPodium(top3) {
    const container = document.getElementById("podium-container");
    if (!container || !top3 || top3.length < 3) return;
    container.innerHTML = `
        <div class="top-card rank-1">
            <div class="badge-rank">🥇</div>
            <h4>${top3[0].nama}</h4>
            <p>${top3[0].prodi}</p>
            <div class="toeic-val">${top3[0].toeic}</div>
            <div style="font-size:12px; margin-top:4px;">${top3[0].level} (${top3[0].status})</div>
        </div>
        <div class="top-card rank-2">
            <div class="badge-rank">🥈</div>
            <h4>${top3[1].nama}</h4>
            <p>${top3[1].prodi}</p>
            <div class="toeic-val">${top3[1].toeic}</div>
            <div style="font-size:12px; margin-top:4px;">${top3[1].level} (${top3[1].status})</div>
        </div>
        <div class="top-card rank-3">
            <div class="badge-rank">🥉</div>
            <h4>${top3[2].nama}</h4>
            <p>${top3[2].prodi}</p>
            <div class="toeic-val">${top3[2].toeic}</div>
            <div style="font-size:12px; margin-top:4px;">${top3[2].level} (${top3[2].status})</div>
        </div>
    `;
}

function renderTable(data) {
    const tbody = document.getElementById("student-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 20px;">Data tidak ditemukan</td></tr>`;
        return;
    }

    data.forEach((item, index) => {
        const tr = document.createElement("tr");
        const toeicScore = item.toeic > 0 ? item.toeic : "—";
        const levelText = item.level !== "-" ? item.level : "—";
        const statusText = item.status !== "-" ? item.status : "—";

        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${item.nim}</td>
            <td><strong>${item.nama}</strong></td>
            <td>${item.prodi}</td>
            <td style="text-align:center;">Semester ${item.semester}</td>
            <td style="text-align:center;">${item.reading}</td>
            <td style="text-align:center;">${item.listening}</td>
            <td style="text-align:center;"><span class="badge-toeic">${toeicScore}</span></td>
            <td style="text-align:center;"><b>${levelText}</b></td>
            <td style="text-align:center;">${statusText}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterData() {
    const searchVal = document.getElementById("search-input").value.toLowerCase();
    const prodiVal = document.getElementById("prodi-filter").value;
    const sortVal = document.getElementById("sort-order").value;

    let filtered = studentsData.filter(s => {
        const matchesName = s.nama.toLowerCase().includes(searchVal) || s.nim.toLowerCase().includes(searchVal);
        const matchesProdi = prodiVal === "" || s.prodi === prodiVal;
        return matchesName && matchesProdi;
    });

    if (sortVal === "toeic-desc") {
        filtered.sort((a, b) => b.toeic - a.toeic);
    } else if (sortVal === "toeic-asc") {
        filtered.sort((a, b) => a.toeic - b.toeic);
    } else if (sortVal === "name-asc") {
        filtered.sort((a, b) => a.nama.localeCompare(a.nama));
    }

    renderTable(filtered);
}
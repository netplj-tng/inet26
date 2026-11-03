// Data Jadwal Ujian Tengah Semester Ganjil 2026/2027 Politeknik LP3I Jakarta Kampus Tangerang
const jadwalExamData = [
  {"no": 1, "kelas": "4531", "hari": "Senin", "tanggal": "09-11-2026", "jam": "17:30-19:00", "matkul": "Manajemen Keuangan Internasional", "dosen": "Drs. Gusti Damai Sejahtera, M.B.A", "sks": 2, "smt": 5, "ruang": "R. 202", "ket": "-"},
  {"no": 2, "kelas": "4531", "hari": "Senin", "tanggal": "09-11-2026", "jam": "19:30-21:00", "matkul": "Manajemen Risiko", "dosen": "Eko Sugiyanto, S.Pd., M.M", "sks": 2, "smt": 5, "ruang": "R. 202", "ket": "-"},
  {"no": 3, "kelas": "4531", "hari": "Selasa", "tanggal": "10-11-2026", "jam": "17:30-21:00", "matkul": "Manajemen Investasi dan Pasar Modal", "dosen": "Dr. Leni Hartati, S.Sos., M.M., CRP., CPF., CTP", "sks": 4, "smt": 5, "ruang": "R. 202", "ket": "-"},
  {"no": 4, "kelas": "4531", "hari": "Rabu", "tanggal": "11-11-2026", "jam": "17:30-21:00", "matkul": "Perpajakan Internasional", "dosen": "Arief Hidayat, S.T., M.A., BKP", "sks": 4, "smt": 5, "ruang": "R. 202", "ket": "-"},
  {"no": 5, "kelas": "4531", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Kewirausahaan Digital", "dosen": "Susbiyantoro, S.Sos., M.M", "sks": 2, "smt": 5, "ruang": "-", "ket": "PJBL"},
  {"no": 6, "kelas": "4531", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Statistik Bisnis", "dosen": "Moch. Nur Hidayat, S.E., M.M", "sks": 4, "smt": 5, "ruang": "-", "ket": "PJBL"},
  {"no": 7, "kelas": "4531", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Manajemen Penjualan", "dosen": "Susbiyantoro, S.Sos., M.M", "sks": 2, "smt": 5, "ruang": "-", "ket": "PJBL"},
  {"no": 8, "kelas": "4521", "hari": "Kamis", "tanggal": "12-11-2026", "jam": "17:30-19:00", "matkul": "Matematika Bisnis", "dosen": "Dwi Okty Utami, S.E., M.Ak", "sks": 2, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 9, "kelas": "4521", "hari": "Kamis", "tanggal": "12-11-2026", "jam": "19:30-21:00", "matkul": "Global Supply Chain Management", "dosen": "Drs. Gusti Damai Sejahtera, M.B.A", "sks": 2, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 10, "kelas": "4521", "hari": "Jumat", "tanggal": "13-11-2026", "jam": "17:30-21:00", "matkul": "Pemasaran Internasional", "dosen": "Susbiyantoro, S.Sos., M.M", "sks": 4, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 11, "kelas": "4521", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Bahasa Inggris III", "dosen": "Aries Prahatma, S.Sos", "sks": 2, "smt": 3, "ruang": "-", "ket": "PENGUMPULAN"},
  {"no": 12, "kelas": "4521", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Kewirausahaan", "dosen": "Suparti, S.Sos., M.A", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 13, "kelas": "4521", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Design Thinking", "dosen": "Prayogo, S.Kom., M.Kom", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 14, "kelas": "4521", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Perencanaan & Pengembangan Bisnis", "dosen": "Eko Sugiyanto, S.Pd., M.M", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 15, "kelas": "4521", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Basic Export-Import Administration", "dosen": "Dr. Leni Hartati, S.Sos., M.M., CRP., CPF., CTP", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 16, "kelas": "4511", "hari": "Senin", "tanggal": "09-11-2026", "jam": "17:30-19:00", "matkul": "Pengantar Manajemen", "dosen": "Titim Nurlia, S.Sos., M.A", "sks": 2, "smt": 1, "ruang": "R. 201", "ket": "-"},
  {"no": 17, "kelas": "4511", "hari": "Senin", "tanggal": "09-11-2026", "jam": "19:30-21:00", "matkul": "Pengembangan Kepribadian", "dosen": "Ru'yah Soenardhi, S.Pd., M.Pd", "sks": 2, "smt": 1, "ruang": "R. 201", "ket": "-"},
  {"no": 18, "kelas": "4511", "hari": "Selasa", "tanggal": "10-11-2026", "jam": "17:30-21:00", "matkul": "Akuntansi", "dosen": "Janaka, S.E., M.Ak", "sks": 4, "smt": 1, "ruang": "R. 201", "ket": "-"},
  {"no": 19, "kelas": "4511", "hari": "Rabu", "tanggal": "11-11-2026", "jam": "17:30-19:00", "matkul": "Ekonomi Mikro", "dosen": "Dra. Ermanuri, M.M", "sks": 2, "smt": 1, "ruang": "R. 201", "ket": "-"},
  {"no": 20, "kelas": "4511", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Pengantar Bisnis", "dosen": "Titim Nurlia, S.Sos., M.A", "sks": 2, "smt": 1, "ruang": "-", "ket": "PJBL"},
  {"no": 21, "kelas": "4511", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Bahasa Inggris I", "dosen": "Supadi Bambang Sutrisno, S.Pd., M.M", "sks": 4, "smt": 1, "ruang": "-", "ket": "PJBL"},
  {"no": 22, "kelas": "4421", "hari": "Kamis", "tanggal": "12-11-2026", "jam": "17:30-21:00", "matkul": "Manajemen Proyek", "dosen": "Assoc. Prof. Dr. Nur Azizah, S.Kom., M.Akt., M.Kom", "sks": 4, "smt": 3, "ruang": "R. 201", "ket": "-"},
  {"no": 23, "kelas": "4421", "hari": "Jumat", "tanggal": "13-11-2026", "jam": "17:30-19:00", "matkul": "E Commerce", "dosen": "Assoc. Prof. Dr. Nur Azizah, S.Kom., M.Akt., M.Kom", "sks": 2, "smt": 3, "ruang": "R. 201", "ket": "-"},
  {"no": 24, "kelas": "4421", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Bahasa Inggris I", "dosen": "Supadi Bambang Sutrisno, S.Pd., M.M", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 25, "kelas": "4421", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Pemrograman Frame work", "dosen": "Nofi Cahyono, S.Kom., M.Kom", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 26, "kelas": "4421", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Pemrograman Web Native", "dosen": "Nofi Cahyono, S.Kom., M.Kom", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 27, "kelas": "4421", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Rekayasa Aplikasi Web Programing", "dosen": "Prayogo, S.Kom., M.Kom", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 28, "kelas": "4411", "hari": "Senin", "tanggal": "09-11-2026", "jam": "08:00-11:40", "matkul": "Pemrograman Web Statis", "dosen": "Prayogo, S.Kom., M.Kom", "sks": 4, "smt": 1, "ruang": "LAB 302", "ket": "-"},
  {"no": 29, "kelas": "4411", "hari": "Selasa", "tanggal": "10-11-2026", "jam": "08:00-11:40", "matkul": "Matematika Logika", "dosen": "Sari Prabandari, S.T., M.Pd", "sks": 4, "smt": 1, "ruang": "R. 201", "ket": "-"},
  {"no": 30, "kelas": "4411", "hari": "Rabu", "tanggal": "11-11-2026", "jam": "08:00-11:40", "matkul": "Aplikasi Komputer", "dosen": "Hikmal Maulana Fajar, A.Md", "sks": 4, "smt": 1, "ruang": "LAB 301", "ket": "-"},
  {"no": 31, "kelas": "4411", "hari": "Kamis", "tanggal": "12-11-2026", "jam": "08:00-11:40", "matkul": "Algoritma Pemrograman Java & Struktur Data", "dosen": "Nofi Cahyono, S.Kom., M.Kom", "sks": 4, "smt": 1, "ruang": "LAB 302", "ket": "-"},
  {"no": 32, "kelas": "4411", "hari": "Jumat", "tanggal": "13-11-2026", "jam": "08:00-11:40", "matkul": "Desain Graphis", "dosen": "Nur Faizin Rois, S.Kom", "sks": 4, "smt": 1, "ruang": "LAB 301", "ket": "-"},
  {"no": 33, "kelas": "4221", "hari": "Senin", "tanggal": "09-11-2026", "jam": "08:00-11:40", "matkul": "Akuntansi Keuangan Lanjutan", "dosen": "Drs. Amir Hamzah, M.M", "sks": 4, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 34, "kelas": "4221", "hari": "Selasa", "tanggal": "10-11-2026", "jam": "08:00-09:40", "matkul": "Akuntansi Biaya I", "dosen": "Dwi Okty Utami, S.E., M.Ak", "sks": 2, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 35, "kelas": "4221", "hari": "Selasa", "tanggal": "10-11-2026", "jam": "10:00-11:40", "matkul": "Pengantar Administrasi Basis Data", "dosen": "Taufik Hidayat, S.Kom., M.M", "sks": 2, "smt": 3, "ruang": "R. 202", "ket": "-"},
  {"no": 36, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Bahasa Inggris III", "dosen": "Aries Prahatma, S.Sos", "sks": 2, "smt": 3, "ruang": "-", "ket": "PENGUMPULAN"},
  {"no": 37, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Praktikum Perpajakan I", "dosen": "Moch. Nur Hidayat, S.E., M.M", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 38, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Analisa Laporan Keuangan", "dosen": "Dwi Okty Utami, S.E., M.Ak", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 39, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Auditing", "dosen": "Moch. Nur Hidayat, S.E., M.M", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 40, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "UI/UX Desain", "dosen": "Prayogo, S.Kom., M.Kom", "sks": 2, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 41, "kelas": "4221", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Analisa dan Perancangan Sistem Informasi Akuntansi", "dosen": "Dra. Ermanuri, M.M", "sks": 4, "smt": 3, "ruang": "-", "ket": "PJBL"},
  {"no": 42, "kelas": "4211", "hari": "Rabu", "tanggal": "11-11-2026", "jam": "08:00-11:40", "matkul": "Aplikasi Komputer", "dosen": "Nofi Cahyono, S.Kom., M.Kom", "sks": 4, "smt": 1, "ruang": "LAB 302", "ket": "-"},
  {"no": 43, "kelas": "4211", "hari": "Kamis", "tanggal": "12-11-2026", "jam": "08:00-11:40", "matkul": "Perpajakan I", "dosen": "Arief Hidayat, S.T., M.A., BKP", "sks": 4, "smt": 1, "ruang": "R. 202", "ket": "-"},
  {"no": 44, "kelas": "4211", "hari": "Jumat", "tanggal": "13-11-2026", "jam": "08:00-11:40", "matkul": "Dasar-dasar Akuntansi", "dosen": "Drs. Amir Hamzah, M.M", "sks": 4, "smt": 1, "ruang": "R. 202", "ket": "-"},
  {"no": 45, "kelas": "4211", "hari": "Sabtu", "tanggal": "14-11-2026", "jam": "10:00-11:40", "matkul": "Matematika Logika", "dosen": "Sari Prabandari, S.T., M.Pd", "sks": 2, "smt": 1, "ruang": "R. 202", "ket": "-"},
  {"no": 46, "kelas": "4211", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Pengembangan Kepribadian", "dosen": "Suparti, S.Sos., M.A", "sks": 2, "smt": 1, "ruang": "-", "ket": "PJBL"},
  {"no": 47, "kelas": "4211", "hari": "-", "tanggal": "-", "jam": "-", "matkul": "Bahasa Inggris I", "dosen": "Aries Prahatma, S.Sos", "sks": 4, "smt": 1, "ruang": "-", "ket": "PJBL"}
];

function renderTableJadwal(data) {
    const tbody = document.getElementById("jadwal-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 20px;">Jadwal tidak ditemukan.</td></tr>`;
        return;
    }

    data.forEach((item, index) => {
        const tr = document.createElement("tr");
        let ketBadge = `<span class="badge-custom badge-normal">Tatap Muka</span>`;
        if (item.ket === "PJBL") {
            ketBadge = `<span class="badge-custom badge-pjbl">PJBL</span>`;
        } else if (item.ket === "PENGUMPULAN") {
            ketBadge = `<span class="badge-custom badge-pengumpulan">Pengumpulan</span>`;
        }

        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td style="text-align:center;"><b>${item.kelas}</b></td>
            <td><b>${item.hari}</b></td>
            <td style="text-align:center;">${item.tanggal}</td>
            <td style="text-align:center;">${item.jam}</td>
            <td><strong>${item.matkul}</strong></td>
            <td>${item.dosen}</td>
            <td style="text-align:center;">${item.ruang}</td>
            <td style="text-align:center;">${item.sks} SKS</td>
            <td style="text-align:center;">${ketBadge}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterJadwalData() {
    const searchInput = document.getElementById("search-input");
    const classFilter = document.getElementById("class-filter");
    const dayFilter = document.getElementById("day-filter");

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedClass = classFilter ? classFilter.value : "";
    const selectedDay = dayFilter ? dayFilter.value : "";

    let filtered = jadwalExamData.filter(item => {
        const matchesQuery = item.matkul.toLowerCase().includes(query) || 
                             item.dosen.toLowerCase().includes(query) || 
                             item.kelas.toLowerCase().includes(query);
        const matchesClass = selectedClass === "" || item.kelas === selectedClass;
        const matchesDay = selectedDay === "" || item.hari === selectedDay;
        
        return matchesQuery && matchesClass && matchesDay;
    });

    renderTableJadwal(filtered);
}
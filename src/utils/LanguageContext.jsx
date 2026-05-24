import { createContext, useContext, useState } from 'react';

const translations = {
   id: {
      nav: ["beranda", "tentang", "keahlian", "proyek", "sertifikat", "kontak"],
      downloadCV: "Unduh CV",

      home: {
         greeting: "Halo, Saya",
         btnProject: "Lihat Proyek Saya",
         btnCV: "Unduh CV",
         typewriter: ["Web Developer", "Frontend Developer", "Junior Full Stack Developer"],
      },
      about: {
         title: "Tentang Saya",
         p1: "Halo! Nama saya",
         p1b: "seorang pelajar sekaligus pengembang web yang senang mempelajari hal baru di dunia teknologi. Saya suka membuat tampilan website yang rapi, responsif, dan mudah digunakan.",
         p2a: "Saat ini saya fokus di bidang",
         p2b: "namun saya juga terus mengasah kemampuan di sisi",
         p2c: "untuk menjadi developer yang lebih lengkap. Saya juga mampu bekerja dengan baik dalam tim maupun secara individu.",

         expTitle: "Pengalaman & Pendidikan",
         expSubtitle: "Perjalanan karir dan pendidikan saya sejauh ini.",

         timeline: [
            {
               company: "PT. Sinergi Digital Teknologi",
               period: "Januari 2025 - Juni 2025",
               role: "Magang — Junior Full Stack Developer",
               desc: "Membangun aplikasi web HRIS untuk pengelolaan data karyawan internal.",
               side: "left",
            },
            {
               company: "Project Based",
               period: "Juli 2025 - Agustus 2025",
               role: "Frontend Developer",
               desc: "Membangun antarmuka menggunakan Vue.js dan mengintegrasikan API REST.",
               side: "left",
            },
            {
               company: "PT. Inovasi Solusi Internasional",
               period: "Maret 2026 - Mei 2026",
               role: "Magang - Junior Developer",
               desc: "Mempelajari logika pemrograman JavaScript serta melatih kemampuan problem solving dan debugging melalui berbagai studi kasus pengolahan data.",
               side: "left",
            },
            {
               company: "SMK Wikrama Bogor",
               period: "Juni 2023 - Juni 2026",
               role: "Siswa — Jurusan PPLG",
               desc: "Mempelajari pemrograman Web & Mobile, serta pengembangan Frontend & Backend.",
               side: "right",
            },
         ],
      },
      skills: {
         title: "Kemampuan Teknis",
         subtitle: "Teknologi yang saya gunakan dalam pengembangan aplikasi web dan mobile.",
         programming: "Programming & Framework",
         tools: "Tools & Database",
      },
      projects: {
         title: "Proyek Saya",
         subtitle: "Beberapa proyek yang telah saya kerjakan sebagai bagian dari perjalanan saya dalam pengembangan web dan mobile menggunakan teknologi modern.",
         viewDetail: "Lihat Detail",
         close: "Tutup",
         list: [
            {
               title: "Al-Quran Digital",
               description: "Aplikasi Al-Qur'an digital berbasis mobile dengan integrasi API Quran.",
               details: `Aplikasi ini menampilkan daftar surat dan ayat Al-Qur'an secara lengkap, dilengkapi dengan fitur pencarian surat dan tampilan tafsir.\nDibuat menggunakan Flutter dan Dart, aplikasi ini mengambil data langsung dari API Al-Qur'an sehingga informasi selalu up-to-date.\nProyek ini jadi pengalaman berharga buat saya dalam memahami cara kerja API dan mengelola data di Flutter.`,
            },
            {
               title: "Rental Lapangan Olahraga",
               description: "Aplikasi mobile sederhana untuk pemesanan lapangan olahraga.",
               details: `Aplikasi ini dibuat menggunakan Flutter dan Dart dengan fokus utama pada tampilan antarmuka dan navigasi antar halaman.\nProyek ini merupakan hasil slicing dari desain Figma, jadi belum terhubung ke database atau API.\nMeskipun sederhana, aplikasi ini menunjukkan pemahaman saya tentang pembuatan layout yang rapi dan navigasi yang lancar di Flutter.`,
            },
            {
               title: "Data Siswa Sekolah",
               description: "Aplikasi web sederhana untuk mencatat dan mengelola data siswa.",
               details: `Aplikasi ini dibuat menggunakan HTML, CSS, dan PHP untuk mencatat data siswa secara lokal.\nPengguna bisa menambah, mengedit, dan menghapus data siswa dengan mudah tanpa sistem login.\nProyek ini saya buat untuk latihan dasar CRUD dan pengelolaan data sederhana menggunakan PHP.`,
            },
            {
               title: "Bahan Bakar Shell",
               description: "Website simulasi pembelian bahan bakar dengan perhitungan otomatis.",
               details: `Website ini mensimulasikan proses pembelian bahan bakar seperti di SPBU.\nDibuat dengan HTML, CSS, dan PHP, pengguna bisa memilih jenis bahan bakar dan jumlah liter, lalu sistem otomatis menghitung total harga.\nTampilannya dibuat dengan warna khas Shell supaya terlihat profesional dan menarik.`,
            },
            {
               title: "Rental Motor",
               description: "Aplikasi web sederhana untuk mengelola penyewaan motor.",
               details: `Aplikasi ini dibuat untuk membantu mengelola data penyewaan motor.\nMenggunakan HTML, CSS, dan PHP tanpa framework, pengguna bisa menambah data pelanggan, motor, lama sewa, dan sistem otomatis menghitung total biaya.\nDesainnya dibuat sederhana dan mudah dipahami supaya bisa digunakan dengan nyaman.`,
            },
            {
               title: "Cek Keterangan Nilai",
               description: "Aplikasi web sederhana untuk menampilkan hasil keterangan nilai siswa.",
               details: `Aplikasi ini berfungsi untuk menentukan apakah siswa lulus atau tidak berdasarkan nilai yang dimasukkan.\nDibuat menggunakan HTML, CSS, dan PHP tanpa framework agar ringan dan mudah dijalankan.\nTampilannya dibuat sederhana supaya mudah digunakan siapa pun tanpa pengaturan tambahan.`,
            },
            {
               title: "Kalkulator Bunga Majemuk & Bunga Tunggal",
               description: "Aplikasi web untuk menghitung bunga tunggal dan majemuk secara otomatis.",
               details: `Aplikasi ini dibuat untuk menghitung bunga tunggal dan bunga majemuk dengan cepat.\nCukup masukkan modal, suku bunga, dan lama waktu, maka hasilnya langsung muncul di layar.\nDibangun dengan HTML, CSS, dan PHP, tampilannya simpel dan mudah dipahami siapa saja.`,
            },
         ],
      },
      certificates: {
         title: "Sertifikasi",
         subtitle: "Beberapa sertifikat yang saya peroleh sebagai bukti kompetensi dan pembelajaran saya di bidang pengembangan web dan mobile.",
         issuedOn: "Diterbitkan",
      },
      contact: {
         title: "Kontak",
         subtitle:
            "Tertarik untuk bekerja sama, berdiskusi, atau punya proyek yang ingin dikembangkan bersama? Kirim pesan langsung melalui form di bawah ini.",

         name: "Nama",
         email: "Email",
         message: "Pesan",

         namePlaceholder: "Masukkan nama kamu",
         emailPlaceholder: "Masukkan email kamu",
         messagePlaceholder: "Tulis pesan kamu...",

         send: "Kirim Pesan",

         infoTitle: "Informasi Kontak",
         socialTitle: "Temukan Saya",

         location: "Lokasi",
         phone: "Telepon",
      },
   },
   en: {
      nav: ["home", "about", "skills", "projects", "certificates", "contact"],
      downloadCV: "Download CV",

      home: {
         greeting: "Hi, I'm",
         btnProject: "View My Projects",
         btnCV: "Download CV",
         typewriter: ["Web Developer", "Frontend Developer", "Junior Full Stack Developer"],
      },
      about: {
         title: "About Me",
         p1: "Hi! My name is",
         p1b: "a student and web developer who loves learning new things in the world of technology. I enjoy building clean, responsive, and user-friendly websites.",
         p2a: "I'm currently focused on",
         p2b: "but I'm also continuously improving my skills on the",
         p2c: "side to become a more well-rounded developer. I work well both in teams and independently.",

         expTitle: "Experience & Education",
         expSubtitle: "My career and education journey so far.",

         timeline: [
            {
               company: "PT. Sinergi Digital Teknologi",
               period: "January 2025 - June 2025",
               role: "Intern — Junior Full Stack Developer",
               desc: "Built an HRIS web application for managing internal employee data.",
               side: "left",
            },
            {
               company: "Project Based",
               period: "July 2025 - August 2025",
               role: "Frontend Developer",
               desc: "Built UI using Vue.js and integrated REST APIs.",
               side: "left",
            },
            {
               company: "PT. Inovasi Solusi Internasional",
               period: "March 2026 - May 2026",
               role: "Intern - Junior Developer",
               desc: "Learned JavaScript programming logic and practiced problem solving and debugging through various data processing case studies.",
               side: "left",
            },
            {
               company: "SMK Wikrama Bogor",
               period: "June 2023 - June 2026",
               role: "Student — Software Engineering Major",
               desc: "Studied Web & Mobile programming, along with Frontend & Backend development.",
               side: "right",
            },
         ],
      },
      skills: {
         title: "Technical Skills",
         subtitle: "Technologies I use in web and mobile application development.",
         programming: "Programming & Framework",
         tools: "Tools & Database",
      },
      projects: {
         title: "My Projects",
         subtitle: "Some projects I have worked on as part of my journey in web and mobile development using modern technologies.",
         viewDetail: "View Detail",
         close: "Close",
         list: [
            {
               title: "Al-Quran Digital",
               description: "A mobile-based digital Quran app with Quran API integration.",
               details: `This app displays a complete list of Quranic surahs and verses, along with surah search and tafsir view features.\nBuilt with Flutter and Dart, the app fetches data directly from the Quran API so information is always up-to-date.\nThis project was a valuable experience for me in understanding how APIs work and managing data in Flutter.`,
            },
            {
               title: "Sports Field Rental",
               description: "A simple mobile app for booking sports fields.",
               details: `This app was built using Flutter and Dart with a primary focus on UI layout and navigation between screens.\nThe project is a Figma design slicing result, so it is not yet connected to a database or API.\nDespite its simplicity, it demonstrates my understanding of clean layout and smooth navigation in Flutter.`,
            },
            {
               title: "Student Data Management",
               description: "A simple web app to record and manage student data.",
               details: `This app was built using HTML, CSS, and PHP to record student data locally.\nUsers can add, edit, and delete student data easily without a login system.\nI built this project to practice basic CRUD and simple data management using PHP.`,
            },
            {
               title: "Shell Fuel Purchase",
               description: "A fuel purchase simulation website with automatic calculation.",
               details: `This website simulates a fuel purchase process like at a gas station.\nBuilt with HTML, CSS, and PHP, users can select the fuel type and quantity in liters, and the system automatically calculates the total price.\nThe design uses Shell's signature colors to look professional and appealing.`,
            },
            {
               title: "Motorcycle Rental",
               description: "A simple web app for managing motorcycle rentals.",
               details: `This app was built to help manage motorcycle rental data.\nUsing HTML, CSS, and PHP without a framework, users can add customer data, motorcycle info, rental duration, and the system automatically calculates the total cost.\nThe design is kept simple and intuitive for comfortable use.`,
            },
            {
               title: "Grade Check",
               description: "A simple web app to display student grade information.",
               details: `This app determines whether a student passes or fails based on the entered grade.\nBuilt using HTML, CSS, and PHP without a framework to keep it lightweight and easy to run.\nThe interface is kept simple so anyone can use it without additional configuration.`,
            },
            {
               title: "Compound & Simple Interest Calculator",
               description: "A web app to automatically calculate simple and compound interest.",
               details: `This app was built to quickly calculate simple and compound interest.\nJust enter the principal, interest rate, and duration, and the result appears instantly on screen.\nBuilt with HTML, CSS, and PHP, the interface is clean and easy to understand.`,
            },
         ],
      },
      certificates: {
         title: "Certifications",
         subtitle: "Some certificates I have earned as proof of my competence and learning in web and mobile development.",
         issuedOn: "Issued",
      },
      contact: {
         title: "Contact",
         subtitle:
            "Interested in collaborating, discussing ideas, or building a project together? Send a message directly through the form below.",

         name: "Name",
         email: "Email",
         message: "Message",

         namePlaceholder: "Enter your name",
         emailPlaceholder: "Enter your email",
         messagePlaceholder: "Write your message...",

         send: "Send Message",

         infoTitle: "Contact Information",
         socialTitle: "Find Me",

         location: "Location",
         phone: "Phone",
      },
   },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
   const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");

   const toggleLang = () => {
      const next = lang === "id" ? "en" : "id";
      localStorage.setItem("lang", next);
      setLang(next);
   };

   return (
      <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
         {children}
      </LanguageContext.Provider>
   );
}

export function useLanguage() {
   return useContext(LanguageContext);
}
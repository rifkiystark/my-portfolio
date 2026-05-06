import geniusProduct from "../../images/products/genius.png";
import simpegProduct from "../../images/products/simpeg.png";
import cekrpsProduct from "../../images/products/cekrps.png";
import koreksiinProduct from "../../images/products/koreksiin.png";
import mazidaProduct from "../../images/products/mazida.png";
import prokusProduct from "../../images/products/prokus.png";

import laravelTech from "../../images/tech-stack/laravel.png";
import codeigniterTech from "../../images/tech-stack/codeigniter.png";
import expressjsTech from "../../images/tech-stack/expressjs.png";
import firebaseTech from "../../images/tech-stack/firebase.png";
import kotlinTech from "../../images/tech-stack/kotlin.png";
import mongodbTech from "../../images/tech-stack/mongodb.png";
import mysqlTech from "../../images/tech-stack/mysql.png";

const tech = {
    laravel: { name: "Laravel", icon: laravelTech },
    codeigniter: { name: "CodeIgniter", icon: codeigniterTech },
    expressjs: { name: "ExpressJS", icon: expressjsTech },
    firebase: { name: "Firebase", icon: firebaseTech },
    kotlin: { name: "Kotlin", icon: kotlinTech },
    mongodb: { name: "MongoDB", icon: mongodbTech },
    mysql: { name: "MySQL", icon: mysqlTech },
};

const dataProducts = [
    {
        productName: "Genius Backend API",
        category: "Backend API",
        role: "Backend Developer",
        highlight: "API sosial gamer, top up voucher, dan pembayaran digital.",
        description: "Genius adalah aplikasi media sosial untuk komunitas gamer yang dilengkapi fitur top up voucher game. Saya bertanggung jawab membangun REST API menggunakan ExpressJS, mengintegrasikan layanan top up pihak ketiga, menangani alur payment gateway, dan mengelola data aplikasi dengan MongoDB serta Firebase.",
        techStack: [tech.expressjs, tech.mongodb, tech.firebase],
        image: geniusProduct,
        imageAlt: "Tampilan aplikasi Genius Backend API",
        url: "",
        ctaLabel: "Private project"
    },
    {
        productName: "SIMPEG",
        category: "Web Application",
        role: "Fullstack Developer",
        highlight: "Sistem kepegawaian dengan absensi GPS dan laporan data.",
        description: "SIMPEG adalah sistem informasi kepegawaian berbasis web yang dibangun menggunakan Laravel. Saya mengembangkan aplikasi ini dari awal, mulai dari import data pegawai, absensi berbasis GPS, pengelolaan data kepegawaian, pembuatan laporan, hingga export data untuk kebutuhan administrasi organisasi.",
        techStack: [tech.laravel, tech.mysql, tech.kotlin],
        image: simpegProduct,
        imageAlt: "Dashboard dan tampilan SIMPEG",
        url: "https://sim.yppmnu.or.id/simpeg",
        ctaLabel: "Buka aplikasi"
    },
    {
        productName: "CekRPS",
        category: "Android & Web",
        role: "Android Developer",
        highlight: "Pencocokan kemiripan RPS dengan soal ujian.",
        description: "CekRPS adalah aplikasi Android dan web yang digunakan untuk mengecek tingkat kemiripan antara Rencana Pembelajaran Semester dan soal ujian. Saya bertanggung jawab mengembangkan aplikasi Android menggunakan Kotlin serta mengubah algoritma pencocokan menjadi fitur yang bisa digunakan langsung oleh pengguna.",
        techStack: [tech.codeigniter, tech.mysql, tech.kotlin],
        image: cekrpsProduct,
        imageAlt: "Tampilan aplikasi CekRPS",
        url: "https://drive.google.com/drive/folders/1wBmitcIk2Nr45whF6dQdIgJph4ZjpPOq?usp=sharing",
        ctaLabel: "Lihat dokumentasi"
    },
    {
        productName: "Koreksi.in",
        category: "Web Application",
        role: "Frontend & Algorithm Implementation",
        highlight: "Koreksi jawaban esai berbasis web.",
        description: "Koreksi.in adalah aplikasi web untuk membantu proses koreksi jawaban esai secara otomatis. Saya berperan dalam pembuatan antarmuka pengguna dan mengubah algoritma koreksi menjadi logic aplikasi agar evaluasi jawaban esai dapat dilakukan lebih cepat, konsisten, dan efisien.",
        techStack: [tech.codeigniter, tech.mysql],
        image: koreksiinProduct,
        imageAlt: "Tampilan website Koreksi.in",
        url: "https://koreksi.in/",
        ctaLabel: "Buka website"
    },
    {
        productName: "MAZIDA",
        category: "Android Application",
        role: "Mobile & Backend Developer",
        highlight: "Aplikasi terapi audio dengan backend sendiri.",
        description: "MAZIDA adalah aplikasi Android terapi berbasis audio. Saya mengembangkan aplikasi Android menggunakan Kotlin, mulai dari perancangan tampilan, implementasi pemutar audio, hingga pembuatan backend menggunakan ExpressJS dan MongoDB untuk mengelola data serta konten aplikasi.",
        techStack: [tech.expressjs, tech.mongodb, tech.kotlin],
        image: mazidaProduct,
        imageAlt: "Tampilan aplikasi MAZIDA",
        url: "https://drive.google.com/file/d/1d5LOIgejBLzVMGX_z79vWg0kKV_ykJd8/view?usp=sharing",
        ctaLabel: "Lihat aplikasi"
    },
    {
        productName: "ProKus ITTP",
        category: "Web & Android",
        role: "Feature Developer",
        highlight: "Presensi dan log book untuk monitoring program.",
        description: "ProKus ITTP adalah aplikasi web dan Android hasil kolaborasi Institut Teknologi Telkom Purwokerto dengan Kemensos. Saya fokus mengembangkan fitur presensi dan log book untuk mendukung pemantauan, pencatatan aktivitas, dan dokumentasi program secara lebih terstruktur.",
        techStack: [tech.laravel, tech.mysql, tech.kotlin],
        image: prokusProduct,
        imageAlt: "Tampilan aplikasi ProKus ITTP",
        url: "https://prokus.ittelkom-pwt.ac.id/",
        ctaLabel: "Buka website"
    },
];

export default dataProducts;

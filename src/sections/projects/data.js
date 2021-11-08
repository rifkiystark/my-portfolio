import geniusProduct from "../../images/products/genius.png";
import simpegProduct from "../../images/products/simpeg.png";
import cekrpsProduct from "../../images/products/cekrps.png";
import koreksiinProduct from "../../images/products/koreksiin.png";
import mazidaProduct from "../../images/products/mazida.png";


import laravelTech from "../../images/tech-stack/laravel.png";
import codeigniterTech from "../../images/tech-stack/codeigniter.png";
import expressjsTech from "../../images/tech-stack/expressjs.png";
import firebaseTech from "../../images/tech-stack/firebase.png";
import kotlinTech from "../../images/tech-stack/kotlin.png";
import mongodbTech from "../../images/tech-stack/mongodb.png";
import mysqlTech from "../../images/tech-stack/mysql.png";

const dataProducts = [
    {
        productName: "Genius Backend API",
        description: "Genius is social media app but focused for gamers and also can topup game voucher. My responsibility is create Genius backend restapi with expressjs that integrated with topup provider and payment gateway.",
        techStack: [expressjsTech, mongodbTech, firebaseTech],
        image: geniusProduct
    },
    {
        productName: "SIMPEG",
        description: "SIMPEG (Sistem Informasi Kepegawaian) is website application built with Laravel Framework. My responsibility is create that webapp from scratch starting from importing employee data, GPS attendance, exporting data, etc.",
        techStack: [laravelTech, mysqlTech, kotlinTech],
        image: simpegProduct
    },
    {
        productName: "CekRPS",
        description: "CekRPS is android and web application used to match the similarity between rps (rencana pembelajaran semester) and exam questions. My responsibility is to create the android apps using kotlin and transform the algorithm into the code.",
        techStack: [codeigniterTech, mysqlTech, kotlinTech],
        image: cekrpsProduct
    },
    {
        productName: "Koreksi.in",
        description: "This application used to correct essay answers. My responsibility is to create the user interface and transform the algorithm into the code.",
        techStack: [codeigniterTech, mysqlTech],
        image: koreksiinProduct
    },
    {
        productName: "MAZIDA",
        description: "MAZIDA is a terapist android application based on audio. My responsibility is to create the application with kotlin start from design the ui, working with media player (audio) and also create the backend with ExpressJS and mongoDB for the database. ",
        techStack: [expressjsTech, mongodbTech, kotlinTech],
        image: mazidaProduct
    },
];

export default dataProducts;
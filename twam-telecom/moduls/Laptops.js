import { initializeApp, getApps } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Firebase կոնֆիգ
const firebaseConfig = {
    apiKey: "AIzaSyB-1MIYq451lXZAF5ydtyWemITZ0pr4v-A",
    authDomain: "team-bf1ea.firebaseapp.com",
    projectId: "team-bf1ea",
    storageBucket: "team-bf1ea.appspot.com",
    messagingSenderId: "84168862389",
    appId: "1:84168862389:web:305a9d399a1cde1c622cfc",
    measurementId: "G-3DETMXZYHK"
};

// Initialize Firebase only once
if (!getApps().length) {
    initializeApp(firebaseConfig);
}
const db = getFirestore();

// Քո laptops զանգվածը
const Laptops = [
    {
        id: 1,
        anun: "Նոթբուք Dell Vostro 3520 i5-1235U ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17473924521922/245x280c-center.png",
        gin: "209,900 ֏",
    },
    {
        id: 2,
        anun: "'Պլանշետ Apple iPad Wi-Fi 11' | 128 GB",
        nkar: "https://www.telecomarmenia.am/images/product/9/17437615607957/245x280c-center.jpeg",
        gin: "189,900 ֏",
    },
    {
        id: 3,
        anun: "Նոթբուք Apple Macbook Air 13' M4 ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17437587893972/245x280c-center.jpeg",
        gin: "522,900 ֏",
    },
    {
        id: 4,
        anun: "Պլանշետ Oscal Pad 70 | 64 GB",
        nkar: "https://www.telecomarmenia.am/images/product/9/17417804221824/245x280c-center.jpeg",
        gin: "44,900 ֏",
    },
    {
        id: 5,
        anun: "Նոթբուք Dell Vostro 3520 i3-1215U ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17375288616621/245x280c-center.png",
        gin: "159,900 ֏",
    },
    {
        id: 6,
        anun: "Նոթբուք Asus Vivobook E410MA ",
        nkar: "https://www.telecomarmenia.am/images/product/9/17362300586986/245x280c-center.png",
        gin: "115,900 ֏",
    },
    {
        id: 7,
        anun: "Նոթբուք ASUS E1504G (90NB0ZT2-M011A0) ",
        nkar: "https://www.telecomarmenia.am/images/product/8/17331375273452/245x280c-center.jpeg",
        gin: "175,000 ֏",
    },
    {
        id: 8,
        anun: "Նոթբուք Apple MacBook Air 13' M3 ",
        nkar: "https://www.telecomarmenia.am/images/product/10/1749621552109/245x280c-center.jpeg",
        gin: "599,900 ֏",
    },
    {
        id: 9,
        anun: "Պլանշետ Apple iPad WiFi 10.9 | 64 GB",
        nkar: "https://www.telecomarmenia.am/images/product/6/16793028005474/245x280c-center.jpeg",
        gin: "209,900 ֏",
    },
];

// Մաքրում ենք գները միայն թվերով
const cleanedLaptops = Laptops.map((item) => ({
    ...item,
    gin: item.gin.replace(/[^\d]/g, "") // օրինակ՝ "189900"
}));

// Բեռնման ֆունկցիա
async function uploadLaptops() {
    try {
        await setDoc(doc(db, "equipment", "laptops"), {
            items: cleanedLaptops,
            updatedAt: new Date().toISOString()
        });
        console.log("✅ Laptops հաջողությամբ բեռնվեցին Firebase");
    } catch (error) {
        console.error("❌ Սխալ տվյալ բեռնելիս:", error);
    }
}

// Կանչում ենք ֆունկցիան
uploadLaptops();

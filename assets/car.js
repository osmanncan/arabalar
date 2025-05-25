let komut = prompt('İstediginiz araba modelini giriniz: ');

let arabalar = [
    { 
        brand: "Ford", 
        model: "Mustang", 
        color: "Mavi" 
    },
    { 
        brand: "BMW", 
        model: "3 Serisi", 
        color: "Siyah" 
    },
    { 
        brand: "Mercedes-Benz", 
        model: "E Serisi", 
        color: "Kırmızı" 
    },
    { 
        brand: "Toyota", 
        model: "Corolla", 
        color: "Beyaz" 
    },
    { 
        brand: "Honda", 
        model: "Civic", 
        color: "Gri" 
    },
    { 
        brand: "Volkswagen", 
        model: "Golf", 
        color: "Yeşil" 
    },
    { 
        brand: "Audi", 
        model: "A4", 
        color: "Turuncu" 
    },
    { 
        brand: "Porsche", 
        model: "911", 
        color: "Sarı" 
    },
    { 
        brand: "Ferrari", 
        model: "488 GTB", 
        color: "Lacivert" 
    },
    { 
        brand: "Lamborghini", 
        model: "Aventador", 
        color: "Altın" 
    },
    { 
        brand: "Tesla", 
        model: "Model S", 
        color: "Gümüş" 
    },
    { 
        brand: "Subaru", 
        model: "Impreza", 
        color: "Mor" 
    },
    { 
        brand: "Chevrolet", 
        model: "Camaro", 
        color: "Turkuaz" 
    },
    { 
        brand: "Hyundai", 
        model: "Tucson", 
        color: "Kahverengi" 
    },
    { 
        brand: "Kia", 
        model: "Sportage", 
        color: "Pembe" 
    },
    { 
        brand: "Nissan", 
        model: "Altima", 
        color: "Beyaz" 
    },
    { 
        brand: "Jaguar", 
        model: "F-Type", 
        color: "Siyah" 
    },
    { 
        brand: "Land Rover", 
        model: "Range Rover", 
        color: "Gri" 
    },
    { 
        brand: "Volvo", 
        model: "XC90", 
        color: "Yeşil" 
    },
    { 
        brand: "Mazda", 
        model: "MX-5", 
        color: "Kırmızı" 
    }
];

eslesmeVar = false; // eşleşme bulunamadı

for (let i = 0; i < arabalar.length; i++) {
if (arabalar[i].brand.toLowerCase() === komut.toLowerCase()) {
    console.log(`${arabalar[i].brand} - ${arabalar[i].model} (${arabalar[i].color})`);
     eslesmeVar = true; // eşleşme bulundu 
       
    }
}

if (!eslesmeVar) {
    console.log("Üzgünüm, eşleşen araba yok.");
}

// Notlarım: 
// arabalar[i].brand.toLowerCase() === komut.toLowerCase()) 'i' dizide ki birinci elemanı çagırır ama 0-1-2 diye başlıyor
//toLowerCase() kelimeleri küçük harfe çevirir
//arabalar[i].brand burda brand arabanın modelini alır yani kullanıcının yazdıgı modeli brandla dizide ararız
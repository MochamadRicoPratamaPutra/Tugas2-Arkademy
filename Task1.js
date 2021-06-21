// console.log('Method bawaan atau Built-in Javascript');
// console.log(`1. Include()
// Method include metentukan apakah suatu string terdapat suatu karakter atau spesifik string`);
let nama = "Mochamad Rico Pratama Putra";
let panggilan = nama.includes("Rico");
console.log(panggilan);
// console.log(`2. isNaN()
// Function untuk menentukan apakah suatu nilai bersifat NaN(Not-a-Value)`);
console.log(isNaN('NaN'));
// console.log(`3. toLocaleUpperCase()
// Method yang merubah suatu string menjadi uppercase letters, sesuai dengan lokal host saat ini `);
let pengumuman = "Pengumuman sbmptn";
let pengumumanFix = pengumuman.toLocaleUpperCase();
console.log(pengumumanFix);
// console.log(`4. toLowerCase()
// Method yang merubah suatu string menjadi lowecase letter`);
let test = 'MENCOBA Lowecase MeThOD'
let hasil = test.toLowerCase()
console.log(hasil);
// console.log(`5. toString()
// Method yang mereturn value objek string`);
let HW = 3000000
let str = HW.toString()
console.log(typeof(str));
// console.log(`6. sqrt()
// Method yang mereturn akar kuadrat dari suatu angka`);
let umur = Math.sqrt(16)
console.log(umur);
// console.log(`7. concat()
// Method yang digunakan untuk menggabungkan dua array atau lebih`);
let olahragaFisik = ['Bola', 'Bulutangkis', 'Basket', 'Baseball', 'Tennis']
let eSports = ['Dota 2', 'League of Legend', 'Counter-Strike Global Offensive', "Tom Clancy's Rainbow Six Siege", 'Valorant']
let olahraga = olahragaFisik.concat(eSports)
console.log(olahraga);
// console.log(`8. slice()
// Method untuk mereturn element yang dipilih didalam array sebagai objek array yang baru`);
let binatang = ['Singa', 'Harimau', 'Kucing', 'Hiu', 'Lumba - Lumba', 'Paus']
let binatangDarat = binatang.slice(0,3)
console.log(binatangDarat);
// console.log(`9. Join()
// Method untuk mereturn array sebagai string. Tiap elemen akan dipisahkan dengan spesifik operator. Secara default separatornya adalah koma`);
let list = ['Ini', 'adalah', 'string']
let strng = list.join()
let tipeStrng = typeof(strng)
console.log(`${strng}
tipe datanya adalah ${tipeStrng}`);
// console.log(`10. shift()
// Method untuk membuang item pertama dalam array. Hasil yang direturn adalah item yang dibuang`);
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(angka.shift());
console.log(angka);
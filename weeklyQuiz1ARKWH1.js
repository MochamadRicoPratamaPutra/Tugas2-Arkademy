const arkFood = (harga, voucher, jarak, pajak) =>{
    let hasil = []
    let totalHarga
    //Perhitungan diskon
    let hargaDiskon
    let tipe = typeof(voucher)
    let uper = voucher.toLocaleUpperCase()
    if (tipe != 'string' || (uper != 'ARKAFOODS' && uper != 'DITRAKTIRDEMY')) {
        hargaDiskon = 0
    }else {
        if (uper == 'ARKAFOODS' && harga >= 50000) {
             hargaDiskon = harga * 50/100
            if (hargaDiskon>50000) {
                hargaDiskon = 50000
            }
        }else if (uper == 'DITRAKTIRDEMY' && harga >= 25000){
            hargaDiskon = harga * 60/100
            if (hargaDiskon>30000) {
                hargaDiskon = 30000
            }
        }else {
            hargaDiskon = 0
        }
    }
    //Perhitungan Pajak
    let hargaPajak
    if (pajak == true){
        hargaPajak = harga * 5/10
    }else{
        hargaPajak = 0
    }
    //Perhitungan Jarak
    let tarif
    if (jarak > 2) {
        tarif = 5000 + 3000*(jarak-2)
    }else{
        tarif = 5000
    }
    totalHarga = harga - hargaDiskon + hargaPajak + tarif
    hasil.push(harga, hargaDiskon, tarif, hargaPajak, totalHarga)
    return hasil
}
const hasil = arkFood(30000, 'ditraktirdemy', 2, false)
console.log(`Harga : ${hasil[0]}
Potongan : ${hasil[1]}
Biaya Antar : ${hasil[2]}
Pajak : ${hasil[3]}
SubTotal : ${hasil[4]}`);

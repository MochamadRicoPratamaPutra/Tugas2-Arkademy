const arkFood = (harga, voucher, jarak, pajak) => {
    let hargaDiskon, useVoucher, newHarga, pajakHarga, tarif, total
    let tipe = typeof(voucher)
    let uper = voucher.toLocaleUpperCase()
    if (tipe != 'string' || (uper != 'ARKAFOODS' && uper != 'DITRAKTIRDEMY')) {
        useVoucher = false
    }else {
        if (uper == 'ARKAFOODS' && harga >= 50000) {
             hargaDiskon = harga * 50/100
            if (hargaDiskon>50000) {
                hargaDiskon = 50000
                newHarga = harga - 50000
                useVoucher = true
            }else{
                 newHarga = harga - hargaDiskon
                 useVoucher = true
            }
        }else if (uper == 'DITRAKTIRDEMY' && harga >= 25000){
             hargaDiskon = harga * 60/100
            if (hargaDiskon>30000) {
                hargaDiskon = 30000
                newHarga = harga - 30000
                useVoucher = true
            }else{
                newHarga = harga - hargaDiskon
                useVoucher = true
            }
        }else {
            let useVoucher = false
        }
    }
    if (pajak == true) {
        if (jarak <= 2) {
            if (useVoucher == true) {
                 pajakHarga = harga * 5/100
                 tarif = 5000
                 total = newHarga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }else{
                 hargaDiskon = 0
                 pajakHarga = harga * 5/100
                 tarif = 5000
                 total = harga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }
        }else{
            if (useVoucher == true) {
                 pajakHarga = harga * 5/100
                 tarif = 5000 + 3000*(jarak - 2)
                 total = newHarga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }else{
                 hargaDiskon = 0
                 pajakHarga = harga * 5/100
                 tarif = 5000 + 3000*(jarak - 2)
                 total = harga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }
        }
    }else{
        if (jarak <= 2) {
            if (useVoucher == true) {
                 pajakHarga = 0
                 tarif = 5000
                 total = newHarga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }else{
                 hargaDiskon = 0
                 pajakHarga = 0
                 tarif = 5000
                 total = harga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }
        }else{
            if (useVoucher == true) {
                 pajakHarga = 0
                 tarif = 5000 + 3000*(jarak - 2)
                 total = newHarga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                 return hasil
            }else{
                 hargaDiskon = 0
                 pajakHarga = 0
                 tarif = 5000 + 3000*(jarak - 2)
                 total = harga + pajakHarga + tarif
                 const hasil = [harga, hargaDiskon, tarif, pajakHarga, total]
                return hasil
            }
        }
    }
}

const test = arkFood(30000, 'arkafoods', 5, true)
console.log(test)//`Harga : ${harga}
// Harga Diskon : ${hargaDiskon}
// Tarif : ${tarif}
// Pajak : ${pajakHarga}
// Total : ${total}`);
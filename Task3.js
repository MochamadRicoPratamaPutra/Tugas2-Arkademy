const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
    let hasil = []
    if (typeof(nilaiAwal) != 'number') {
        console.log('Error, masukkan nilai awal berupa angka');
        return hasil
    }else if (typeof(nilaiAkhir) != 'number') {
        console.log('Error, masukkan nilai akhir berupa angka');
        return hasil
    }else if (nilaiAwal >= nilaiAkhir) {
        console.log('Error, nilai awal harus lebih kecil dari nilai akhir');
        return hasil
    }else if (Array.isArray(dataArray) != true) {
        console.log('Error, data harus bertipe array');
        return hasil
    }else if (dataArray.length <=5) {
        console.log('Error, data array harus berjumlah lebih dari 5');
        return hasil
    }
    else {
        let salah = 0
        for (let i = 0; i < dataArray.length; i++) {
            if (typeof dataArray != 'number') {
                salah = 1
            }
        }
        if (salah == 0) {
            urut = dataArray.sort();
            for (let index = 0; index < urut.length; index++) {
                if (urut[index]<=nilaiAkhir && urut[index]>=nilaiAwal) {
                    hasil.push(urut[index])
                }
            }
            return hasil
        }else{
            console.log('Mohon isi data Array dengan angka');
            return hasil
        }
    }
}
hasil = seleksiNilai(5, 20, [20, 'test', 50, 11, 15, 17, 19])
if (hasil.length == 0) {
    console.log('Jumlah angka dalam dataArray tidak ada');
}else{
    console.log(hasil);
}
const search = (hurufYangDicari, namaYangDicari) =>{
  let newHuruf = hurufYangDicari.toLowerCase()
  let index = []
  for (let i = 0; i < namaYangDicari.length; i++) {
    if (namaYangDicari[i].includes(newHuruf)){
      index.push(i)
    }
  }
  return index
}
const searchName = (huruf, jumlahNama, callback) => {
  const name = ['Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
  ]
  if (typeof huruf != 'string') {
    console.log('Data kata yang ingin dicari salah');
  }else if (typeof jumlahNama != 'number' || jumlahNama <0) {
    console.log('Data jumlah nama yang ingin dikeluarkan salah');
  }else if (typeof callback != 'function') {
    console.log('Data function yang dimasukan salah');
  }
  let newname = []
  for (let i = 0; i < name.length; i++) {
    newname.push(name[i].toLowerCase())
  }
  hasil = callback(huruf, newname)
  if (hasil.length == 0) {
    console.log(`Nama dengan keyword ${huruf} tidak ada`);
  }else{
    console.log(`Nama dengan keyword ${huruf} adalah sebagai berikut: `);
    for (let i = 0; i < jumlahNama; i++) {
      let tipe = typeof(hasil[i])
      if (tipe != 'undefined') {
        console.log(`${i+1}. ${name[hasil[i]]}`);
      }
    }
  }
}
searchName('an', 5, search)
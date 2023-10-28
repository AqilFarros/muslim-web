window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY >= 0);

    const back = document.querySelector('.kembali');
    back.classList.toggle('block', window.scrollY > 100)
})

document.getElementById('menu').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active')
}

const city = '0506';
const date = new Date();
const dd = String(date.getDate()).padStart(2, '0'); //padStart ITU BUAT DIDEPAN ANGKA ADA ANGKA 0 JIKA DIGITNYA KURANG DARI BATAS YANG KITA TENTUKAN
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
const hour = String(date.getHours()).padStart(2, '0');
const minute = String(date.getMinutes()).padStart(2, '0');
const clockNow = `${hour}:${minute}`;

console.log(mm);

const now = yyyy + '-' + mm + '-' + dd;

// JADWAL SHALAT API
const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`;

fetch(jadwalApi)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('API tidak dapat di akses, ada yang salah!!!!')
        }
        return response.json();
    })
    .then((data) => {
        const jadwal = data.data;
        const list = jadwal.jadwal;
        const listJadwal = document.getElementById('list-jadwal');
        const kota = document.getElementById('city');
        const prov = document.getElementById('prov');

        kota.innerHTML = jadwal.lokasi;
        prov.innerHTML = jadwal.daerah;

        // list.forEach(el => {
        //     const tr = document.createElement('tr');

        // TANGGAL
        // const dd = document.createElement('td');
        // const Imsak = document.createElement('td');
        // const Shubuh = document.createElement('td');
        // const Terbit = document.createElement('td');
        // const Dzuhur = document.createElement('td');
        // const Ashar = document.createElement('td');
        // const Maghrib = document.createElement('td');
        // const Isya = document.createElement('td');
        //     const waktuShalat = [1, 2, 3, 4 ,5 ,6 ,7, 8];
        //     const elemenWaktuShalat = waktuShalat.map(shalat => document.createElement('td'));
        //     const [dd, Imsak, Shubuh, Terbit, Dzuhur, Ashar, Maghrib, Isya] = elemenWaktuShalat;
        //     dd.innerText = el.tanggal;
        //     Imsak.innerText = el.imsak;
        //     Shubuh.innerText = el.subuh;
        //     Terbit.innerText = el.terbit;
        //     Dzuhur.innerText = el.dzuhur;
        //     Ashar.innerText = el.ashar;
        //     Maghrib.innerText = el.maghrib;
        //     Isya.innerText = el.isya;
        //     dd.classList.add('date');

        //     listJadwal.appendChild(tr);
        //     // tr.appendChild(dd);
        //     // tr.appendChild(Imsak);

        //     const listShalat = [
        //         dd, Imsak, Shubuh, Terbit, Dzuhur, Ashar, Maghrib, Isya
        //     ]

        //     for (let i = 0; i < listShalat.length; i++) {
        //         tr.appendChild(listShalat[i]);
        //     }
        // })

        list.forEach(el => {
            const tr = document.createElement('tr');

            if (el.date === now) {
                tr.classList.add('table-primary')
            }

            let arrayShalat = ['tanggal', 'imsak', 'subuh', 'terbit', 'dzuhur', 'ashar', 'maghrib', 'isya'];
            let array1 = ['subuh', 'terbit', 'dhuha', 'dzuhur', 'ashar', 'maghrib', 'isya'];
            let array2 = ['terbit', 'dhuha', 'dzuhur', 'ashar', 'maghrib', 'isya', 'subuh'];
            let array3 = ['isya'];
            let array4 = ['subuh'];
            let array5 = ['dzuhur'];
            let array6 = ['terbit'];
            let array7 = ['dhuha'];

            arrayShalat.forEach(shalat => {
                const td = document.createElement('td');
                td.innerText = el[shalat];

                tr.appendChild(td);
            })
            document.getElementById('list-jadwal').appendChild(tr);

            let solat = document.querySelector('#solat');


            array1.forEach(function (solat1) {
                array2.forEach(function (solat2) {
                    array3.forEach(function (solat3) {
                        array4.forEach(function (solat4) {
                            array5.forEach(function (solat5) {
                                array6.forEach(function(solat6) {
                                    array7.forEach(function(solat7) {
                                        let solat5Time = el[solat5].split(':'); // Memisahkan jam dan menit
                                        let jam = parseInt(solat5Time[0], 10);
                                        let menit = parseInt(solat5Time[1], 10);
        
                                        // Mengurangkan 15 menit
                                        menit -= 15;
        
                                        // Menangani menit negatif (meminjam dari jam)
                                        if (menit < 0) {
                                            menit += 60;
                                            jam -= 1;
                                        }
        
                                        // Memformat hasilnya kembali ke format "HH:mm"
                                        let jamFormatted = jam.toString().padStart(2, '0');
                                        let menitFormatted = menit.toString().padStart(2, '0');
                                        let larang = `${jamFormatted}:${menitFormatted}`;
        
                                        console.log(larang);
                                        if (clockNow >= el[solat6] && clockNow < el[solat7]) {
                                            solat.innerHTML = 'syuruq'
                                        }else if (clockNow >= el[solat1] && clockNow <= el[solat2]) {
                                            solat.innerHTML = solat1;
                                        } else if (clockNow >= el[solat3]) {
                                            solat.innerHTML = solat3;
                                        } else if (clockNow >= '00:00' && clockNow <= el[solat4]) {
                                            solat.innerHTML = solat3;
                                        } else if (clockNow >= larang && clockNow < el[solat5]) {
                                            solat.innerHTML = '(waktu dilarang shalat!!!)'
                                        }
                                    })
                                })
                                
                            })
                        })
                    })
                })
            })
        })
    })

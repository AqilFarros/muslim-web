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
            ['tanggal', 'imsak', 'subuh', 'terbit', 'dzuhur', 'ashar', 'maghrib', 'isya'].forEach(shalat => {
                const td = document.createElement('td');
                td.innerText = el[shalat];

                tr.appendChild(td);
            })
            document.getElementById('list-jadwal').appendChild(tr);
        })
    })

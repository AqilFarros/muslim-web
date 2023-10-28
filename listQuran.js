window.addEventListener('load', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY >= 0);
})

window.addEventListener('scroll', function() {
    const back = document.querySelector('.kembali');
    back.classList.toggle('block', window.scrollY > 100)
})

document.getElementById('menu').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active')
}

window.onload = function() {
    getDataQuran();
    tampilData();
}

function getDataQuran() {
    fetch('https://api.banghasan.com/quran/format/json/surat')
    .then(function(response) {
        if (!response.ok) {
            throw new Error ('Gagal mengambil data')
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        displayData1(data);
        displayData2(data);
        displayData3(data);
    })
    .catch(function(error) {
        console.log('terjadi kesalahan', error);
    })
}

function displayData1(data) {
    let resultDiv = document.querySelector('#bagian1');
    resultDiv.innerHTML = '';

    let surat1 = data.hasil.slice(0, 38)

    surat1.forEach(function(surat) {
        let suratDiv = document.createElement('div');
        suratDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorSurat = document.createElement('button');
        nomorSurat.innerHTML = surat.nomor;
        nomorSurat.classList.add('nomor');

        let namaSurat = document.createElement('h3');
        namaSurat.innerHTML = surat.nama;
        namaSurat.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabSurat = document.createElement('h2');
        arabSurat.innerHTML = surat.asma;
        arabSurat.classList.add('arab');

        let ayatSurat = document.createElement('p');
        ayatSurat.innerHTML = 'Ayat : ' + surat.ayat;
        ayatSurat.classList.add('ayat');

        let artiSurat = document.createElement('p');
        artiSurat.innerHTML = 'Arti : ' + surat.arti;
        artiSurat.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        suratDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorSurat);
        abuDiv.appendChild(namaSurat);
        // abuDiv.appendChild(gambar);
        suratDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabSurat);
        putihDiv.appendChild(ayatSurat);
        putihDiv.appendChild(artiSurat);
        putihDiv.appendChild(value);
        resultDiv.appendChild(suratDiv)
    })
}

function displayData2(data) {
    let resultDiv = document.querySelector('#bagian2');
    resultDiv.innerHTML = '';

    let surat1 = data.hasil.slice(38, 76)

    surat1.forEach(function(surat) {
        let suratDiv = document.createElement('div');
        suratDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorSurat = document.createElement('button');
        nomorSurat.innerHTML = surat.nomor;
        nomorSurat.classList.add('nomor');

        let namaSurat = document.createElement('h3');
        namaSurat.innerHTML = surat.nama;
        namaSurat.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabSurat = document.createElement('h2');
        arabSurat.innerHTML = surat.asma;
        arabSurat.classList.add('arab');

        let ayatSurat = document.createElement('p');
        ayatSurat.innerHTML = 'Ayat : ' + surat.ayat;
        ayatSurat.classList.add('ayat');

        let artiSurat = document.createElement('p');
        artiSurat.innerHTML = 'Arti : ' + surat.arti;
        artiSurat.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        suratDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorSurat);
        abuDiv.appendChild(namaSurat);
        // abuDiv.appendChild(gambar);
        suratDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabSurat);
        putihDiv.appendChild(ayatSurat);
        putihDiv.appendChild(artiSurat);
        putihDiv.appendChild(value);
        resultDiv.appendChild(suratDiv)
    })
}

function displayData3(data) {
    let resultDiv = document.querySelector('#bagian3');
    resultDiv.innerHTML = '';

    let surat1 = data.hasil.slice(76)

    surat1.forEach(function(surat) {
        let suratDiv = document.createElement('div');
        suratDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorSurat = document.createElement('button');
        nomorSurat.innerHTML = surat.nomor;
        nomorSurat.classList.add('nomor');

        let namaSurat = document.createElement('h3');
        namaSurat.innerHTML = surat.nama;
        namaSurat.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabSurat = document.createElement('h2');
        arabSurat.innerHTML = surat.asma;
        arabSurat.classList.add('arab');

        let ayatSurat = document.createElement('p');
        ayatSurat.innerHTML = 'Ayat : ' + surat.ayat;
        ayatSurat.classList.add('ayat');

        let artiSurat = document.createElement('p');
        artiSurat.innerHTML = 'Arti : ' + surat.arti;
        artiSurat.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        suratDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorSurat);
        abuDiv.appendChild(namaSurat);
        // abuDiv.appendChild(gambar);
        suratDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabSurat);
        putihDiv.appendChild(ayatSurat);
        putihDiv.appendChild(artiSurat);
        putihDiv.appendChild(value);
        resultDiv.appendChild(suratDiv)
    })
}

function tampilData(event, targetSurat) {
    let i = 0;
    let bagianSurat = document.getElementsByClassName('pembungkus');

    for (i = 0; i < bagianSurat.length; i++) {
        bagianSurat[i].style.display = "none";
    }

    document.getElementById(targetSurat).style.display = 'block';

    let btn = document.getElementsByClassName('btn');

    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace(' active', '');
    }

    event.currentTarget.classList.add('active');
}
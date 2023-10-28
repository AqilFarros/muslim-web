window.addEventListener('load', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky');
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
    getDataAsma();
    tampilData();
}

function getDataAsma() {
    fetch('https://api.aladhan.com/v1/asmaAlHusna')
    .then(function(response) {
        if (!response.ok) {
            throw new Error ('Gagal mengambil data')
        } else {
            return response.json();
        }
    })
    .then(function(asma) {
        displayDataAsma1(asma);
        displayDataAsma2(asma);
        displayDataAsma3(asma);
    })
    .catch(function(error) {
        console.log('terjadi kesalahan', error);
    })
}

function displayDataAsma1(asma) {
    let resultDiv = document.querySelector('#bagian1');
    resultDiv.innerHTML = '';

    let asma1 = asma.data.slice(0, 33)

    asma1.forEach(function(asma) {
        let asmaDiv = document.createElement('div');
        asmaDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorAsma = document.createElement('button');
        nomorAsma.innerHTML = asma.number;
        nomorAsma.classList.add('nomor');

        let namaAsma = document.createElement('h3');
        namaAsma.innerHTML = asma.transliteration;
        namaAsma.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabAsma = document.createElement('h2');
        arabAsma.innerHTML = asma.name;
        arabAsma.classList.add('arab');

        let artiAsma = document.createElement('p');
        artiAsma.innerHTML = 'The meaning is ' + asma.en.meaning;
        artiAsma.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        asmaDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorAsma);
        abuDiv.appendChild(namaAsma);
        // abuDiv.appendChild(gambar);
        asmaDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabAsma);
        putihDiv.appendChild(artiAsma);
        putihDiv.appendChild(value);

        resultDiv.appendChild(asmaDiv);
    })
}

function displayDataAsma2(asma) {
    let resultDiv = document.querySelector('#bagian2');
    resultDiv.innerHTML = '';

    let asma2 = asma.data.slice(33, 66)

    asma2.forEach(function(asma) {
        let asmaDiv = document.createElement('div');
        asmaDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorAsma = document.createElement('button');
        nomorAsma.innerHTML = asma.number;
        nomorAsma.classList.add('nomor');

        let namaAsma = document.createElement('h3');
        namaAsma.innerHTML = asma.transliteration;
        namaAsma.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabAsma = document.createElement('h2');
        arabAsma.innerHTML = asma.name;
        arabAsma.classList.add('arab');

        let artiAsma = document.createElement('p');
        artiAsma.innerHTML = 'The meaning is ' + asma.en.meaning;
        artiAsma.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        asmaDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorAsma);
        abuDiv.appendChild(namaAsma);
        // abuDiv.appendChild(gambar);
        asmaDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabAsma);
        putihDiv.appendChild(artiAsma);
        putihDiv.appendChild(value);

        resultDiv.appendChild(asmaDiv);
    })
}

function displayDataAsma3(asma) {
    let resultDiv = document.querySelector('#bagian3');
    resultDiv.innerHTML = '';

    let asma2 = asma.data.slice(66, 99)

    asma2.forEach(function(asma) {
        let asmaDiv = document.createElement('div');
        asmaDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorAsma = document.createElement('button');
        nomorAsma.innerHTML = asma.number;
        nomorAsma.classList.add('nomor');

        let namaAsma = document.createElement('h3');
        namaAsma.innerHTML = asma.transliteration;
        namaAsma.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabAsma = document.createElement('h2');
        arabAsma.innerHTML = asma.name;
        arabAsma.classList.add('arab');

        let artiAsma = document.createElement('p');
        artiAsma.innerHTML = 'The meaning is ' + asma.en.meaning;
        artiAsma.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        asmaDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorAsma);
        abuDiv.appendChild(namaAsma);
        // abuDiv.appendChild(gambar);
        asmaDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabAsma);
        putihDiv.appendChild(artiAsma);
        putihDiv.appendChild(value);

        resultDiv.appendChild(asmaDiv);
    })
}

function tampilData(ev, bagianAsma, fade) {
    let i = 0;
    let bagian = document.getElementsByClassName('pembungkus');

    for (i = 0; i < bagian.length; i++) {
        bagian[i].style.display = 'none';
    }

    document.getElementById(bagianAsma).style.display = 'block';

    let btn = document.getElementsByClassName('btn');

    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace(' active', '')
    }

    ev.currentTarget.classList.add('active');

    let result = document.getElementsByClassName('result');

    for (i = 0; i < result.length; i++) {
        result[i].className = result[i].className.replace(' active', '');
    }

    document.getElementById(fade).classList.add('active');
}
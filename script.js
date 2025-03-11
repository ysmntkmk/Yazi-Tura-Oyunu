// Tura ve yazı sayıların oluştur ve başlangıçta sıfırla
let tura = 0;
let yazi = 0;

// Htmlden gelen coin, flip ve reset butonlarını seç
const coin = document.querySelector('.coin');
const flipBtn = document.querySelector('#flip-button');
const resetBtn = document.querySelector('#reset-button');

//Flip butonuna tıklandığında tura ve yazı sayılarını arttır
flipBtn.addEventListener('click', () => {
    // Math.random() 0,ile 1 arasında rastgele bir sayı üretir(0: tura, 1: yazı)
    const i = Math.floor(Math.random() * 2);
    // Coin animasyonunu gecici olarak kapat
    coin.style.animation = 'none';
    if(i) {
        // Eğer i 1 ise (yazı), 100 ms sonra coin"e flip-tura animasyonu dönecek
    setTimeout(() => {
        coin.style.animation = 'spin-tura 3s forwards';
    }, 100);
    tura++;
    }
    else {
        // Eğer i 0 ise (tura), 100 ms sonra coin"e flip-yazı animasyonu dönecek
    setTimeout(() => {
        coin.style.animation = 'spin-yazi 3s forwards';
    }, 100);
    yazi++;
    }
    // istatistikleri güncelle ve buttonları devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();
});
//istatistikleri güncelleme fonksiyonu
function updateStats() {
    document.querySelector('#tura-count').textContent = `Tura: ${tura}`;
    document.querySelector('#yazi-count').textContent = `Yazı: ${yazi}`;
    
}
//Buttonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}
//Reset butonunu tıklama olayı
resetBtn.addEventListener('click', () => {
    //Coin animasyonunu gecici olarak kapat, tura ve yazı sayılarını sıfırla ve istatistikleri güncelle
    coin.style.animation = 'none';
    tura = 0;
    yazi = 0;
    updateStats();
});

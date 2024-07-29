// Data for each number that will populate modals dynamically
const numbersData = [
    {
        number: 0,
        imgSrc: 'images/0.png',
        pronunciation: 'Zero (zee-roh)',
        english: 'Zero',
        otherLanguage: '零 (líng)'
    },
    {
        number: 1,
        imgSrc: 'images/1.png',
        pronunciation: 'One (wuhn)',
        english: 'One',
        otherLanguage: '一 (yī)'
    },
    {
        number: 2,
        imgSrc: 'images/2.png',
        pronunciation: 'Two (too)',
        english: 'Two',
        otherLanguage: '二 (èr)'
    },
    {
        number: 3,
        imgSrc: 'images/3.png',
        pronunciation: 'Three (three)',
        english: 'Three',
        otherLanguage: '三 (sān)'
    },
    {
        number: 4,
        imgSrc: 'images/4.png',
        pronunciation: 'Four (fohr)',
        english: 'Four',
        otherLanguage: '四 (sì)'
    },
    {
        number: 5,
        imgSrc: 'images/5.png',
        pronunciation: 'Five (fyve)',
        english: 'Five',
        otherLanguage: '五 (wǔ)'
    },
    {
        number: 6,
        imgSrc: 'images/6.png',
        pronunciation: 'Six (siks)',
        english: 'Six',
        otherLanguage: '六 (liù)'
    },
    {
        number: 7,
        imgSrc: 'images/7.png',
        pronunciation: 'Seven (seh-vuhn)',
        english: 'Seven',
        otherLanguage: '七 (qī)'
    },
    {
        number: 8,
        imgSrc: 'images/8.png',
        pronunciation: 'Eight (eyt)',
        english: 'Eight',
        otherLanguage: '八 (bā)'
    },
    {
        number: 9,
        imgSrc: 'images/9.png',
        pronunciation: 'Nine (nayn)',
        english: 'Nine',
        otherLanguage: '九 (jiǔ)'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalPronunciation = document.getElementById('modal-pronunciation');
    const modalEnglish = document.getElementById('modal-english');
    const modalOtherLanguage = document.getElementById('modal-other-language');
    const closemodal = document.querySelector('.closemodal');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const number = card.getAttribute('data-number');
            const numberData = numbersData.find(num => num.number == number);

            if (numberData) {
                modalImage.src = numberData.imgSrc;
                modalPronunciation.textContent = `Pronunciation: ${numberData.pronunciation}`;
                modalEnglish.textContent = `English: ${numberData.english}`;
                modalOtherLanguage.textContent = `Mandarin: ${numberData.otherLanguage}`;
                modal.style.display = 'block';
            }
        });
    });

    closemodal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Data for each animal
const animalsData = [
    {
        animal: 'cat',
        imgSrc: 'images/cat.png',
        pronunciation: 'Cat (kat)',
        english: 'Cat',
        otherLanguage: '猫 (māo)'
    },
    {
        animal: 'dog',
        imgSrc: 'images/dog.png',
        pronunciation: 'Dog (dawg)',
        english: 'Dog',
        otherLanguage: '狗 (gǒu)'
    },
    {
        animal: 'cow',
        imgSrc: 'images/cow.png',
        pronunciation: 'Cow (kow)',
        english: 'Cow',
        otherLanguage: '牛 (niú)'
    },
    {
        animal: 'lion',
        imgSrc: 'images/lion.png',
        pronunciation: 'Lion (lahy-uhn)',
        english: 'Lion',
        otherLanguage: '狮子 (shīzi)'
    },
    {
        animal: 'elephant',
        imgSrc: 'images/elephant.png',
        pronunciation: 'Elephant (el-uh-fuhnt)',
        english: 'Elephant',
        otherLanguage: '大象 (dà xiàng)'
    },
    {
        animal: 'tiger',
        imgSrc: 'images/tiger.png',
        pronunciation: 'Tiger (tahy-ger)',
        english: 'Tiger',
        otherLanguage: '老虎 (lǎohǔ)'
    },
    {
        animal: 'bear',
        imgSrc: 'images/bear.png',
        pronunciation: 'Bear (bair)',
        english: 'Bear',
        otherLanguage: '熊 (xióng)'
    },
    {
        animal: 'giraffe',
        imgSrc: 'images/giraffe.png',
        pronunciation: 'Giraffe (juh-raf)',
        english: 'Giraffe',
        otherLanguage: '长颈鹿 (chángjǐnglù)'
    },
    {
        animal: 'zebra',
        imgSrc: 'images/zebra.png',
        pronunciation: 'Zebra (zee-bruh)',
        english: 'Zebra',
        otherLanguage: '斑马 (bānmǎ)'
    },
    {
        animal: 'monkey',
        imgSrc: 'images/monkey.png',
        pronunciation: 'Monkey (muhng-kee)',
        english: 'Monkey',
        otherLanguage: '猴子 (hóuzi)'
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
            const animal = card.getAttribute('data-animal');
            const animalData = animalsData.find(a => a.animal == animal);

            if (animalData) {
                modalImage.src = animalData.imgSrc;
                modalPronunciation.textContent = `Pronunciation: ${animalData.pronunciation}`;
                modalEnglish.textContent = `English: ${animalData.english}`;
                modalOtherLanguage.textContent = `Mandarin: ${animalData.otherLanguage}`;
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

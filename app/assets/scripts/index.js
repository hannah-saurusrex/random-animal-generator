const dogResult = document.getElementById('dog-result');
const catResult = document.getElementById('cat-result');
const dogBtn = document.getElementById('dog-btn');
const catBtn = document.getElementById('cat-btn');

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if(data.url.includes('.mp4')) {
                getRandomDog();
            } else {
                dogResult.innerHTML = `<img src="${data.url}"/>`
            }
        });
}
getRandomDog();

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            catResult.innerHTML = `<img src="${data.file}"/>`
        });
}
getRandomCat();

dogBtn.addEventListener('click', getRandomDog);
catBtn.addEventListener('click', getRandomCat);
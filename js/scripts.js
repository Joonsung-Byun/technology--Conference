const rightNow = new Date()
console.log(rightNow.getFullYear())

document.querySelector('#year').textContent = rightNow.getFullYear();

const hb = document.querySelector('#hamburger')
const pn = document.querySelector('#primaryNav')

hb.addEventListener('click', () => {
    hb.classList.toggle('open')
    pn.classList.toggle('open')
})
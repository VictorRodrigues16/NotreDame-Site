const notreDame = document.querySelector('#notreDame')
const urlnotreDame = "https://www.gndi.com.br/"

function openNewTabNotreDame(urlnotreDame) {
    const siteN = window.open(urlnotreDame, '_blank')
    siteN.focus()
}

notreDame.addEventListener('click', () => {
    openNewTabNotreDame(urlnotreDame)
})

const dataBox = document.querySelectorAll('.data-content')

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBotton = window.innerHeight / 1.2;
    dataBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBotton) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
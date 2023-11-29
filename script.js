const submitButton = document.querySelector("form button.form-button")
const emailInput = document.querySelector("input#email")

const linkedinVr = "https://www.linkedin.com/in/victorrodrigues16/"
const githubVr = "https://github.com/VictorRodrigues16"
const linkedinV = document.querySelector('#linkedinVr')
const githubV = document.querySelector('#githubVr')

const linkedinLu = "https://www.linkedin.com/in/lucas-reis-diniz-13516421b/"
const githubLu = "https://github.com/CodedByLucke"
const linkedinL = document.querySelector('#linkedinLu')
const githubL = document.querySelector('#githubLu')

const notreDame = document.querySelector('#notreDame')
const urlnotreDame = "https://www.gndi.com.br/"

submitButton.addEventListener("click", submitForm)

const submit = []

function submitForm(event) {
    event.preventDefault()

    const name = document.querySelector("input#name").value
    const lastname = document.querySelector("input#name2").value
    const email = emailInput.value
    const message = document.querySelector("textarea#message").value

    if (validateEmail(email)) {
        const formData = {
            name,
            lastname,
            email,
            message,
        }

        submit.push(formData)

        displaySubmit()
        resetarForm()
    } else {
        showError("Por favor, insira um endereço de e-mail válido. Ele deve conter @ e um '.'")
    }
}

function validateEmail(email) {
    const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return teste.test(email)
}

function displaySubmit() {
    console.log(submit)
}

function resetarForm() {
    document.querySelector("input#name").value = ""
    document.querySelector("input#name2").value = ""
    emailInput.value = ""
    document.querySelector("textarea#message").value = ""
    alert('Mensagem enviada com sucesso!')
}

function showError(message) {
    const errorElement = document.createElement("p")
    errorElement.className = "error-message"
    errorElement.textContent = message

    emailInput.parentNode.insertBefore(errorElement, emailInput)

    setTimeout(() => {
        errorElement.remove()
    }, 3000)
}

function openNewTab(linkedinVr){
    const site = window.open(linkedinVr, '_blank')
    site.focus()
}

linkedinV.addEventListener('click', () => {
    openNewTab(linkedinVr)
})

githubV.addEventListener('click', () => {
    openNewTab(githubVr)
})

function openNewTab(linkedinLu){
    const site = window.open(linkedinLu, '_blank')
    site.focus()
}
linkedinL.addEventListener('click', () => {
    openNewTab(linkedinLu)
})

githubL.addEventListener('click', () => {
    openNewTab(githubLu)
})

function openNewTabNotreDame(urlnotreDame) {
    const siteN = window.open(urlnotreDame, '_blank')
    siteN.focus()
}

notreDame.addEventListener('click', () => {
    openNewTabNotreDame(urlnotreDame)
})


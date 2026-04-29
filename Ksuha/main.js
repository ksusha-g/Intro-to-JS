let check_number = document.getElementById('guess')
let number_input = document.getElementById('input')
let again = document.getElementById('again')
let consl = document.getElementById('consl')
let attempts = document.getElementById('attempt')
let a_number = 0
let number

function start(value) {
    number_input.disabled = false
    check_number.hidden = false
    number = Math.floor(Math.random() * 101)
    console.log(number)
    consl.innerHTML = ''
    a_number = 0
    attempts.innerHTML = (`Попыток: ${a_number}`)
    if (value != '') { guess(value) }

}

function guess(value) {
    a_number += 1
    attempts.innerHTML = (`Попыток: ${a_number}`)
    if (value < number) {
        consl.innerHTML = `Ваше число меньше загаданного`
    } else if (value > number) {
        consl.innerHTML = `Ваше число больше загаданного`
    } else if (value == number) {
        consl.innerHTML = `Вы угадали! Число: ${number}`
        check_number.hidden = true
        number_input.disabled = true
    }
}

check_number.addEventListener('click', () => {
    if (number_input.value !== '') {
        let value = number_input.value
        if (a_number != 0) {
            guess(parseInt(value))
            number_input.value = ''
        } else {
            start(value)
            number_input.value = ''
        }
    }
})

number_input.addEventListener('keydown', (event) => {
    if (number_input.value > 0 && event.key == 'Enter') {
        let value = number_input.value
        if (a_number != 0) {
            guess(parseInt(value))
            number_input.value = ''
        } else {
            start(value)
            number_input.value = ''
        }
    }
})

again.addEventListener('click', () => {
    let value = number_input.value
    start(value)
    number_input.value = ''
})

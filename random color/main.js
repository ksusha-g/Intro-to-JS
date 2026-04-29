let button = document.getElementById('btn')
let div = document.getElementById('your-color')

function change_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`

    if (r == 0 && g == 0 && b == 0) {
        div.style.color = `rgb(${256}, ${256}, ${256})`
    }

    div.innerHTML = `Ваш цвет: ${randomColor}`
    document.body.style.backgroundColor = randomColor
}

button.addEventListener('click', () => {
    change_color()
    console.log('works!')
})
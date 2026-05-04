let prev = document.getElementById('prev-question')
let next = document.getElementById('next-question')
let start = document.getElementById('start')
let answers = document.getElementById('answers')

prev.style.display = 'none'
next.style.display = 'none'
answers.style.display = 'none'

start.addEventListener('click', () => {
    prev.style.display = 'flex'
    next.style.display = 'flex'
    answers.style.display = 'flex'
    start.style.display = 'none'

})



let quiz = [
    {
        question: '1. Какой самый большой океан на Земле?',
        options: ['Атлантический', 'Индийский', 'Тихий'],
        correct: 'Тихий'
    },
    {
        question: '2. Какой фрукт имеет кожуру, которую обычно выбрасывают, а мякоть едят?',
        options: ['Банан', 'Яблоко', 'Груша'],
        correct: 'Банан'
    },
    {
        question: '3. Какое животное известно как “царь зверей”?',
        options: ['Слон', 'Лев', 'Тигр'],
        correct: 'Лев'
    },
    {
        question: '4. Как называется столица Франции?',
        options: ['Лондон', 'Берлин', 'Париж'],
        correct: 'Париж'
    },
    {
        question: '5. Сколько дней в неделе?',
        options: ['4', '7', '10'],
        correct: '7'
    },
    {
        question: '6. Какой известный художник нарисовал “Мону Лизу”?',
        options: ['Ван Гог', 'Леонардо да Винчи', 'Пикассо'],
        correct: 'Леонардо да Винчи'
    },
    {
        question: '7. Какая планета самая близкая к Солнцу?',
        options: ['Меркурий', 'Земля', 'Венера'],
        correct: 'Меркурий'
    },
    {
        question: '8. Из чего сделана большая часть бумаги?',
        options: ['Из пластика', 'Из дерева', 'Из металла'],
        correct: 'Из дерева'
    },
    {
        question: '9. Сколько у человека обычно пальцев на одной руке?',
        options: ['4', '3', '5'],
        correct: '5'
    },
    {
        question: '10. Какой цвет получается при смешивании синего и желтого?',
        options: ['Зеленый', 'Красный', 'Оранжевый'],
        correct: 'Зеленый'
    }
]
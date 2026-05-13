let next = document.getElementById('next-question')
let start = document.getElementById('start')
let again = document.getElementById('again')
let results = document.getElementById('results')
let alertMessage = document.getElementById('alert')
let resultMenu = document.getElementById("result")
let answers = document.getElementById('answers')
let currQuestion = document.getElementById('question')

let questionNumber = 0
let correctAnswers = 0

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

next.style.display = 'none'
answers.style.display = 'none'
again.style.display = 'none'
results.style.display = 'none'
alertMessage.style.display = 'none'

start.addEventListener('click', () => startGame())

function startGame(){
    questionNumber = 0
    currQuestion.style.display = 'flex'
    next.style.display = 'flex'
    answers.style.display = 'flex'
    start.style.display = 'none'
    again.style.display = 'none'
    resultMenu.style.display = 'none'
    generateQuestion(questionNumber)
}

function generateQuestion(num){
    answers.replaceChildren()
    currQuestion.innerHTML = quiz[num].question
    for (let i=0; i<3; i++){

        let newP = document.createElement('input')
        newP.type = 'radio'
        newP.id = `${num}${i}`
        newP.name = `q${num}`
        newP.value = quiz[num].options[i]

        let label = document.createElement('label')
        label.for = `${num}${i}`
        label.textContent = quiz[num].options[i]

        answers.appendChild(newP)
        answers.appendChild(label)
    }

    questionNumber += 1
}

next.addEventListener('click', () => {
    checkAnswer()

    if (questionNumber == 9){
        next.style.display = 'none'
        next.style.display = 'none'
        results.style.display = 'flex'
    }
    alertMessage.style.display = 'none'
    generateQuestion(questionNumber)
})

function checkAnswer(){
    namee = `q${questionNumber-1}`
    let selected = answers.querySelector(`input[name = "${namee}"]:checked`)
    if (selected.value && selected.value == quiz[questionNumber-1].correct) {correctAnswers += 1}
}

results.addEventListener('click', () => {
    results.style.display = 'none'
    again.style.display = 'flex'
    answers.style.display = 'none'
    currQuestion.style.display = 'none'
    showResults()
})

function showResults(){
    resultMenu.style.display = 'flex'
    resultMenu.innerHTML = `Correct answers: ${correctAnswers}`
}

again.addEventListener('click', () => startGame())




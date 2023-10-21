import readlineSync from 'readline-sync';
// Define questions and answers
const questions = [
    {
        question: 'When did Pakistan gets independence from united kingdom?',
        options: ['1945', '1947', '1950', '1962'],
        correctAnswer: '1947'
    },
    {
        question: 'Who was the founder of Pakistan?',
        options: ['Jawaharlal Nehru', 'Muhammad Ali Jinnah', 'Mahatma Gandhi', 'Allama Iqbal'],
        correctAnswer: 'Muhammad Ali Jinnah'
    },
    {
        question: 'Who was the first prime minister of Pakistan?',
        options: ['Liaquat Ali Khan', 'Muhammad Ali Jinnah', 'Maulana Shokat Ali', 'Allama Iqbal'],
        correctAnswer: 'Liaquat Ali Khan'
    },
    {
        question: 'who gave two nation theory?',
        options: ['Liaquat Ali Khan', 'Muhammad Ali Jinnah', 'Sir Syed Ahmed Khan', 'Allama Iqbal'],
        correctAnswer: 'Sir Syed Ahmed Khan'
    },
    {
        question: 'who is the current Prime Minister of Pakistan?',
        options: ['Imran khan', 'Nawaz Sharif', 'Anwar ul Haq Kakar', 'Shebaz Sharif'],
        correctAnswer: 'Anwar ul Haq Kakar'
    },
    {
        question: 'Which constitution is applied now a days?',
        options: ['1965', '1973', '1953', 'none of these'],
        correctAnswer: '1973'
    },
    {
        question: 'Which city was the first capital city of Pakistan?',
        options: ['Lahore', 'Karachi', 'Peshawar', 'Quetta'],
        correctAnswer: 'Karachi'
    },
    {
        question: 'When was the pakistan resolution passed?',
        options: ['1930', '1920', '1940', '1945'],
        correctAnswer: '1940'
    },
    {
        question: 'What is the proffesion of Quaid e Azam?',
        options: ['judge', 'Barrister', 'buisness men', 'Web developer'],
        correctAnswer: 'Barrister'
    },
    {
        question: 'What was the current capital of Pakistan?',
        options: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'],
        correctAnswer: 'Islamabad'
    }
];
function askQuestion(questionData) {
    console.log(questionData.question);
    for (let i = 0; i < questionData.options.length; i++) {
        console.log(`${i + 1}. ${questionData.options[i]}`);
    }
    const userAnswer = readlineSync.question('Your answer (enter option number): ');
    const correctIndex = questionData.options.indexOf(questionData.correctAnswer) + 1;
    if (userAnswer === correctIndex.toString()) {
        console.log('Correct!\n');
        return 1;
    }
    else {
        console.log(`Wrong! The correct answer is: ${correctIndex}. ${questionData.correctAnswer}\n`);
        return 0;
    }
}
function startQuiz() {
    let score = 0;
    for (const question of questions) {
        score += askQuestion(question);
    }
    console.log(`You scored ${score} out of ${questions.length}`);
}
// Start the quiz
startQuiz();

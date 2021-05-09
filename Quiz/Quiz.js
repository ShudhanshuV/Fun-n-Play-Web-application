var questions = [
    {
        question: "1. What is the world's most common religion?",

        answers: {
            a: 'Christianity',
            b: 'Buddhism',
            c: 'Hinduism',
            d: 'Muslim'
        },

        correctAnswer: 'a'
    },

    {
        question: "2. The longest river in the world is:",

        answers: {
            a: 'Amazon (Brazil)',
            b: 'Nile (Egypt)',
            c: 'Yangtze (China)',
            d: 'Congo (Zaire)'
        },

        correctAnswer: 'b'
    },

    {
        question: "3. Which software firm is the second largest in the world, after Microsoft?",

        answers: {
            a: 'Netscape',
            b: 'Oracle',
            c: 'Lotus',
            d: 'Norton'
        },

        correctAnswer: 'b'
    },

    {
        question: "4. What's the world's most widely spoken language?",

        answers: {
            a: 'English',
            b: 'Spanish',
            c: 'Mandarin',
            d: 'French'
        },

        correctAnswer: 'c'
    },

    {
        question: "5. Which continent is host to the most countries in the world?",

        answers: {
            a: 'Asia',
            b: 'Africa',
            c: 'Europe',
            d: 'America'
        },

        correctAnswer: 'b'
    }
]

var quizContainer = document.getElementById('quiz-wrapper')
var resultContainer = document.getElementById('results')
var submitButton = document.getElementById('btn-submit')


function generateQuiz(questions, quizContainer, resultContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = []

            for(letter in questions[i].answers){

                answers.push(
                    '<label class="option">'
					    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
					    + letter + ') '
					    + questions[i].answers[letter]
				    + '</label>'
                );
            }

            output.push(
                '<div class="quiz-item">' + questions[i].question + '</div>'
			    + '<div class="option-item">' + answers.join('') + '</div>'
            )
        }

        quizContainer.innerHTML = output.join('')
    }


    function showResults(questions, quizContainer, resultContainer){
        
        var answerContainers = quizContainer.querySelectorAll(".option-item")

        var userAnswer = ''
        var numCorrect = 0

        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){

                numCorrect++

                answerContainers[i].style.color = 'green'
            }else{

                answerContainers[i].style.color ='red'
            }
        }

        resultContainer.innerHTML = numCorrect + "/" + questions.length
    }

    showQuestions(questions, quizContainer)

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultContainer)
    }
}

generateQuiz(questions, quizContainer, resultContainer, submitButton)

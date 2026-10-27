let quizData = [

   {
      question: "What does vaping do to the heart over time?",
      options: [
         "Increases risk of heart disease", 
         "Increases risk of leg disease",
         "Increases risk of arm disease",
         "I don't know" 
      ],
       correct: "Increases risk of heart disease", 
   },

   {
      question: "What is vaping?",
      options: [
         "The act of farting rainbows", 
         "The act of inhaling and exhaling aerosol from an electronic cigarette device",
         "The act of inhaling and exhaling smoke from a cigarette",
         "I don't know" 
      ],
      correct: "The act of inhaling and exhaling aerosol from an electronic cigarette device", 
   },

    {
      question: "What is aerosol?",
      options: [
         "The smoke from a vape", 
         "The suspended state of liquid droplets and other particles released through a vape device",
         "An arm disease",
         "I don't know" 
      ],
      correct: "The suspended state of liquid droplets and other particles in the air released through a vape device", 
   },

    {
      question: "What are the one of the valid uses for vaping?",
      options: [
         "To help quit smoking", 
         "For children to play with ",
         "When you're bored",
         "I don't know" 
      ],
      correct: "To help quit smoking", 
   },

    {
      question: "What is nicotine?",
      options: [
         "That..that thingy...", 
         "An expensive salt brand",
         "An addictive substance that can make you addicted to vaping",
         "I don't know" 
      ],
      correct: "Increases risk of heart disease", 
   },

    {
      question: "What should you do if you struggle with trying to quit vaping?",
      options: [
         "Seek professional help where you can", 
         "Talk with people you really trust to help you",
         "Surround yourself with healthy distractions ",
         "Surround yourself with a positive, smoke-free environment", 
      ],
      correct: [
         "Seek professional help where you can", 
         "Talk with people you really trust to help you",
         "Surround yourself with healthy distractions",
         "Surround yourself with a positive, smoke-free environment", 
      ],
   },

];

const quizContainer = document.querySelector(".quiz_container");
const question = document.querySelector(".quiz_container .question");
const options = document.querySelector(".quiz_container .options");
const nextBtn = document.querySelector(".quiz_container .next-btn");
const quizResult = document.querySelector(".quiz_result")

let questionNumber = 0;
const MAX_QUESTIONS = 5;

const shuffleArray = array => {

   return array.slice().sort(() => Math.random() - 0.5);

};

quizData = shuffleArray(quizData);

const createQuestion = () =>  {
   options.innerHTML = "";
   question.innerHTML = `<span class='question_number'>${
      questionNumber + 1
   /$}|</span>${quizData[questionNumber].question}`;

   const shuffledOptions = shuffleArray(quizData[questionNumber].options);

   quizData[questionNumber].options.forEach( (o) => {
      const option = document.createElement("button");
      option.classList.add("option");
      option.innerHTML = o;  
      options.appendChild(option);
   });
};

const displayQuizResult = () => {
   quizResult.style.display = "flex";
   quizContainer.style.display = "none";
}


createQuestion();

const displayNextQuestion = () => {
   if (questionNumber >= MAX_QUESTIONS - 1) {
      displayQuizResult();
   }

   questionNumber++;
   createQuestion();
};

nextBtn.addEventListener("click", displayNextQuestion);
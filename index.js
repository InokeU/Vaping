console.log ("Javascript is working!");
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
      correct: "The suspended state of liquid droplets and other particles released through a vape device", 
   },

    {
      question: "What are the one of the valid uses for vaping?",
      options: [
         "As an aid to quit smoking", 
         "For children to play with ",
         "When you're bored",
         "I don't know" 
      ],
      correct: "As an aid to quit smoking", 
   },

    {
      question: "What is nicotine?",
      options: [
         "That..that thingy...", 
         "An expensive salt brand",
         "An addictive substance that can make you addicted to vaping",
         "I don't know" 
      ],
      correct: "An addictive substance that can make you addicted to vaping", 
   },

    {
      question: "What should you do if you struggle with trying to quit vaping? (Select all that apply)",
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

let currentQuestion = 0;
let question = document.querySelector(".question");
let options = document.querySelector(".options");

function showQuestion () {
   let q = quizData[currentQuestion];
   question.textContent = q.question;

   options.innerHTML = "";

   console.log("Current question:", q);
   console.log("Answer options:", q.options);

   q.options.forEach(function(option) {
      let button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");

      options.appendChild(button);

   });
}

function nextQuestion () {
   currentQuestion++;

   if (currentQuestion < quizData.length) {
      showQuestion();
   }
}

showQuestion();
let container=document.getElementById('container')
let header=document.getElementById('header')
let display_question=document.getElementById('question')
let quest_nr=document.getElementById('quest_nr')
let finalscore=document.getElementById('finalscore')
let buttons=document.getElementById('buttons').querySelectorAll('button');
class Question{
  constructor(question, correct_answer , answers) {
    this.question = question;
    this.correct_answer = correct_answer;    
    this.answers=answers; 
    this.points=0;
    }
  
 
  showQuestion() {
    display_question.innerText = this.question;
    
    buttons.forEach((button, index) => {
      button.innerText = this.answers[index];
      index++;
    });
  }
  
  check_answer(correct_answer) {
    buttons.forEach((button) => { // Używamy strzałkowej funkcji
      button.addEventListener("click", () => { // Używamy strzałkowej funkcji
        const buttonText = button.id; 
        if (buttonText == correct_answer) {
          this.points++;
          console.log("Correct:", buttonText);
          button.style.backgroundColor = "green";          
          console.log("poinsts: "+this.points); 
        } else {
          console.log("Incorrect:", buttonText);
          button.style.backgroundColor = "red";
          
        }
      })
    })
  }

  showscore(){
    if(this.points<=1){
    finalscore.innerHTML=("<br>"+"You got: "+(this.points)+" point");
    }else{
      finalscore.innerHTML=("<br>"+"You got: "+(this.points)+" points");
    }
    container.innerHTML=header.innerHTML+finalscore.innerHTML;
    
  }
};


const question1 = new Question ("How many championships does Lewis Hamilton have?", "a", ["7", "6", "8", "4"]);
const question2 = new Question ("How many championships does Max Verstappen have?", "b", ["4", "2", "0", "3"]);
const question3 = new Question("What's name of Max Verstappen Father?", "a", ["Jos","John", "Janne", "Kekke"]);
let i=0;
let j=1;
const questions=[question1, question2, question3];


function disableButtons() {
  buttons.forEach(function(button) {
    button.disabled = true;
  });
}
function enableButtons() {
  buttons.forEach(function(button) {
    button.disabled = false;
  });
} 



  questions[0].showQuestion();
  questions[0].check_answer(questions[i].correct_answer);
  questions[0].points=0;
    buttons.forEach(function(button){      
      button.addEventListener("click", function(){  
        disableButtons()        
        setTimeout(function(){           
          i++; 
          console.log("questions.length: "+questions.length)  
          quest_nr.innerHTML="Question nr: "+(i+1);     
          button.style.backgroundColor="aquamarine";
          if(i<questions.length){
          questions[i].showQuestion();
          questions[i].check_answer(questions[i].correct_answer);
          
          enableButtons()
        }else{
          questions[questions.length-1].showscore();
        } 
      }, 2000); 
      })          
    })
  
  
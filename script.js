//Task 1
function turnRed(){
    var par = document.querySelectorAll('p');
    for(var i = 0; i <par.length; i++){
      par[i].style.color = 'red';
  }
    return par;}
  
  turnRed();
  
  //Task 2
  function shadePics(){
    var pic = document.querySelectorAll('img');
    for(var i=0; i < pic.length; i++){
      pic[i].setAttribute('style',  'box-shadow: 1px 5px 5px 3px lightblue');
    }
  }
  
  shadePics();   
//Task 3
  function countPar(){
    var par = document.querySelectorAll('p');
    for(var i = 0, count = 1; i < par.length; i++, count++){
      par[i].innerHTML = count + '. ' + par[i].textContent;
    }
    return par;
  }
  
  countPar();

//Task 4   
var countUp = document.querySelector('.click_pls');
var countDown = document.querySelector('.click_mns');
var clicksNum = document.querySelector('.clicks');
var countClicks = 0;

countUp.addEventListener('click', function(){
   count+=1; 
   clicksNum.innerHTML = countClicks;
});
countDown.addEventListener('click', function(){
  count-=1;
  clicksNum.innerHTML = countClicks;
});


//Task 5
function pow(a, b){
  var result = Math.pow(a,b);
  alert(a + ' ** ' + b + ' = ' + result);
}

pow(5,5);
pow(3, 9);

//TASK 6 
function underlineTag(e){
  var tag = document.getElementsByTagName(e);
  for (var i = 0; i < tag.length; i++){
  tag[i].style.textDecoration = 'underline';
  }
}
underlineTag('p');

//TASK 7 & 8
// accessValidation();
// accessValidation(5);
// accessValidation(18);

var ageBtn = document.querySelector('#age_btn');
// function accessValidation(age){
  // }
  
  ageBtn.addEventListener('click', function accessValidation(){
  var age = +document.querySelector('#age').value;
  if(age){
   if(age > 16){
      alert('Welcome \n' + '(age: ' + age + ')');
    } 
    else{
     alert('You are too young \n' + '(age: ' + age + ')');  
    }
  }
  else {
   alert("Give me your age \n");
  }
  console.log('age---' + typeof age);
});

//TASK 9
function countEl(arr){
  if(arr === undefined || arr === null){
    console.log('Task 9: ERROR');
  } else {
    console.log('Task 9: ' + arr.length);
  }
}

var arr1 = ['Hello World', 13, {age: 32}];
var arr2 = ['Somewhere', 'over', 'the', 'rainbow'];
var arr3 = [];
countEl(arr1);
countEl(arr2);
countEl(arr3);
countEl();

//TASK 10

var button = document.querySelector('.task10_number');
button.addEventListener('click', function compareNum(){
  var task10Result = document.querySelector('.task10_result');
  task10Result.innerHTML = numbToComp();
});

function numbToComp(){
  var a = document.getElementById('task10_number').value;
  if(a > 10){
    return a*=a;
  }
  else if(a < 7) {
    return ('Your number is less than 7'); 
  }
  else {
    return a-=1;
  }
  return a;
}

//TASK 11
var randomNum = Math.floor(Math.random() * 10);
console.log('Random number: ' + randomNum);
var guessBtn = document.querySelector('.guess_btn');
var countTrials = 3;
var countMatch = 0;
function guessNum() {
  var userNum = document.querySelector('.guess_num').value;
  var trialsLeft = document.querySelector('.guess_trials');
  countMatch += 1;
     if (userNum == randomNum) {
      alert("Congratulations, it's a match! You have guessed from the " + (countMatch) + " trial!");
    } else {
      countTrials-=1;
      alert('Please try again.\n' + 'You have ' + countTrials + ' trial(s) left');
    }
  }

guessBtn.addEventListener('click', guessNum);

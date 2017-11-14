//Task 1
var textBtn = document.querySelector(".text_color");

textBtn.onclick = function turnRed() {
  var par = document.querySelectorAll("p");
  for (var i = 0; i < par.length; i++) {
    par[i].classList.toggle("red");
  }
};

//Task 2
function shadePics() {
  var pic = document.querySelectorAll('img');
  for (var i = 0; i < pic.length; i++) {
    pic[i].setAttribute('style', 'box-shadow: 1px 5px 5px 3px lightblue');
  }
}

shadePics();
//Task 3
function countPar() {
  var par = document.querySelectorAll('p');
  for (var i = 0, count = 1; i < par.length; i++, count++) {
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

countUp.addEventListener('click', function () {
  countClicks += 1;
  clicksNum.innerHTML = countClicks;
});
countDown.addEventListener('click', function () {
  countClicks -= 1;
  clicksNum.innerHTML = countClicks;
});


//Task 5
var powBtn = document.querySelector('.calculate');
powBtn.onclick = function pow() {
  var int = document.querySelector('.intenger').value;
  var power = document.querySelector('.power').value;
  var result = Math.pow(int, power);
  var showResult = document.querySelector('.power_result');
  showResult.innerHTML += '' + int + ' in the power of ' + power + ' = ' + result;
};

//TASK 6 
var underlineBtn = document.querySelector('.underline');
underlineBtn.onclick = function underlineTag() {
  var el = document.querySelector('.tag_to_underline').value;
  var tag = document.getElementsByTagName(el);
  if (tag) {
    for (var i = 0; i < tag.length; i++) {
      if (el == 'img') {
        tag[i].classList.toggle('border_underline');
      } else {
        tag[i].classList.toggle('underline');
      }
    }
  } else {
    alert('No such tag. Please choose between p (for paragraphs, h3 for headers, and img for images.');
  }
};

//TASK 7 (age validation) & 8

var ageBtn = document.querySelector('#age_btn');
ageBtn.addEventListener('click', function accessValidation() {
  var age = +document.querySelector('#age').value;
  if (age) {
    if (age > 16) {
      alert('Welcome \n' + '(age: ' + age + ')');
    } else {
      alert('You are too young \n' + '(age: ' + age + ')');
    }
  } else {
    alert("Give me your age \n");
  }
  console.log('age---' + typeof age);
});

//TASK 9
var arr = [];
var submitButton = document.querySelector(".submit");
var text = document.querySelector("#new");
submitButton.addEventListener("click", createArray);

var arrLength = function () {
  if (arr === undefined || arr === null) {
    return (' Array length: ERROR');
  } else {
    return (' Array length: ' + arr.length);
  }
};

function createArray() {
  var index = document.querySelector(".index");
  var value = document.querySelector(".value");
  var readyIndex = parseInt(index.value);
  arr[readyIndex] = value.value;
  text.innerHTML = arr + ': ' + arrLength();
}

//Delete last element
var popButton = document.querySelector(".pop");
popButton.addEventListener("click", function () {
  arr.pop();
  text.innerHTML = arr + ': ' + arrLength();
});

//Delete first element
var shiftButton = document.querySelector(".shift");
shiftButton.addEventListener("click", function () {
  arr.shift();
  text.innerHTML = arr + ': ' + arrLength();
});

//Add an element to the tail
var pushButton = document.querySelector(".push");
pushButton.addEventListener("click", function () {
  var value = document.querySelector(".value");
  arr.push(value.value);
  text.innerHTML = arr + ': ' + arrLength();
});

//Add first element
var unshiftButton = document.querySelector(".unshift");
unshiftButton.addEventListener("click", function () {
  var value = document.querySelector(".value");
  arr.unshift(value.value);
  text.innerHTML = arr + ': ' + arrLength();
});


//TASK 10

var button = document.querySelector('.task10_number');
button.addEventListener('click', function compareNum() {
  var task10Result = document.querySelector('.task10_result');
  task10Result.innerHTML = numbToComp();
});

function numbToComp() {
  var a = document.getElementById('task10_number').value;
  if (a > 10) {
    return a *= a;
  } else if (a < 7) {
    return ('Your number is less than 7');
  } else {
    return a -= 1;
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
  if (countTrials > 0){
  countMatch += 1;
  countTrials -= 1;
  if (userNum == randomNum) {
    alert("Congratulations, it's a match! You have guessed from the " + (countMatch) + " trial!");
    guessBtn.disabled = true;
  } else if (userNum > randomNum) {
      alert('Try a smaller number.\n' + 'You have ' + countTrials + ' trial(s) left');
  } else if (userNum < randomNum){
      alert('Try a larger number.\n' + 'You have ' + countTrials + ' trial(s) left');
    }
  }
  else{
    guessBtn.disabled = true;
  }
}

guessBtn.addEventListener('click', guessNum);
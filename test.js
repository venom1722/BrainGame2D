let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let total = 0;

var sec=localStorage.getItem("sec");
var min=localStorage.getItem("min");
window.onload = function() {
  var time = document.getElementsByTagName('time')[0];
  var t;

  function tick(){
      sec++;
      if (sec >= 60) {
          sec = 0;
          min++;
      }
  }

  function add() {
      tick();
      time.textContent = (min > 9 ? min : "0" + min)
             + ":" + (sec > 9 ? sec : "0" + sec);
      timer();
  }
  function timer() {
      t = setTimeout(add, 1000);
  }

  timer();
};

document.querySelector('.b-1').addEventListener('click', () => {
    let first = document.querySelectorAll('.i-1');
    for (let i = 0; i < first.length; i++) {
        if (first[i].checked) {
            a = first[i].value;
            break;
        }
    }

    let second = document.querySelectorAll('.i-2');
    for (let i = 0; i < second.length; i++) {
        if (second[i].checked) {
            b = second[i].value;
            break;
        }
    }

    let third = document.querySelectorAll('.i-3');
    for (let i = 0; i < third.length; i++) {
        if (third[i].checked) {
            c = third[i].value;
            break;
        }
    }

    let fourth = document.querySelectorAll('.i-4');
    for (let i = 0; i < fourth.length; i++) {
        if (fourth[i].checked) {
            d = fourth[i].value;
            break;
        }
    }

    let fifth = document.querySelectorAll('.i-5');
    for (let i = 0; i < fifth.length; i++) {
        if (fifth[i].checked) {
            e = fifth[i].value;
            break;
        }
    }

    if (a == 1.2) {
        total += 1;
    }

    if (b == 2.1) {
        total += 1;
    }

    if (c == 3.1) {
        total += 1;
    }

    if (d == 4.3) {
        total += 1;
    }

    if (e == 5.4) {
        total += 1;
    }

    console.log(total)

    if (total == 5) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы ответили на 5 из 5 вопросов</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">ОТЛИЧНЫЙ РЕЗУЛЬТАТ!</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://pngimg.com/uploads/number5/number5_PNG15042.png" width="700px"</p>');
    }

    if (total == 4) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы ответили на 4 из 5 вопросов</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Хороший результат!</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://pngimg.com/uploads/number4/number4_PNG15006.png" width="700px"</p>');
    }


    if (total == 3) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы ответили на 3 из 5 вопросов</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Неплохой результат!</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://pngimg.com/uploads/number3/number3_PNG14959.png" width="700px"</p>');
    }

    if (total == 2) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы ответили на 2 из 5 вопросов</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Возможно, вам следует пройти игру ещё раз</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://www.pngmart.com/files/21/2nd-PNG-Isolated-File.png" width="700px"</p>');
    }

    if (total == 1) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы ответили на 1 из 5 вопросов</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Возможно, вам следует пройти игру ещё раз</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://www.pngmart.com/files/17/Gold-Number-1-PNG-Photos.png" width="700px"</p>');
    }

    if (total == 0) {
        document.write('<body style="background-color: #3b1172;"></body>');
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Вы не ответили правильно ни на один вопрос</h1>');
        document.write('<h2 style="text-align:center; color:rgb(240, 240, 209);"></h2>');
        var h2=document.getElementsByTagName('h2')[0];
        h2.innerHTML = "Время прохождения составляет "+min+" мин "+sec+" сек";
        document.write('<h1 style="text-align:center; color:rgb(240, 240, 209);">Возможно, вам следует пройти игру ещё раз</h1>');
        document.write('<p style="text-align:center;"><img style="border-radius:37px;" src="https://pngimg.com/uploads/number0/number0_PNG19185.png" width="700px"</p>');
    }


})

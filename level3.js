var canvas;
var context;

function firstInfo() {
  document.querySelector(".firstBanner").style.opacity = "1";
  document.querySelector(".firstBanner").style.zIndex = "7";
}

function secondInfo() {
  document.querySelector(".secondBanner").style.opacity = "1";
  document.querySelector(".secondBanner").style.zIndex = "7";
}

function thirdInfo() {
  document.querySelector(".thirdBanner").style.opacity = "1";
  document.querySelector(".thirdBanner").style.zIndex = "7";
}

function fourthInfo() {
  if(sc<3){
      var res=document.getElementById('res');
      res.textContent = "Вы собрали "+sc+" из 3 бонусов. Уверены, что хотите перейти дальше?";
  }
  document.querySelector(".fourthBanner").style.opacity = "1";
  document.querySelector(".fourthBanner").style.zIndex = "7";
}

var sec=localStorage.getItem("sec");
var min=localStorage.getItem("min");

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  drawMaze("thirdMaze.png", 5, 5);

  window.onkeydown = processKey;

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

var x = 0;
var y = 0;

var timer;

function drawMaze(mazeFile, startingX, startingY) {
  clearTimeout(timer);

  dx = 0;
  dy = 0;

  var imgMaze = new Image();
  imgMaze.onload = function() {
    canvas.width = imgMaze.width;
    canvas.height = imgMaze.height;

    context.drawImage(imgMaze, 0,0);

    x = startingX;
    y = startingY;

    var imgFace = document.getElementById("face");
    context.drawImage(imgFace, x, y);
    context.stroke();

    timer = setTimeout("drawFrame()", 10);
  };
  imgMaze.src = mazeFile;
}

var dx = 0;
var dy = 0;

function processKey(e) {
  dx = 0;
  dy = 0;

  if (e.keyCode == 38) {
    dy = -1;
  }

  if (e.keyCode == 40) {
    dy = 1;
  }

  if (e.keyCode == 37) {
    dx = -1;
  }

  if (e.keyCode == 39) {
    dx = 1;
  }
}

function drawFrame() {
    if (dx != 0 || dy != 0) {
      context.beginPath();
      context.fillStyle = "rgb(254,244,207)";
      context.rect(x, y, 15, 15);
      context.fill()

      x += dx;
      y += dy;

      if (checkForCollision()) {
        x -= dx;
        y -= dy;
        dx = 0;
        dy = 0;
      }

      var imgFace = document.getElementById("face");
      context.drawImage(imgFace, x, y);

    }

    timer = setTimeout("drawFrame()", 10);
  }

  var sc=0;
  var first=0;
  var second=0;
  var third=0;
  var score = document.getElementById('score');

  function checkForCollision() {
    var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
    var pixels = imgData.data;

    for (var i = 0; n = pixels.length, i < n; i += 4) {
      var red = pixels[i];
      var green = pixels[i+1];
      var blue = pixels[i+2];

      if (red == 0 && green == 0 && blue == 0) {
        return true;
      }
      if (red == 0 && green == 0 && blue == 255) {
        firstInfo();
        document.querySelector('.container').addEventListener('click', () => {
          document.querySelector(".firstBanner").style.opacity = "0";
          if(first==0){
            sc++;
            score.textContent = sc + "/3";
          }
          first=1;
        })
        return true;
      }

      if (red == 0 && green == 255 && blue == 0) {
        secondInfo();
        document.querySelector('.container').addEventListener('click', () => {
          document.querySelector(".secondBanner").style.opacity = "0";
          if(second==0){
            sc++;
            score.textContent = sc + "/3";
          }
          second=1;
        })
        return true;
      }

      if (red == 255 && green == 0 && blue == 0) {
        thirdInfo();
        document.querySelector('.container').addEventListener('click', () => {
          document.querySelector(".thirdBanner").style.opacity = "0";
          if(third==0){
            sc++;
            score.textContent = sc + "/3";
          }
          third=1;
        })
        return true;
      }

      if (red == 252 && green == 255 && blue == 0) {
        fourthInfo();
        document.querySelector('.container').addEventListener('click', () => {
          document.querySelector(".fourthBanner").style.opacity = "0";
        })
        var ex_sec=sec;
        var ex_min=min;
        localStorage.setItem("sec",ex_sec);
        localStorage.setItem("min",ex_min);
        return true;
      }
    }
    return false;
  }

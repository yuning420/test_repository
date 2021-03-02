function doFirst(){
  // barSize = 610;
  //先跟畫面產生關聯
  myMovie = document.getElementById('myMovie');
  playButton = document.getElementById('playButton');
  defaultBar = document.getElementById('defaultBar');
  progress = document.getElementById('progress');
  stopButton = document.getElementById('stopButton');
  upButton = document.getElementById('upButton');
  downButton = document.getElementById('downButton');
  mutedButton = document.getElementById('mutedButton');

  barSize = parseInt(window.getComputedStyle(defaultBar).width);
  //window.getComputedStyle(物件).css屬性 ->從js找css裡的屬性
  // alert(barSize);
  //再建事件聆聽功能
  playButton.addEventListener('click', playOrPause);
  myMovie.addEventListener('click', playOrPause);
  defaultBar.addEventListener('click', clickedBar);
  stopButton.addEventListener('click', stop);
  mutedButton.addEventListener('click', muted);
  upButton.addEventListener('click', volumeUp);
  downButton.addEventListener('click', volumeDown);
}
function playOrPause(){
  if( !myMovie.paused && !myMovie.ended){ //影片非暫停也非結束==影片正在跑
    myMovie.pause();
    playButton.innerText = 'play';
  }else{
    myMovie.play();
    playButton.innerText = 'pause';
    setInterval(update, 300);
  }
};

function update(){
  if(!myMovie.ended){
    // let size = 610 / 92  //92是影片的總秒數
    let size = barSize / myMovie.duration * myMovie.currentTime; //92是影片的總秒數
    progress.style.width = `${size}px`;
  }else{
    progress.style.width = '0px';
    playButton.innerText = 'play';
    myMovie.currentTime = 0;
  }
};


function clickedBar(e){
  let mouseX = e.clientX - defaultBar.offsetLeft;
  progress.style.width = `${mouseX}px`;
  
  let newTime = mouseX / (barSize / myMovie.duration);
  myMovie.currentTime = newTime;
};

// myMovie.webkitEnterFullScreen(); //全螢幕

function stop(){
  myMovie.currentTime = 0;
  myMovie.pause();
  playButton.innerText = 'play';
}; 

function muted(){
  if(!myMovie.muted){
    myMovie.volume = 0;
    mutedButton.innerText = 'muted';
  }
};

function volumeUp(){
  let original = myMovie.volume;
  if (original !== 1){
    myMovie.volume = original + 0.1;
  }else{
    alert('已經是最大聲了哦');
  }
};

function volumeDown(){
  let sound = myMovie.volume;
  if (sound > 0){
    myMovie.volume = sound - 0.1;
  }else{
    alert('已經是最小聲了哦');
  }

  //為什麼alert出不來~~~
};


window.addEventListener('load', doFirst);
function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  document.getElementById('dropZone').ondragover = dragOver;
  document.getElementById('dropZone').ondrop = dropped;
}

//事件物件 e !!
function dragOver(e){ 
  e.preventDefault();

};

function dropped(e){
  e.preventDefault();

  let file = e.dataTransfer.files[0];
  document.getElementById('fileName').innerText = file.name;

  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function(){
    let myMovie = document.getElementById('myMovie');
    myMovie.src = readFile.result; 
    //video可以直接用html5的屬性
    // myMovie.width = 600;
    myMovie.controls = true; //加入controls才可以播放
  });

};


window.addEventListener('load', doFirst);
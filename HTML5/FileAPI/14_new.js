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
    let image = document.getElementById('image');
    image.src = readFile.result; 
    //img的路徑要放在src
    image.style.maxWidth = '500px';
    image.style.maxHeight = '500px';
  });

};


window.addEventListener('load', doFirst);
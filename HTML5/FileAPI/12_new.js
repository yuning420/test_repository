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
  readFile.readAsText(file);
  readFile.addEventListener('load', function(){
    document.getElementById('fileContent').value = readFile.result;
  });

};


window.addEventListener('load', doFirst);
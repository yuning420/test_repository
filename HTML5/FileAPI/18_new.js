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

  let files = e.dataTransfer.files;
  let readFile = new FileReader();
  //多個檔案是陣列,故用迴圈!

  for(let i=0; i<files.length ; i++){
    readFile.readAsDataURL(files[i]); //跑迴圈
    readFile.addEventListener('load', function(){
      //動態新增<img>
      let image = document.createElement('img');
      image.src = readFile.result; 
      //找到parent
      let dropZone = document.getElementById('dropZone');
      // dropZone.appendChild(image);
      // dropZone.insertBefore(image, dropZone.firstChild);
      dropZone.replaceChild(image, dropZone.firstChild);


    });  
  }


};


window.addEventListener('load', doFirst);
function doFirst(){
  //先跟畫面產生關聯,再建事件聆聽功能

  img = document.getElementById('image');
  image.addEventListener('dragstart', startDrag);
  image.addEventListener('dragend', endDrag);


  rightBox = document.getElementById('rightBox');
  rightBox.addEventListener('dragenter', function(e){
    e.preventDefault();
  });
  rightBox.addEventListener('dragover', function(e){
    e.preventDefault();
  });
  rightBox.addEventListener('drop', dropped);

  
  

}


function startDrag(e){
  let data = `<img src="../Shinnosuke6.png">`;
  //看起來是拖曳，其實是在指定的位置上放另一張一樣的圖
  e.dataTransfer.setData('image/png', data);
  //setData()是dataTransfer裡的物件,故要用setData()就要加dataTransfer 
  //如果有多張圖要拖在同一個範圍的話，setData(type, data);的type就用不同的type表示，才不會讓圖都疊在一起

};
function endDrag(){
  image.style.visibility = 'hidden'; //讓原圖消失,可以更像
};
function dropped(e){
  e.preventDefault()
  rightBox.innerHTML =e.dataTransfer.getData('image/png');

};

window.addEventListener('load', doFirst);
function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  context.fillStyle= 'orange';
  context.strokeStyle='black';
  
  

  // context.rect(100,100,250,200);
  // context.fill(); // 全部填滿
  // context.stroke();  // 外框 線
  
  context.fillRect(100,100,250,200); // x,y,width,height
  context.strokeRect(100, 100, 250, 200);

  // eraser 橡皮擦
  // context.clearRect(150, 150, 50, 50); 
  // context.clearRect(0, 0, canvas.width, canvas.height); //全擦

  
}


window.addEventListener('load', doFirst);
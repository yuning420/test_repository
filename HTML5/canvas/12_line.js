function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  //格線
  context.beginPath(); //從另一點開始
  for( i=0; i <= 100; i++){
    let position = i * 50;

    //horizontal
    context.moveTo(0, position);
    context.lineTo(canvas.width, position);
    context.fillText(position, 0, position);
    

    //vertical
    context.moveTo(position, 0);
    context.lineTo(position, canvas.height);
    context.fillText(position, position, 10);

  }

  context.strokeStyle='rgba(0,0,0,.3)';
  context.stroke();
  //格線結束
    
  context.lineWidth= 20;
  context.strokeStyle='red';

  // linecap
  context.beginPath();
  context.lineCap='butt';
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.stroke();
  
  context.beginPath();
  context.lineCap='round';
  context.moveTo(100, 150);
  context.lineTo(300, 150);
  context.stroke();
  
  context.beginPath();
  context.lineCap='square';
  context.moveTo(100, 200);
  context.lineTo(300, 200);
  context.stroke();
  
  //lineJoin
  context.lineJoin='miter';
  context.strokeRect(100, 300, 100, 200);
  context.lineJoin='bevel';
  context.strokeRect(300, 300, 100, 200);
  context.lineJoin='round';
  
  context.strokeRect(500, 300, 100, 200);
  
  



}

window.addEventListener('load', doFirst);
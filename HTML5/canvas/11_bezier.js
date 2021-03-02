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

  context.strokeStyle='rgba(0,0,0,.1)';
  context.stroke();
  //格線結束

  //四分之一線開始
  context.beginPath(); //從另一點開始
  context.strokeStyle='rgba(0,0,0,.3)';
  context.moveTo(0, canvas.height /2);
  context.lineTo(canvas.width, canvas.height /2);
  context.stroke();

  context.moveTo(canvas.width /2, 0);
  context.lineTo(canvas.width /2, canvas.height);
  context.stroke();

  //四分之一線結束

  context.strokeStyle='red';
  context.lineWidth= 5;
  //左上角
  context.beginPath();
  context.moveTo(100, 250);
  // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  context.bezierCurveTo(175, 50, 200, 450, 350, 300);
  context.stroke();

  //輔助線
  context.strokeStyle='blue';
  context.lineWidth= 1;
  context.beginPath();
  context.moveTo(100, 250);
  context.lineTo(175, 50);
  context.lineTo(250, 450);
  context.lineTo(350, 300);
  context.stroke();

  // // 右上角
  context.beginPath();
  // context.arc(750, 200, 150, 0, Math.PI, true);
  context.stroke();


  // //左下角
  context.beginPath();
  // context.arc(250, 600, 150, 0, 2*Math.PI, true);
  context.stroke();


  // //右下角
  context.beginPath();
  // context.arc(750, 600, 150, 0, 0.2*Math.PI, 1.6*Math.PI, false);
  context.stroke();


}

window.addEventListener('load', doFirst);
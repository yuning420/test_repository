function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  


  // context.moveTo(100, 100); //左右
  // context.lineTo(250, 250); //上下
  // context.lineTo(400, 100); 
  // context.lineTo(50, 200);


  // pink bow
  // context.moveTo(100, 100);
  // context.lineTo(100, 250);
  // context.lineTo(400, 100);
  // context.lineTo(400, 250);
  // context.closePath();
  // context.fill();
  // context.stroke();

  // context.fillRect(200,150,100,50);
  // context.strokeRect(200,150,100,50);
  
  //try 3d square
  context.fillStyle='pink';
  context.lineWidth= 2;
  
  context.moveTo(100, 100); //左上
  context.lineTo(300, 100); //右上
  context.lineTo(300, 300); //右下
  context.lineTo(100, 300); //左下
  context.closePath();
  context.stroke();
  context.fill();

  context.moveTo(100, 100);
  context.lineTo(200, 50);
  context.lineTo(400, 50);
  context.lineTo(300, 100);
  context.stroke();



  context.moveTo(400, 50);
  context.lineTo(400, 250);
  context.lineTo(300, 300);
  context.stroke();
  // context.fillStyle='red';
  // context.fill();
  






  // context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
  

    
  

  
}

window.addEventListener('load', doFirst);
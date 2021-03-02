function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  context.font='bold 40px Tahoma';//fillText跟css寫法一樣 要加單位(px)

  //加線
  // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
  context.textBaseline='alphabetic';
  
  //First
  context.fillText('Style', 100, 100); 

  context.moveTo(100, 100);
  context.lineTo(250, 100);
  context.stroke();

  //second
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 3;
  context.shadowColor = 'rgba(255,0,0,.6)';
  context.shadowBlur = 8;
  
  context.fillText('Style', 100, 250); 

  //third
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 10;
  context.fillStyle='#fff';

  context.fillText('Style', 100, 400); 

  //forth

  context.shadowColor='blue';
  
  context.fillText('Style', 100, 550); 


  
  
  
  
  

  
}

window.addEventListener('load', doFirst);
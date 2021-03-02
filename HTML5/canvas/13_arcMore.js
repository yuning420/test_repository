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
    
  context.lineWidth= 15;
  context.strokeStyle='darkblue';

  context.beginPath();
  context.arc(250, 250, 150, 0, 2*Math.PI);
  context.stroke();
  

  //圓心在250 250,為了避免混淆,圓心最好在0,0
  // context.beginPath();
  // context.moveTo(250, 250);
  // context.lineTo(250, 150);
  // context.stroke();

  context.translate(250, 250); //重設0,0 故250,250 -> 0,0
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, -100);
  context.stroke();

  context.translate(-250, -250);
  context.lineWidth= 20;

  let gradient = context.createRadialGradient(750,550,190,750,550,210);
  gradient.addColorStop(0, '#555');
  gradient.addColorStop(0.5, '#fff');
  gradient.addColorStop(1, '#555');
  
  context.beginPath();
  context.arc(750, 550, 200, 0, 2*Math.PI);
  context.strokeStyle= gradient;
  context.stroke();
  
  
  

}

window.addEventListener('load', doFirst);
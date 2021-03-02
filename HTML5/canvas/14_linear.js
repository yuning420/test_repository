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

  let gradient = context.createLinearGradient(100, 100, 600, 100);
  gradient.addColorStop(0, 'pink');
  gradient.addColorStop(0.5, 'orange');
  gradient.addColorStop(1, 'red');
  
  // context.fillStyle='darkblue';
  context.fillStyle= gradient;
  
  context.fillRect(100, 100, 500, 300);

  
  

}

window.addEventListener('load', doFirst);
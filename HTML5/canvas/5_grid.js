function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  
  for( i=0; i <= 100; i++){
    let position = i * 25;

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
  // context.moveTo(0, 100);
  // context.lineTo(1000, 100);
  // context.stroke();

  
  
  


  
}

window.addEventListener('load', doFirst);
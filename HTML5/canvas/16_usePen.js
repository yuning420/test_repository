function doFirst(){
  let canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  
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

  canvas.addEventListener('mousemove', drawUsePen);

}
function drawUsePen(e){
  context.fillStyle= 'red';
  context.strokeStyle='red';
  
  
  // context.fillRect(e.pageX, e.pageY, 5,5);
  context.beginPath();
  context.arc(e.pageX, e.pageY, 5, 0, 2*Math.PI);
  context.fill();
  
  
};
window.addEventListener('load', doFirst);
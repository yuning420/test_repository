function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  let image = new Image();
  image.src = '../../images/cityscape.jpg';
  image.addEventListener('load',function(){
    //檔案裡有檔案就要有load事件, js是物件導向 事件驅動的程式
    // context.drawImage(image, 100, 80);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    
  });
  
  
  
}

window.addEventListener('load', doFirst);
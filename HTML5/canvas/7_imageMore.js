function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  let pic1 = new Image();
  // image.src = '../../images/cityscape.jpg';
  // pic1.src = 'https://loremflickr.com/320/240/paris';
  pic1.src = `https://loremflickr.com/${canvas.width}/${canvas.height}/paris`;
  pic1.addEventListener('load', loadImage);

  let pic2 = new Image();
  // image.src = '../../images/cityscape.jpg';
  // pic1.src = 'https://loremflickr.com/320/240/paris';
  // pic2.src = `https://loremflickr.com/${canvas.width}/${canvas.height}/cat`;
  pic2.src = "../../images/Shinnosuke/Shinnosuke9.png";
  pic2.addEventListener('load', loadImage);


  
  
  function loadImage(){
    context.globalAlpha= 0.2;
    context.drawImage(pic1, 0, 0);

    context.globalAlpha= 1;
    context.drawImage(pic2, (canvas.width - 320) /2, (canvas.height - 240) /2);
    
    
  }
  
}

window.addEventListener('load', doFirst);
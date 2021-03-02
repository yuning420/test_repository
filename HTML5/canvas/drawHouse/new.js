function doFirst(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d'); 

  canvas.width = 400;
  canvas.height = 400;
	
	setInterval(drawHouse, 30);
	theClock = 0;
	// theClock = -40; 讓車子從外頭進來，從0開始++比較有意義
	function drawHouse(){ //因為canvas要不斷的重劃 才可以完成動畫, 用setInterval設定時間
		theClock++;
		//用橡皮擦讓每次重畫前都會擦掉前次筆跡
		context.clearRect(0, 0, canvas.width, canvas.height);
    
    //劃格線
    context.beginPath();
    for(let i=0; i<25; i++){
      let position = i * 50;
      context.moveTo(position,0);
      context.lineTo(position,canvas.height);
      context.fillText(position,position,10);
            
      context.moveTo(0,position);
      context.lineTo(canvas.width,position);
      context.fillText(position,0,position);
    }
    context.strokeStyle = 'rgba(0,0,0,0.2)';
    context.stroke();

    //劃地板
    context.beginPath();
    context.moveTo(25,350);
    context.lineTo(375,350);
    context.strokeStyle = 'rgb(0,0,0)';
    context.lineWidth = 2;
    context.stroke();

    context.lineWidth = 1;
    //左邊
    context.beginPath();
    context.rect(50,150,150,200);
    context.fillStyle = '#fff1b0';
    context.fill();
    context.stroke();

    //左邊屋頂
    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(125,75);
    context.lineTo(200,150);
    context.fillStyle = '#fff1b0';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(75,125);
    context.lineTo(125,150);
    context.closePath();
    context.fillStyle = '#f6ab1c';
    context.fill();        
    context.stroke();

    context.beginPath();
    context.rect(75,125,33,25);        
    context.rect(108,125,33,25);        
    context.rect(141,125,33,25);
    context.fillStyle = '#f6ab1c';
    context.fill();        
    context.stroke();

    context.beginPath();
    context.moveTo(174,125);
    context.lineTo(200,150);
    context.lineTo(174,150);
    context.closePath();
    context.fillStyle = '#f6ab1c';
    context.fill();        
    context.stroke();

    context.beginPath();
    context.rect(108,100,33,25);
    context.fillStyle = '#8fcedf';
    context.fill();        
    context.stroke();  
        
    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(25,150);
    context.lineTo(125,50);
    context.lineTo(225,150);
    context.lineTo(200,150);
    context.lineTo(125,75);
    context.closePath();
    context.fillStyle = '#8fbc6b';
    context.fill();
    context.stroke();  

    //左邊門
    context.beginPath();    
    context.rect(135,275,40,75);
    context.fillStyle = '#9f815b';
    context.fill();
    context.stroke();

    context.beginPath();    
    context.rect(135,200,20,45);
    context.rect(155,200,20,45);

    context.rect(75,200,20,45);
    context.rect(95,200,20,45);

    context.rect(75,275,20,45);
    context.rect(95,275,20,45);

    context.fillStyle = '#8fcedf';
    context.fill();
    context.stroke();

    //右邊
    context.beginPath();
    context.rect(200,250,150,100);
    context.fillStyle = '#fde062';
    context.fill();
    context.stroke();

    context.beginPath();    
    context.rect(225,275,50,45);
    context.rect(275,275,50,45);
    context.fillStyle = '#8fcedf';
    context.fill();
    context.stroke();


    //右邊屋頂
    context.beginPath();
    context.moveTo(200,175);
    context.lineTo(325,175);
    context.lineTo(360,250);
    context.lineTo(200,250);
    context.closePath();
        
    context.fillStyle = '#8fbe62';
    context.fill();
    context.stroke();
		
		//車子
		context.fillStyle='pink';

		//用變數
		let carX = (theClock %(400+40))-40;
		context.fillRect(carX, 325, 40, 25);
		context.strokeRect(carX, 325, 40, 25);
		context.beginPath();
		context.arc(carX+10, 350, 5, 0, 2*Math.PI);
		context.arc(carX+30, 350, 5, 0, 2*Math.PI);
		
		//original
		// context.fillRect(50, 325, 40, 25);
		// context.strokeRect(50, 325, 40, 25);
		// context.beginPath();
		// context.arc(50+10, 350, 5, 0, 2*Math.PI);
		// context.arc(50+30, 350, 5, 0, 2*Math.PI);
		context.fillStyle = '#666';
    context.fill();
    context.stroke();
		
	}
		

  
  
}
window.addEventListener('load',doFirst);
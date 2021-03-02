function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange;
}
//只要能完成一個完整的task就可以切割出來,不是每個function都要寫很長
function fileChange(){
  let file = document.getElementById('theFile').files[0];
  // console.log(file);
  
  let message = '' ; //如果變數拿來當串接,給空字串
  message += `File name:${file.name}\n`; //+= 字串串接  \n換行new line
  message += `File type:${file.type}\n`;
  message += `File size:${file.size} bytes\n`;
  message += `Last modified:${file.lastModifiedDate} \n`;

  //也可以只用一對反引號包起來,但要小心空格和排版
  // message += `File name:${file.name}\n
  //             File type:${file.type}\n
  //             File size:${file.size} bytes\n
  //             Last modified:${file.lastModifiedDate} \n`;

  document.getElementById('fileInfo').value = message;
}
window.addEventListener('load', doFirst);
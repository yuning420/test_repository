function doFirst(){
  //先跟畫面產生關聯，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange;
}
//只要能完成一個完整的task就可以切割出來,不是每個function都要寫很長
function fileChange(){
  let files = document.getElementById('theFile').files;
  //多個檔案為陣列,用for loop 處理

  let message = '' ; //如果變數拿來當串接,給空字串
  //變數設在迴圈外比較方便
  for(let i=0; i<files.length; i++){
    message += `File name:${files[i].name}\n`; //+= 字串串接  \n換行new line
    message += `File type:${files[i].type}\n`;
    message += `File size:${files[i].size} bytes\n`;
    message += `Last modified:${files[i].lastModifiedDate} \n`;
    message += `=============================\n`;

    document.getElementById('fileInfo').value = message;
  
  }


}
window.addEventListener('load', doFirst);
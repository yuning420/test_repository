$(document).ready(function () {
  // let size = parseInt($('div').css('fontSize')); //偵測字有多大, parseInt可以讓px單位拿掉以利計算
  // alert(size); //16

  $('#shrink').click(function(){
    changeSize('small');
  });
  
  $('#enlarge').click(function(){
    changeSize('big');
  });

  //放大縮小是功能，所以用函數來操作
  function changeSize(size){
    let currentSize = parseInt($('div').css('fontSize'));
    //先抓目前div的大小
    if(size == 'small'){
      newSize = currentSize - 2;
      //有parseInt的關係，所以可以直接運算!
    }else if(size == 'big'){
      newSize = currentSize + 2;
    }
    $('div').css('fontSize', newSize);
    //JQ有預設px單位值，故不用加px也沒關係
  }


});
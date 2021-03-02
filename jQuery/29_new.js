$(document).ready(function () {
  let divWidth = $('#sliderBoard').width();
  // alert(divWidth); 抓寬
  let imgCount = $('#content li').length;
    // alert(imgCount); 抓數量
  for(let i=0; i<imgCount; i++){
    $('#contentButton').append('<li></li>');

  }
  $('#contentButton li:nth-child(1)').addClass('clickMe');

  $('#content li').width(divWidth); //li的寬度
  $('#content').width(divWidth* imgCount); //ul width

  let index;
  $('#contentButton li').click(function(){
    // alert($(this).index());
    index = $(this).index();

    $('#content').animate({
      left: divWidth * index * -1,
    });

    $(this).addClass('clickMe');
    $('#contentButton li').not(this).removeClass('clickMe');
  });
});
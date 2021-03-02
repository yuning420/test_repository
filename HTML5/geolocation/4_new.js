function doFirst(){
  let area = document.getElementById('map'); 
  let position = new google.maps.LatLng(25.0524608, 121.5431809);
  let options = {
    zoom: 14,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let map = new google.maps.Map(area, options);
  //要把變數用進來!
  
  // let marker = new.google.maps.Map({
  //   position: position,
  //   map: map,
  // });

  //ES6 屬性和屬性值名稱相同時可省略
  let marker = new google.maps.Marker({
    position,
    map,
    icon: '../../images/number/dgtp.gif',
    title: '老師是飆車逆'
  });

}




window.addEventListener('load', doFirst);
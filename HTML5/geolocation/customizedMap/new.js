function doFirst(){
  navigator.geolocation.getCurrentPosition(succCallback);
}
function succCallback(e){
  // let lati = e.coords.latitude;
  // let longi = e.coords.longitude;

  // HOME
  let lati = 25.0393312;
  let longi = 121.5573764;

  let area = document.getElementById('map');
  let position = new google.maps.LatLng(lati, longi);

  let options = {
	  zoom: 14,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(area,options);

  let marker = new google.maps.Marker({
    position,
    map,

        
  });
  marker.setTitle('目前位置');
  marker.setIcon('logo/home1.png');
}
function showInfo(shop){
	switch(shop.id){
		case 'sb': 
			getCoords(sb, 'Starbucks');
			break;

		case 'seven': 
			getCoords(seven, '7-11');
			break;

		case 'family':	
			getCoords(family, 'Family Mart');
			break;

		case 'md': 
			getCoords(md, 'McDonalds');
			break;
		default:
			break;
	}
}

let markers =[];

function getCoords(coords, title){
	let i=0;
	for(let key in markers){ //use markers[key]
		markers[key].setVisible(false);
	}

	for(let key in coords){ //use coords[key]
		let lati = coords[key].split(',')[0];
		let longi = coords[key].split(',')[1];

		let position = new google.maps.LatLng(lati, longi);

		let marker = new google.maps.Marker({
			position,
			map,
		});
		marker.setTitle(title);
		markers[i] = marker;
		i++;
	}
}

window.addEventListener('load',doFirst);

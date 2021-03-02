function doFirst() {
  //先跟HTML畫面產生關聯
  loadButton = document.getElementById('loadButton');
  feedback = document.getElementById('feedback');

  //再建事件聆聽功能
  loadButton.addEventListener('click', function () {
    //先判斷此處是否已有物件，若有要先刪除
    while(feedback.hasChildNodes()){
      feedback.removeChild(feedback.firstChild);
    }

    // step 1 建立AJAX物件
    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', callState);
    //事件一律全部小寫

    // step 2 發出請求+送出去
    let url = './XML_JSON_CSV/travellocationCHINESE.xml';
    // xjr.open('methods', url, [async(true/false)]) 語法
    xhr.open('GET', url);
    xhr.send();
  });
}
// step 3 接收Server端傳回來的資料 -- 文字檔格式(這邊是XML)
function callState() {
  if(xhr.readyState == 4){ //readyState: 開始傳送 0 -> 1 -> 2 -> 3 -> 4 成功
    if (xhr.status == 200) {  // 200 == 成功
      let xmlData = xhr.responseXML; // responseXML或responseText
      // console.log(xmlData);
      Section = xmlData.querySelectorAll('Section');
      for (let i = 0; i < 15; i++) {
        theTitle = Section[i].getElementsByTagName('stitle')[0].firstChild.nodeValue;
        theContent = Section[i].querySelector('xbody').firstChild.nodeValue;
        latitude = Section[i].querySelector('latitude').firstChild.nodeValue;
        longitude = Section[i].querySelector('longitude').firstChild.nodeValue;
        theImage = Section[i].querySelector('file img').firstChild.nodeValue;
        if (Section[i].querySelector('xurl')) {
          theURL = Section[i].querySelector('xurl').firstChild.nodeValue;
        } else {
          theURL = theImage;
        }
        // console.log(theURL);

        createdXMLNodes();
      }
    }else{
      feedback.innHTML = `${xhr.status} : ${xhr.statusText}`;
    }
  }
  
}
function createdXMLNodes() {
  // console.log(theTitle);
  let travel = document.createElement('div');
  travel.className = 'travelLocation';

  feedback.appendChild(travel);
  
  //left 
  let leftDiv = document.createElement('div');
  leftDiv.className = 'left';
  
  let url = document.createElement('a');
  url.href = theURL;

  let image = document.createElement('img');
  image.src = theImage;

  url.appendChild(image);
  leftDiv.appendChild(url);
  travel.appendChild(leftDiv);

  //right
  let rightDiv = document.createElement('div');
  rightDiv.className = 'right';

  let header = document.createElement('header');
  header.innerText = theTitle;

  let coordsDiv = document.createElement('div');
  let coordsSpan = document.createElement('span');

  coordsSpan.innerText = `${latitude} | ${longitude}`;

  coordsDiv.appendChild(coordsSpan);

  let hrAlone = document.createElement('hr');

  let theFooter = document.createElement('footer');
  theFooter.innerText = theContent.substr(0,800);

  rightDiv.appendChild(header);
  rightDiv.appendChild(coordsDiv);
  rightDiv.appendChild(hrAlone);
  rightDiv.appendChild(theFooter);

  travel.appendChild(rightDiv);

  //clear (為了float加的那個)
  let clearDiv = document.createElement('div');
  clearDiv.style.clear = 'both';

  travel.appendChild(clearDiv);


}



window.addEventListener('load', doFirst);
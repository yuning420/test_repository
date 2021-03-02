//動態新增先在html將需要新增的東西寫上,css樣式也一起解決
//再將html的內容註解,以便寫JS

let storage = sessionStorage;
function doFirst(){
  if(storage['addItemList'] == null ){
    //沒有的話就先給空字串
    // storage.setItem('addItemList', '');
    //一定要判斷 不然storage每次重新整理都會清空
    storage['addItemList'] = '';  
  }

  //幫每個Add Cart建立事件聆聽功能
  let list = document.querySelectorAll('.addButton'); //list是陣列
  for(let i=0; i<list.length ; i++){
    list[i].addEventListener('click', function(){
      //先找到id A1001裡的input的value值
      let teddyInfo = document.querySelector(`#${this.id} input`).value;
      // alert(this.id);
      // alert(teddyInfo);
      addItem(this.id, teddyInfo);
    });
  }
}
function addItem(itemId, itemValue){
  // alert(`${itemId}: ${itemValue}`); //確認有偵測到
  let image = document.createElement('img');
  image.src = 'imgs/' + itemValue.split('|')[1];

  let title = document.createElement('span');
  title.innerText = itemValue.split('|')[0];

  let price = document.createElement('span');
  price.innerText = itemValue.split('|')[2];
  
  let newItem = document.getElementById('newItem');

  //先看此處是不是已有物件,如果想要刪一個放一個,再來寫新物件

  // alert(newItem.childNodes.length); //childNodes換行也會增加一個物件,謹慎使用! 
  //建議用while loop來避免childNodes的物件數量問題
  //用hasChildNodes來判斷購物車裡有沒有東西,有再執行while loop
  if(newItem.hasChildNodes){
    while(newItem.childNodes.length >= 1){
      //length>=1 就刪掉第一個[0],可以讓購物車都只留著當下選取的那一個
      newItem.removeChild(newItem.firstChild);
    }
  }
  //顯示新物件如下
  newItem.appendChild(image); //放圖片進去
  newItem.appendChild(title); //放title進去
  newItem.appendChild(price); //放price進去

  // 存入Storage------------------------
  if(storage[itemId]){
    alert('You have checked.')
  }else{
    // storage['addItemList'] += itemId + ', ';
    storage['addItemList'] += `${itemId}, `;
    storage.setItem(itemId, itemValue);     //存進去
  }

  //計算購買數量和小計
  let itemString = storage.getItem('addItemList');
  // alert(itemString);
  let items = itemString.substr(0,itemString.length-2).split(', ');
  // console.log(items); //["A1003", "A1004", "A1002", "A1006"] 
  subtotal = 0;
  for(let i=0; i<items.length; i++){
    let itemsInfo = storage.getItem(items[i]);
    let itemPrice = parseInt(itemsInfo.split('|')[2]);

    subtotal += itemPrice;
  }

  document.getElementById('itemCount').innerText = items.length;
  document.getElementById('subtotal').innerText = subtotal;


}



window.addEventListener('load', doFirst);
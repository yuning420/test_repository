let storage = sessionStorage;
function doFirst(){
  let itemString = storage.getItem('addItemList');
  let items = itemString.substr(0,itemString.length-2).split(', ');

  newDiv = document.createElement('div');
  newTable = document.createElement('table');
  
  //先將table放進div, 再將div放進cartList
  newDiv.appendChild(newTable); //table放進div
  document.getElementById('cartList').appendChild(newDiv); //div放進cartList

  //價錢
  total = 0; 
  //for in 物件或陣列
  for(let key in items){ // use items[key]
    let itemInfo = storage.getItem(items[key]);
    // alert(items[key]);
    createCartList(items[key], itemInfo); //呼叫createCartList建立<tr>

    let itemPrice = parseInt(itemInfo.split('|')[2]);
    total += itemPrice;
  }
  document.getElementById('total').innerText = total;
}

function createCartList(itemId, itemValue){
  // alert(`${itemId} : ${itemValue}`)
  let itemTitle = itemValue.split('|')[0];
  let itemImage = 'imgs/' + itemValue.split('|')[1];
  let itemPrice = parseInt(itemValue.split('|')[2]);

  //建立每個品項的清單區域 -- tr
  let trItemList = document.createElement('tr');
  trItemList.className = 'item';

  newTable.appendChild(trItemList);
  //建立商品圖片 -- td
  let tdImage = document.createElement('td');
  tdImage.style.width= '200px';

  let image = document.createElement('img');
  image.src = itemImage;
  image.width = 80;

  tdImage.appendChild(image);
  trItemList.appendChild(tdImage);

	//建立商品名稱和刪除按鈕 -- second td
	let tdTitle = document.createElement('td');
	tdTitle.style.width ='280px';
	tdTitle.id = itemId;

	let pTitle = document.createElement('p');
	pTitle.innerText = itemTitle;

	let delButton = document.createElement('button');
  delButton.innerText = 'Delete';
  delButton.addEventListener('click', deleteItem);

  tdTitle.appendChild(pTitle);
  tdTitle.appendChild(delButton);
  trItemList.appendChild(tdTitle);

  //建立商品價格 -- third td
	let tdPrice = document.createElement('td');
  tdPrice.style.width ='170px';
  tdPrice.innerText = itemPrice;

  trItemList.appendChild(tdPrice);

  //建立商品數量 -- fourth td
  let tdItemCount = document.createElement('td');
  tdItemCount.style.width ='60px';

  let inputItemCount = document.createElement('input');
  inputItemCount.type = 'number';
  inputItemCount.value = '1';
  inputItemCount.min = 0;
  inputItemCount.addEventListener('input', changeItemCount);

  tdItemCount.appendChild(inputItemCount);
  trItemList.appendChild(tdItemCount);

}

function deleteItem(e){
  // alert(this.parentNode.id);
  // alert(this.parentNode.getAttribute('id'));
  // alert(e.target.parentNode.getAttribute('id'));
  
  let itemId = this.parentNode.id;

  //1.先扣除總金額
  let itemValue = storage.getItem(itemId);
  // total = total - parseInt(itemValue.split('|')[2]);
  total -= parseInt(itemValue.split('|')[2]);

  document.getElementById('total').innerText = total;

  //2.清除Storage
  storage.removeItem(itemId);
  storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `,'');

  //3.刪除該筆<tr>
  // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  newTable.removeChild(this.parentNode.parentNode);
}

function changeItemCount(){
  // alert();
}



window.addEventListener('load', doFirst);
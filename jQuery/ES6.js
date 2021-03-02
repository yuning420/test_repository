1. var | let | const

  for( var i=0; i<5; i++){
    console.log(i);
  }
  console.log(i);
  result:
  0
  1
  2
  3
  4
  5
  -----------------------
  for( let j=0; j<5; j++){
    console.log(j);
  }
  console.log(j);
  result:
  0
  1
  2
  3
  4
  Uncaught ReferenceError: j is not defined


  #hosting(  
    test();    //先執行該函數
    function test(){ //補宣告
      ...function...
    }
    -----
    temp += 10;
    var temp = 10;
    -----
    let&const 不可以先執行再補宣告
    ------------------------------------
    # const不能被reassign
    const x = 100;
    x = 50; // 失敗!
    -----
    const obj = {
      a: 5,
      b: 10,
      c: 15,
    };

    obj.a = 500; // 成功!


2. object shorthand 物件縮寫
    (1). 屬性縮寫
      function givePoint(x, y){
        return{
          x: x,
          y: y,
        }
      }
      call: const point = givePoint(100, 200);
            console.log(point);
      result: {x: 100, y: 200}

      function givePoint(x, y){
        return{
          x,
          y,
        }
      }
      call: const point = givePoint(100, 200);
            console.log(point);
      result: {x: 100, y: 200}
    -----------------------------------

      function createObject(key, value){
        const obj = {}; // const obj = new Object();
        obj[key]= value; //物件的陣列表示法
        return obj;
      }
      call: const person = createObject('name', 'Peter');
            console.log(person);
      result: {name: "Peter"}
      -----
      call: const dog = createObject('legs', 4);
            console.log(dog);
      result: {legs: 4}

      ==> 屬性可以計算:

      function createObject(key, value){
        const obj = {
          [key+1]: value,
        };
        return obj;
      }
      call: const person = createObject('name', 'Peter');
            console.log(person);
      result: {name1: "Peter"}

    (2).函數縮寫
      const options = {
        name: 'Peter',
        age: 40,
        created: function(){...}, // === created(){...},
        mounted: function(){...}, // === mounted(){...},
      }

===============================================
3. destructuring assignment 解構賦值
  (1)陣列解構
    let numArray = [2,4,6];
    let firstNum = numArray[0];
    let secondNum = numArray[1];
    console.log(firstNum); --> 2
    console.log(secondNum); --> 4

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    let numArray = [2,4,6];
    let [firstNum,secondNum] = numArray;

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    let numArray = [2,4,6];
    let [first, second, third, fourth] = numArray;
    console.log(first); --> 2
    console.log(second); --> 4
    console.log(third); --> 6
    console.log(fourth); --> undefined

    console.log(first+second+third+fourth); --> NaN

    陣列解構的同時
    #可以給初值
      let numArray = [2,4,6];
      let [first, second, third, fourth=100] = numArray;
      console.log(first+second+third+fourth); --> 112

    #可以忽略部分元素
      let numArray = [2,4,6];
      let [,x] = numArray; //只想取第二個值

      console.log(x); --> 4

    #可以swap(兩個值互換)
      let x = 5;
      let x = 5;
      let temp;

      temp = x;
      x = y;
      y = temp;

      let x = 5;
      let y = 10;
      [x,y] = [y,x];

      console.log(x); --> 10
      console.log(y); --> 5

    #可以處理剩下的部分
      let numArray = [2,4,6,8,10];
      let [arr, ...others] = numArray;

      console.log(arr); -->2
      console.log(others); -->4,6,8,10


  (2)物件解構
    #可以給預設值
    let point = {
      x: 100,
      y: 200,
    };
    let x = point.x; //100
    let y = point.y; //200

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let point = {
      x: 100,
      y: 200,
    };
    let {x, y, z=10} = point;

  (3)方法(函數)參數的解構
    let point = {
      x: 100,
      y: 200,
    };
    function distance(thePoint){
      return Math.sqrt(thePoint.x * thePoint.x + thePoint.y * thePoint.y);
    }
    let ans = distance(point);
    console.log(ans); //223.60679774997897

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let point = {
      x: 100,
      y: 200,
    };
    function distance(thePoint){
      const {x, y} = thePoint;
      return Math.sqrt(x*x + y*y);
    }

    let ans = distance(point);
    console.log(ans); //223.60679774997897

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  **常用**
    let point = {
      x: 100,
      y: 200,
    };
    function distance({x = 0, y = 0}){ //直接在函數的參數裡做解構
      return Math.sqrt(x*x + y*y);
    }
    let ans = distance(point);
    console.log(ans); //223.60679774997897

===============================================


4. String template 字串模版(使用backtick ``)
(1). 字串串接
  let name = 'Peter';
  console.log('Hello'+ name +'!'); //ES5
  console.log(`Hello ${name}!`); //ES6

(2).插入表達式()
  function greeting(name,days){
    console.log(`Hello ${name}! It has been ${days * 24} hours.`);
  }
  呼叫: greeting('Peter',3);
  結果:Hello Peter! It has been 72 hours.

  有條件如下:
  function greeting(name,days){
    console.log(`Hello ${name}! ${(days>3)? 'It has been as long time since I saw you last!':''} `);
  }
  呼叫: greeting('Peter',3);

(3).多行字串
  let longString = `Lorem ipsum, dolor sit amet consectetur   adipisicing elit. Quidem eveniet eos, minus libero reprehenderit porro quo sequi corrupti dolore impedit autem numquam quae veritatis ad magnam esse natus sunt! Sed!`;

===============================================

5. arrow function 箭頭函數
  // 目的:提供更簡短的宣告和定義函數的方式
  (1)宣告方式:
    //ES5
    let ans = function multi(x){
      return x * 2;
    };

    
    //ES6
    let ans = (x) => {
      return x * 2;
    };

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let ans = (x) => x * 2;

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let ans = x => x * 2;

    簡化的語法:
    -如果傳遞不只一個參數或沒有傳參數, ()不能省略
    -如果傳遞只一個參數, ()就可以省略
    -內容只有一個敘述(傳回值), 可以不用寫{}
    
    theArray.Map(function(first, second){
      return first + second;
    });

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    theArray.Map((first, second) => {
      return first + second;
    });

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    theArray.Map((first, second) => first + second);
    

    theButton.addEventListener('click',function(){console.log(100); });

    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    theButton.addEventListener('click', () => console.log(100););

  (2)自動綁定:
    只要寫成箭頭函數, 內部的和外部的this相同就是自動綁定

    let ans = () => console.log(this);
    console.log(this);

  (3)this
    let ans = function(){
      console.log(this);
    };
    console.log(this); //this代表什麼物件,要視情境(context)決定

    (i)
    var name = 'Peter';
    var ans = function(){
      console.log(this.name);
    };

    執行: ans()
    結果: Peter


    (ii)
    var name = 'Peter';
    var ans = function(){
      console.log(this.name);
    };

    var people = {
      name: 'Stella',
      age: 30,
    };
    people.ans = ans();

    執行: ans()
    結果: Peter

    執行: people.ans()
    結果: Stella


    (iii)
    html:
    <button id="theButton" name="Tina">Pls click!</button>

    JS:
    let theButton = document.getElementById('theButton');
    theButton.addEventListener('click', ans); //Tina


===============================================

6. spread operator
  參照spread.html  

===============================================

7. operator: ??
  條件判斷為false: 0 | false | '空字串' | null | undefined | NaN
  除了以上六項, 其餘皆為true

  if(name == null || name == ''){
    ...  //因為不成立,故判斷不到 ES2020新出來的!
  }

===============================================

8. classes(如何自訂內建物件)
  參照classes.html  
  

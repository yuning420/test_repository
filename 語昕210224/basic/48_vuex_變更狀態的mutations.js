Vuex裡面有四個主要的元素:
 - state : 儲存狀態
 ★ mutations : 變更狀態
 - getters : 取得狀態
 - actions : 發出指令

 每一個 mutations 有兩個組成要件:
  - 名字
  - callback

 mutations 是唯一可以直接改變state的方法
 作法: 透過 mutations 使用裡面的callback將state傳入，就可以直接改變state內的屬性值。

 //store.js
 mutations: {
    addCount(state){
        state.count += 1;
    },

    Vue.set(state, 'loading', false);  //本來state沒有這個屬性
 }

 //App.vue: 要在methods裡面  commit mutations
 methods: {
    addCount(){
      this.$store.commit('addCount');  //commit mutations的名字是 addCount
    },
  },

=========
case study: 要commit時，順便說明要加多少?
(可以在commit時，多加一個參數) 
//App.vue
    this.$store.commit('addCount',100); 

 //store.js
 mutations: {
    addCount(state,payload){ //commit時附帶一個貨物..
        state.count += payload;
    },
 }
=========
case study: commit 一個物件
//App.vue
    this.$store.commit({
        type: 'addCount',  //只有type是語法，其他的名稱無所謂
        step: 5,
        temp: 100,
    }); 

//store.js
mutations: {
   addCount(state,payload){ //commit時附帶一個貨物..
       state.count += payload.step;  //每次加5
    //    state.count += payload.temp;  //每次加100
   },
}
=========
也可以有map的語法
//App.vue
import {mapState,mapMutations} from 'Vuex';
//和mapState一樣，可以傳入陣列和物件
export default{
    computed: mapState(['count','gender']),
    methods: mapMutations(['addCount']);
}
※ mutations的callback只能做同步操作，不可以加上非同步的語法
非同步只能放在actions裡面
Vuex裡面有四個主要的元素:
 ★ state : 儲存狀態
 - mutations : 變更狀態
 - getters : 取得狀態
 - actions : 發出指令

 state : 儲存狀態的物件，該物件有很多屬性(若要取用裡面的屬性，要用computed，而不是用data)

//store.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        count: 0,
        username: '',
        gender: '',
        favoriteColor: [],
        // loading: false,
    },
    mutations: {
        addCount(state){
            state.count += 1;

            Vue.set(state, 'loading');
            state.loading = true;  //如果state裡面沒有指定屬性，可以在此指定
        },
    },
});
export default store;

//App.vue: 如果要取用store裡面的屬性，要用computed
<script>
export default{
    computed: {
      count(){
        return this.$store.state.count;
      },
      username(){
        return this.$store.state.username;
      },
      favoriteColor(){
        return this.$store.state.favoriteColor;
      },
    },
    methods: {
      addCount(){
        this.$store.commit('addCount');
      },
    },
}
</script>

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓可用以下語法來簡化流程
<script>
import {mapState} from 'vuex';   //加這行
    //如果沒有用webpack就沒有import可以使用
    //可以用: Vuex.mapState

export default{
    // 1.傳入字串陣列
    computed: mapState([
        'count',
        'username',
        'gender',
        'favoriteColor',
    ]),
    // 2.傳入物件
    computed: {
        ...mapState([
            'count',
            'username',
            'gender',
            'favoriteColor',
        ]),
    },
    //以上二擇一

    //3.如果要取用state裡面的屬性，還要有自己的資料在computed處理?
    data(){
        return {
            localCount: 0,
        };
    }, 
    computed: mapState([
        // count: 'count',  //前面的count是<h1>的那個count
        count(state){
            return state.count;
        },//可以寫成箭頭函數  count: state => state.count,

        totalCount(state){
            return this.localCount + state.count;
        },//以上有用到this，所以不能寫成箭頭函數
    ]),
    //以上的computed改寫成以下:
    computed:{
        myCount(){
            return this.localCount;
        },
        ...mapState([
            'count',
            'username',
            'gender',
            'favoriteColor',
        ]),
    },
}
</script>



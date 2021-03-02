Vuex裡面有四個主要的元素:
 - state : 儲存狀態
 - mutations : 變更狀態
 - getters : 取得狀態
 ★ actions : 發出指令

 actions: 可以進行非同步操作

 //case study: 用ajax()從API取得server的資料，存入陣列tasks[]中
 
// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const url = '路徑內容自己寫';
const store = new Vuex.Store({ 
    state: {
        tasks: [],
    },
    mutations: {
        setTask(state,tasks){
            state.tasks = tasks;  //在此才能改變state的tasks值
            //接下來要想辦法讓actions發出mutations
        },
    },
    actions: {
        //語法: 
        // fetchTasks(){
        //     fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {...});
        // },
        //從url取回的json檔格式，將tasks指定回去給state的tasks
        // 請注意: actions不能直接修改state,所以只能commit mutations

        fetchTasks(store){ //此處的store並非前面提到的store,但意義很相近
            fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
                store.commit('setTasks',tasks);
            });
        },
    },
});
export default store;

// App.vue
<script>
    import {mapState,mapGetters} from 'Vuex';
    export default{
        mounted(){
            //在mounted去actions(執行) fetchTasks()
            this.$store.dispatch('fetchTasks'); 

            //mutations 對應 commit
            //actions 對應 dispatch
            //用法幾乎一樣
        },
        computed: {
           
        methods: {
           
        },
    }
</script>

==========
//修改store.js的 fetchTasks

fetchTasks(store){ //此處的store並非前面提到的store,但意義很相近
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        store.commit('setTasks',tasks);
    });
},

↓↓↓↓↓↓↓↓↓↓↓↓↓↓修改成以下
//將store修改成context，因為context包含store裡面的一切: mutations, commit, dispatch, state...
fetchTasks(context)){ 
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        context.commit('setTasks',tasks);
    });
},

↓↓↓↓↓↓↓↓↓↓↓↓↓↓再修改成以下
fetchTasks({commit}){ 
    fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
        commit('setTasks',tasks);
    });
},

===============
case study: 在同一個actions做不同的commit?

// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const url = '路徑內容自己寫';
const store = new Vuex.Store({ 
    state: {
        tasks: [],
        loading: false,  //加這行
    },
    mutations: {
        setTask(state,tasks){
            state.tasks = tasks;  //在此才能改變state的tasks值
            //接下來要想辦法讓actions發出mutations
        },
        setLoading(state,loading){   //加這段
            state.loading = loading;
        },
    },
    actions: {
        fetchTasks({commit},payload){ 

            commit('setLoading',true);

            fetch(`${url}/tasks`).then(res => res.json()).then(tasks => {
                commit('setTasks',tasks);
                commit('setLoading',false);
            });
        },
    },
});
export default store;

// App.vue
<script>
    import {mapActions} from 'Vuex';
    export default{
        mounted(){           
            this.fetchTasks({id:5}); 
        },
        methods: mapActions(['mapActions']),
    }
</script>

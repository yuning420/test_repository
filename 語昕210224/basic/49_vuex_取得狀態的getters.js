Vuex裡面有四個主要的元素:
 - state : 儲存狀態
 - mutations : 變更狀態
 ★ getters : 取得狀態
 - actions : 發出指令

 getters: 像是store裡面的computed

 //store.js
import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        tasks: [],
    },
    mutations: {
        
    },
    getters: {

    },
});
export default store;
==========
case study: tasks[] 內有那些有做?那些沒做?

//App.vue
<script>
    import {mapState} from 'Vuex';
    export default{
        computed: {
            ...mapState(['tasks']),
            taskNotDone(){
                return this.tasks.filter(task => !task.done).length;
                //如果只有App.vue要使用，寫在這裡就好了
                //如果很多組件要使用，就寫在store.js的getters裡面
            },
        },
    }
</script>

============
case study2: tasks[] 內有那些有做?那些沒做?
// 寫在store.js的getters裡面
// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        tasks: [],
    },
    mutations: {
        
    },
    getters: {
        taskNotDone(state){
            //return this.tasks.filter(task => !task.done).length;在這裡不能這樣寫，要寫成以下
            return state.tasks.filter(task => !task.done).length;
        }
    },
});
export default store;

// App.vue
<script>
    import {mapState,mapGetters} from 'Vuex';
    export default{
        computed: {
            ...mapState(['tasks']),
            ...mapGetters(['taskNotDone']),            
        },
    }
</script>

============
case study: 在getters裡面，有一個getters要用到另一個getters

// store.js
import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const store = new Vuex.Store({ 
    state: {
        tasks: [],
    },
    mutations: {
        
    },
    getters: {
        taskNotDone(state){
            return state.tasks.filter(task => !task.done).length;
        },
        //getter taskDone要用到getter taskNotDone
        taskDone(state,getters){
            return state.tasks.length - getters.taskNotDone;
        },
        //也可以return function
        taskWithID(state){
            return (id) => {
                return state.tasks.filter(task => task.id === id);
            };
            //也可以這樣寫
            return (id) => state.tasks.filter(task => task.id === id);            
        },
        //也可以這樣寫
        taskWithID: state => return (id) => state.tasks.filter(task => task.id === id),
    },
});
export default store;

// App.vue
<script>
    import {mapState,mapGetters} from 'Vuex';
    export default{
        computed: {
            ...mapState(['tasks']),
            ...mapGetters(['taskNotDone']),            
        },
        methods: {
            test(){
                this.taskWithID(10);
            },
        },
    }
</script>



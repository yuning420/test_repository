import Vue from 'vue'
//1.不修改main.js
// import Vuex, {Store} from 'vuex'

//2.修改main.js
import Vuex from 'vuex'

Vue.use(Vuex);

//1.不修改main.js
// const store = new Store({  //global store
//     state: {  //類似 new Vue() 裡面的data
//         count: 0,
//     },
//     mutations:{  //類似 new Vue() 裡面的methods
//         addCount(state){
//             state.count += 1;
//         },
//     }
// });

//2.修改main.js
const store = new Vuex.Store({  //差別在這裡
    state: {  
        count: 0,
    },
    mutations:{  
        addCount(state){
            state.count += 1;
        },
    }
});

export default store;

<template>
    <div>
        <button @click="addCount"> Add </button>
        <h1>{{count}}</h1>
    </div>
</template>
<script>
//1.不修改main.js
// import store from './store'
// export default {
//     methods: {
//         addCount(){
//             store.commit('addCount');
//         },
//     },
//     computed: {
//         count(){
//             return store.state.count;
//         },
//     },
// }

//2.修改main.js
export default {
    methods: {
        addCount(){
            this.store.commit('addCount');
        },
    },
    computed: {
        count(){
            return this.store.state.count;
        },
    },
}
</script>
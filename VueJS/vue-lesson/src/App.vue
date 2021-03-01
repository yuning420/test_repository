<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import About from './About.vue';
import Products from './Products.vue';
//有沒有加副檔名都可以，但還加上比較保險

import AboutHome from './AboutHome';
import AboutYou from './AboutYou';
import AboutMe from './AboutMe';

Vue.use(VueRouter);
//先vueRouter進來，這樣才可以接著使用


export default {
  router: new VueRouter({
    mode: 'history', // hash by default
    routes: [ //意思是: 要在哪裡render這個組件
      //設定固定路徑: http://localhost:8080/about 和 http://localhost:8080/products
      //並且顯示固定的組件About和Products
      {
        path: '/about', 
        component: About,
        children: [
          {path: '', component: AboutHome},
          {path: 'you', component: AboutYou},
          {path: 'me', component: AboutMe},
        ],
      },
      //建立連結路徑是/about(網址列)


      // {path: '/products', component: Products},
      // {path: '/products/:sn', //自訂名稱:sn, id, item,...
      {path: '/products/:sn?', //?後面可加可不加
      component: Products},
    ],
  }),
}
</script>

<template>
  <div>
    <div>
      <router-link to="/about">About</router-link> |
      <!-- link to 上方設定好的路徑 -->
      <router-link to="/products">Products</router-link>
    </div>
  
  <router-view></router-view>

  </div>

</template>
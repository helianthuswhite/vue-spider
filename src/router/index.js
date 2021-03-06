import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index/index';
import login from '@/components/login/login';
import market from '@/components/market/market';
import apidetail from '@/components/market/apidetail';
import aboutUs from '@/components/aboutUs/aboutUs';
import openSource from '@/components/openSource/openSource';
import console from '@/components/console/console';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login/:path',
      name: 'login',
      component: login
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    {
      path: '/apidetail',
      name: 'apidetail',
      component: apidetail
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/openSource',
      name: 'openSource',
      component: openSource
    },
    {
      path: '/console',
      name: 'console',
      component: console
    }
  ]
});

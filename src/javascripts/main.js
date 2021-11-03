import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import Vue from 'vue';
import vueApp from './vueApp.vue';

new Vue({
  el: '#vue-root',
  render: (h) => h(vueApp),
});

console.log('webpack!');
my();

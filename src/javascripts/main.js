import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import Vue from 'vue';
import vueApp from './vueApp.vue';

import add from './add.ts';

new Vue({
  el: '#vue-root',
  render: (h) => h(vueApp),
});

console.log(add(3, 9));
console.log('webpack!');
my();

import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
// import 'packages/theme-chalk/src/index.scss';
import './styles/indexs.scss';

Vue.use(Element);
// console.log('当前环境',Vue.prototype);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');

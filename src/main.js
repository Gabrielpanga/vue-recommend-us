import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import setupFirebase from './plugins/firebase';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

setupFirebase();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

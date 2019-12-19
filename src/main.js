import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false
firebase.initializeApp ({
  apiKey: "AIzaSyAvsC39Pau7ScnNw0o39aysHpgI8PKm_uQ",
    authDomain: "nastava-3ae81.firebaseapp.com",
    databaseURL: "https://nastava-3ae81.firebaseio.com",
    projectId: "nastava-3ae81",
    storageBucket: "nastava-3ae81.appspot.com",
    messagingSenderId: "49973605599",
    appId: "1:49973605599:web:761e904bd860d8460fe56a",
    measurementId: "G-69T10SP430"
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

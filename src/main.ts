import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  mounted () {
      if (!store.state.dataLoaded) {
      axios
        .get('https://robotrush.ru/fortest/')
        .then(response => ( this.$store.dispatch('SET_SHOP', response.data) ))
        .catch(err => { console.log(err) })
    }
    this.$store.dispatch('SET_CARD_LIST')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

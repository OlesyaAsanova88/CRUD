import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

new Vue({
   render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import titlePlugin from '@/utils/title.plugin'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective) // 1й параметр - название дерективы v-tooltip=""
Vue.component('Loader', Loader) // Глобальная регистрация компонента
Vue.component('Paginate', Paginate)

firebase.initializeApp({
    apiKey: "AIzaSyCOcyMbctWcxdnGF6hKxuxw1urbHFk51tk",
    authDomain: "stilet-crm.firebaseapp.com",
    databaseURL: "https://stilet-crm.firebaseio.com",
    projectId: "stilet-crm",
    storageBucket: "stilet-crm.appspot.com",
    messagingSenderId: "575223195368",
    appId: "1:575223195368:web:c34295d0402723cdf28b5d",
    measurementId: "G-T3ZKNSEKN4"
})

let app;
firebase.auth().onAuthStateChanged(()=>{
    if(!app){
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')
    }
})



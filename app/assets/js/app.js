import Vue from 'vue';
import '../css/style.scss';

import moment from 'moment-timezone';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment } });

import App from './components/App';

const app = new Vue({
    el: '#app',
    data: {
        moment
    },
    components: {
        App
    },
    render: h => h(App)
});
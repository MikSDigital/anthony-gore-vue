import Vue from 'vue';
import '../css/style.scss';

import store from './store';

import moment from 'moment-timezone';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment } });

import App from './components/App';

let events = [
    {description: 'Random event 1', date: moment()},
    {description: 'Random event 2', date: moment()},
    {description: 'Random event 3', date: moment('2019-11-19', 'YYYY-MM-DD')},
];

let initialState = Object.assign({}, store.state, { events });

console.log(initialState);

store.replaceState(initialState);

const app = new Vue({
    el: '#app',
    data: {
        moment
    },
    components: {
        App
    },
    store,
    render: h => h(App)
});
import Vue from 'vue';
import '../css/style.scss';

import store from './store';

import moment from 'moment-timezone';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment } });

import App from './components/App';

let events = window.__INITIAL_STATE__.map(event => {
    return {
        description: event.description,
        date: moment(event.date)
    }
});

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
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 5,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            {description: 'Random event 1', date: moment()},
            {description: 'Random event 2', date: moment()},
            {description: 'Random event 3', date: moment('2019-05-09', 'YYYY-MM-DD')},
        ]
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: moment()
            });
        }
    }
});

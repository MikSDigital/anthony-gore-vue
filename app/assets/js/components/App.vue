<template>
<div id="wrapper">

    <div>
        <div id='header'>
            <div>
                <h1>Vue.js Calendar</h1>
            </div>

            <div>
                <current-month></current-month>
            </div>
        </div>
    </div>

    <div id="day-bar">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
    </div>

   <div id="calendar">
       <div v-for="week in weeks" class="calendar-week">
           <calendar-day v-for="day in week" v-bind:day="day" v-bind:key="day.id"></calendar-day>
       </div>
   </div>

    <event-form></event-form>

</div>
</template>

<script>

    import CalendarDay from './CalendarDay.vue';
    import CurrentMonth from "./CurrentMonth";
    import EventForm from "./EventForm";

    export default {
       computed: {
           month() {
               return this.$store.state.currentMonth;
           },
           year() {
               return this.$store.state.currentYear;
           },
           days() {
               const SUNDAY = 0;
               const MONDAY = 1;

               // Generating all days in the current month
               let days = [];
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

               do {
                   days.push(currentDay);
                   currentDay = this.$moment(currentDay).add(1, 'days');
               } while ((currentDay.month() + 1) === this.month);

               // Add previous (padding) days to start
               currentDay = this.$moment(days[0]);

               if (currentDay.day() !== MONDAY) {
                   do {
                       currentDay = this.$moment(currentDay).subtract(1,'days');
                       days.unshift(currentDay);
                   } while (currentDay.day() !== MONDAY);
               }
               
                // Add padding days to the month end
               currentDay = this.$moment(days[days.length - 1]);

               if (currentDay.day() !== SUNDAY) {
                   do {
                       currentDay = this.$moment(currentDay).add(1,'days');
                       days.push(currentDay);
                   } while (currentDay.day() !== SUNDAY);
               }

               return days;
           },

           weeks() {
               let weeks    = [];
               let week     = [];

               for (let day of this.days) {
                   week.push(day);

                   if (week.length === 7) {
                       weeks.push(week);
                       week = [];
                   }
               }

               return weeks;
           }
       },
       components: {
           EventForm,
           CurrentMonth,
           CalendarDay
       }
   }
</script>
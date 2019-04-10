<template>
   <div>
       <div v-for="day in days">{{ day }}</div>
   </div>
</template>
<script>
   export default {
       data() {
          return {
              month: 4,
              year: 2019
            };
       },
       computed: {
           days() {
               const SUNDAY = 0;
               const MONDAY = 1;

               // Generating all days in the current month
               let days = [];
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

               do {
                   days.push(currentDay);
                   currentDay = this.$moment(currentDay).add(1, 'days');

                   console.log(currentDay);

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
           }
       }
   }
</script>
<style scoped>
</style>
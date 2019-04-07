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
               let days = [];
               let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

               do {
                   days.push(currentDay);
                   currentDay = this.$moment(currentDay).add(1, 'day');

                   console.log(currentDay);

               } while ((currentDay.month() + 1) === this.month);

               return days;
           }
       }
   }
</script>
<style scoped>
</style>
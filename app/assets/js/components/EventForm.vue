<template>
    <div id="event-form" :class="{ active:active }" :style="{ top:top, left:left }">
        <h4>Add an event</h4>
        <button class="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
    export default {
        name: "EventForm",
        computed: {
            top() {
                return `${this.$store.state.eventFormPosY}px`;
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`;
            },
            active() {
                return this.$store.state.eventFormActive;
            }
        },
        methods: {
            close() {
                this.$store.commit('eventFormActive', false);
            }
        }
    }
</script>

<style scoped>

</style>
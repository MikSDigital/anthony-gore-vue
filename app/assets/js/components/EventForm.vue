<template>
    <div id="event-form" :class="{ active:active }" :style="{ top:top, left:left }">
        <h4>Add an event</h4>
        <p>{{ date.format('dddd, MMM Do') }}</p>
        <div class="text">
            <input v-focus type="text" v-model="description" placeholder="Type something here..." @keyup.enter="create">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button class="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
    export default {
        name: "EventForm",
        data() {
            return {
                description: ''
            }
        },
        computed: {
            date() {
                return this.$store.state.eventFormDate;
            },
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
            },
            create() {
                if(this.description.length > 0) {
                    this.$store.dispatch('addEvent', this.description).then(_ => {
                        // close the form and clear description only if promise resolved, see video #162 and index.js , L56
                        this.description = '';
                        this.$store.commit('eventFormActive', false);
                    });
                }
            }
        },
        directives: {
            focus: {
                update(el) {
                    el.focus();
                }
            }
        }
    }
</script>

<style scoped>

</style>
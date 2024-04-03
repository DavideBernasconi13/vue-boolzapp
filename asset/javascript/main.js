import { contacts } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts
        }
    },
    methods: {

    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app'); 
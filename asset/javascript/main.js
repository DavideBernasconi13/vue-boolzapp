import { contacts } from "./data.js";
import Picker from './emoji-picker.js';

const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            msgText: '',
            searchText: '',
            showEmoji: false,
        }
    },
    methods: {
        changeContact(contact) {
            this.activeContactId = contact;
        },
        createMessage(msg, status) {
            const newMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy | HH:mm:ss'),
                message: msg,
                status: status
            }
            return newMessage;
        },
        onSelectEmoji(emoji) {
            console.log(emoji)
            this.msgText += emoji.i;
            /*
              // result
              { 
                  i: "😚", 
                  n: ["kissing face"], 
                  r: "1f61a", // with skin tone
                  t: "neutral", // skin tone
                  u: "1f61a" // without tone
              }
              */
        },
        sendMessage() {
            const newMessage = this.createMessage(this.msgText, 'sent');
            this.activeContact.messages.push(newMessage);
            this.msgText = '';
            setTimeout(() => {
                const newMessage = this.createMessage('ok', 'received')
                this.activeContact.messages.push(newMessage);
            }, 1000)
        }
    },
    computed: {
        activeContact() {
            return this.contacts.find((el) => el.id === this.activeContactId)
        },
        filteredContact() {
            return this.contacts.filter((el) => el.name.toLowerCase().includes(this.searchText.toLowerCase()))
        }

    },
    mounted() {
        console.log(this.contacts);
        console.log(this.showEmoji); 

    }
}).component('Picker', Picker).mount('#app'); 
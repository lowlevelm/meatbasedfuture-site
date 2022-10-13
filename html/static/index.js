import axios from 'https://cdn.skypack.dev/axios@0?min'
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const hero = createApp({
    data() {
        return {
            data: {}
        }
    },
    mounted() {
        axios
            .get('images.json')
            .then((response) => {
                let randIndex = Math.floor(Math.random() * response.data.length);
                this.data = response.data[randIndex]
            })
    }
})

hero.mount('#hero-wrapper')

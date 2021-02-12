const app = {
    data() {
        return {      
            images: [{url: './images/iris.jpg', alt: 'iris',like:false},
                    {url: './images/hydrangea.jpg', alt: 'hydrangea',like:false},
                    {url: './images/daisy.jpg', alt: 'daisy',like:false},
                    {url: './images/sunflower.jpg', alt: 'sunflower',like:false},
                    {url: './images/lily.jpg', alt: 'lily',like:false},
                    {url: './images/rose.jpg', alt: 'rose',like:false}
                    ],
            tasks: ['Iris','Hydrangea','Daisy','Sun Flower','Lily','Rose']

        }
    },
    methods: {
        toggleLike(index) {
            this.images[index].like = !this.images[index].like
        }
    },
    computed: {
        countImages() {
            return this.images.filter(t => !t.done).length
        }
    }
}
Vue.createApp(app).mount('#app')
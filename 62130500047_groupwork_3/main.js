const app = {
    data() {
        return {      
            images: [{url: './images/iris.jpg', alt: 'Iris',like:false},
                    {url: './images/hydrangea.jpg', alt: 'Hydrangea',like:false},
                    {url: './images/daisy.jpg', alt: 'Daisy',like:false},
                    {url: './images/sunflower.jpg', alt: 'Sunflower',like:false},
                    {url: './images/lily.jpg', alt: 'Lily',like:false},
                    {url: './images/rose.jpg', alt: 'Rose',like:false}
                    ]
        }
    },
    methods: {
        toggleLike(index) {
            this.images[index].like = !this.images[index].like
        }
    },
    computed: {
        countImages() {
            return this.images.length
        },
        countLike() {
            return this.images.filter(l => l.like).length
        }
    }
}
Vue.createApp(app).mount('#app')
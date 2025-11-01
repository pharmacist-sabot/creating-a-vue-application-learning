import { createApp } from 'vue'
import NewsWidget from '../components/NewsWidget.vue'

const newsApp = createApp(NewsWidget)
newsApp.mount('#news-widget')

import { createApp } from 'vue'
import CounterWidget from '../components/CounterWidget.vue'

const counterApp = createApp(CounterWidget)
counterApp.mount('#counter-widget')

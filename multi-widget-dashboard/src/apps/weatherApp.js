import { createApp } from 'vue'
import WeatherWidget from '../components/WeatherWidget.vue'

const weatherApp = createApp(WeatherWidget)

// ตั้ง error handler เฉพาะแอปนี้
weatherApp.config.errorHandler = (err) => {
  console.error('Weather widget error:', err)
}

weatherApp.mount('#weather-widget')

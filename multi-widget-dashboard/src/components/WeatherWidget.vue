<template>
    <div>
        <h2>Weather Widget</h2>
        <p>เมือง: {{ city }}</p>
        <p>อุณหภูมิ: {{ temperature }} °C</p>
        <button @click="toggleUnit">
            แสดงเป็น {{ isCelsius ? '°F' : '°C' }}
        </button>
        <p>แปลงแล้ว: {{ convertedTemperature }}°{{ isCelsius ? 'F' : 'C' }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const city = ref('Bangkok')
const temperature = ref(32)
const isCelsius = ref(true)

const convertedTemperature = computed(() => {
    return isCelsius.value
        ? Math.round((temperature.value * 9) / 5 + 32)
        : Math.round(((temperature.value - 32) * 5) / 9)
})

const toggleUnit = () => {
    isCelsius.value = !isCelsius.value
}
</script>

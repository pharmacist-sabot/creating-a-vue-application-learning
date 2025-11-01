<template>
    <div>
        <h2>Breaking News</h2>
        <ul>
            <li v-for="item in news" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
        <button @click="refresh">รีเฟรชข่าว</button>
        <p v-if="lastUpdated">อัปเดตล่าสุด: {{ lastUpdated }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const news = ref([
    { id: 1, title: 'Vue 3.4 ออกแล้ว!' },
    { id: 2, title: 'เทคนิคจัดการสถานะใน Composition API' }
])

const lastUpdated = ref('')

const refresh = () => {
    news.value = [
        { id: Date.now(), title: 'ข่าวใหม่ ' + new Date().toLocaleTimeString() }
    ]
    lastUpdated.value = new Date().toLocaleTimeString()
}
</script>

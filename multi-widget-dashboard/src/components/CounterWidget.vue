<template>
    <div>
        <h2>Counter Widget</h2>
        <p>Count: {{ count }}</p>
        <button @click="increment">เพิ่ม</button>
        <button @click="decrement">ลด</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => count.value++
const decrement = () => count.value--
</script>

<script setup lang="ts">
import { ref , onMounted} from 'vue'
import Event from '@/types/Event'
const event = ref<Event>(null)
onMounted (() =>{
    // fetch event (by and) and set local event data
})
</script>
<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.data }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
<template>
    <div>
      <h1>Product Page</h1>
      <p>Count: {{ count }}</p>
      <button @click="increment">Artır</button>
      <button @click="decrement">Azalt</button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useCounterStore } from '@/store/app'
  
  export default {
    name: 'Products',
    setup() {
      const counterStore = useCounterStore()
  
      const increment = () => {
        counterStore.increment()
      }
  
      const decrement = () => {
        counterStore.decrement()
      }
  
      // Store'daki count değerini burada bir computed property ile alıyoruz.
      const count = computed(() => counterStore.count)
  
      return {
        count,
        increment,
        decrement,
      }
    },
  }
  </script>
  
  <style scoped>
  </style>
  
<template>
    <div>
      <h1>Products</h1>
      <div>
        <p>Count: {{ counter }}</p>
        <button style="border: 1px solid black; margin-right: 2px;" @click="increment">Increase</button>
        <button style="border: 1px solid black; margin-left: 2px;" @click="decrement">Decrease</button>
      </div>
    </div>
  </template>
  
  <script>
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
  
      return {
        counter: counterStore.count,
        increment,
        decrement,
      }
    },
  }
  </script>
  
  <style></style>
  
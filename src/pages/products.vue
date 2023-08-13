<template>
  <div>
    <h1>Product Page</h1>
    <div class="count-section">
      <div class="count-container" v-for="(item, index) in countItems" :key="index">
        <img :src="item.imageSrc" :alt="'Count ' + (index + 1) + ' Image'" style="height: 150px;" />
        <p>Sepet: {{ item.count }}</p>
        <button @click="incrementCount(index)">Artır</button>
        <button @click="decrementCount(index)" v-if="shouldShowDecrementButton(item.count)">Azalt</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useCounterStore } from '@/store/app'

export default {
  name: 'Products',
  setup() {
    const counterStore = useCounterStore()

    const countItems = [
      { imageSrc: 'https://www.pngmart.com/files/5/Red-Apple-PNG-Picture.png', count: computed(() => counterStore.count1) },
      { imageSrc: 'https://pngfre.com/wp-content/uploads/peach-png-image-from-pngfre-33-1024x815.png', count: computed(() => counterStore.count2) },
      { imageSrc: 'https://w7.pngwing.com/pngs/312/397/png-transparent-watermelon-fruit-flavor-peeler-watermelon-natural-foods-food-sweetness.png', count: computed(() => counterStore.count3) },
      { imageSrc: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png', count: computed(() => counterStore.count4) },
      { imageSrc: 'https://freepngimg.com/thumb/strawberry/23418-7-strawberry-transparent-background.png', count: computed(() => counterStore.count5) },
      // Diğer ürünler buraya eklenebilir
    ]

    const incrementCount = (index) => {
      counterStore['incrementCount' + (index + 1)]()
    }

    const decrementCount = (index) => {
      counterStore['decrementCount' + (index + 1)]()
    }

    const shouldShowDecrementButton = (count) => count.value > 0

    return {
      countItems,
      incrementCount,
      decrementCount,
      shouldShowDecrementButton,
    }
  },
}
</script>

<style scoped>
.count-section {
  display: flex;
  justify-content: space-between;
}

.count-container {
  margin: 10px;
  text-align: center;
}
</style>


import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
  }),
  actions: {
    incrementCount1() {
      this.count1++
    },
    decrementCount1() {
      this.count1--
    },
    incrementCount2() {
      this.count2++
    },
    decrementCount2() {
      this.count2--
    },
    incrementCount3() {
      this.count3++
    },
    decrementCount3() {
      this.count3--
    },
    incrementCount4() {
      this.count4++
    },
    decrementCount4() {
      this.count4--
    },
    incrementCount5() {
      this.count5++
    },
    decrementCount5() {
      this.count5--
    },
  },
})



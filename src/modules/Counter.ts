import { ref, Ref } from 'vue'

export interface Counter {
    count: Ref<number>
    increment: () => {}
}
  
export function getCounter(num: number): Counter {
    const count = ref(num)
    const increment = () => count.value++
    return {count, increment}
}

<template>
  <div>
    <Table />
  </div>
</template>

<script lang="ts">
  import Vue, { defineComponent, computed, ref } from 'vue'
  import { useStore } from '@/store/store'
  import { MutationTypes } from '../store/mutation-types'
  import Table from '@/components/table/Table.vue'

  export default defineComponent({
    name: 'DiagramView',
    components: {
      Table,
    },
    setup() {
      // const store = useStore()
      // const counter = computed(() => store.state.counter)
      // const doubledCounter = computed(() => store.getters.doubledCounter)
      // const newNumb = ref(store.state.counter)
      // function resetCounter(num: number) {
      //   store.commit(MutationTypes.SET_COUNTER, num)
      // }
      // return {
      //   counter,
      //   doubledCounter,
      //   resetCounter,
      //   newNumb,
      // }
    },
  })
</script>

<style lang="scss" scoped></style>

<template>
  <div>f</div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@/store/store'
  import { MutationTypes } from '@/store/mutation-types'
  import TableRowModel from '@/models/TableRowModel'

  export default defineComponent({
    name: 'Table',
    setup() {
      const store = useStore()
      const table = computed(() => store.state.table)

      let matrix: any[][] = []
      for (let i = 0; i < 9; i++) {
        matrix[i] = []
        for (let j = 0; j < 9; j++) {
          matrix[i][j] = null
        }
      }
    },
  })
</script>

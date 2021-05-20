<template>
  <div>
    <table-row v-for="(row, index) in table" :key="index" :row="row" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@/store/store'
  import { MutationTypes } from '@/store/mutation-types'
  import TableRowModel from '@/models/TableRowModel'
  import TableCellModel from '@/models/TableCellModel'
  import TableRow from './TableRow.vue'

  export default defineComponent({
    name: 'Table',
    components: { TableRow },
    setup() {
      const store = useStore()
      const table = computed(() => store.state.table)

      let matrix: Array<TableRowModel> = []
      for (let i = 0; i < 9; i++) {
        let row: TableRowModel = {
          colIndex: i,
          data: [],
        }
        for (let j = 0; j < 9; j++) {
          let cell: TableCellModel = {
            rowIndex: j,
            colIndex: i,
            value: 0,
          }
          row.data.push(cell)
        }
        matrix.push(row)
      }
      store.commit(MutationTypes.SET_TABLE, matrix)
      return {
        table,
      }
    },
  })
</script>

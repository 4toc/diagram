<template>
  <div class="table-cell">
    <input v-model="inputField" @change="changeField" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from '@/store/store'
  import { MutationTypes } from '@/store/mutation-types'
  import TableCellModel from '@/models/TableCellModel'

  export default defineComponent({
    name: 'TableCell',
    props: {
      cell: Object as () => TableCellModel,
    },
    setup(props) {
      const store = useStore()

      const inputField = ref(props.cell.value)

      const changeField = () => {
        store.commit(MutationTypes.SET_CELL, {
          row: props.cell.rowIndex,
          col: props.cell.colIndex,
          value: inputField.value,
        })
      }

      return {
        inputField,
        changeField,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .table-cell {
    input {
      min-width: 40px;
      padding: 5px;
      width: 70px;
      height: 100%;
      color: #111;
      white-space: nowrap;
      outline: none;
      border: 1px solid #e2e3e3;
      margin: 0;
      padding: 0 5px;
    }
  }
</style>

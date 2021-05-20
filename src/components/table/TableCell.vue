<template>
  <div class="table-cell">{{ cell.value }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TableCellModel from '@/models/TableCellModel'

  export default defineComponent({
    name: 'TableCell',
    props: {
      cell: Object as () => TableCellModel,
    },
  })
</script>

<style lang="scss" scoped>
  .table-cell {
    min-width: 40px;
    padding: 5px;
    width: 100px;
    height: 100%;
    border: 1px solid #e2e3e3;
    border-top: 0;
    border-left: 0;
    color: #111;
    white-space: nowrap;
    outline: none;
  }
</style>

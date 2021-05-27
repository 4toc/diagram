<template>
  <div class="table-row">
    <table-cell v-for="cell in row.data" :key="cell.rowIndex" :cell="cell" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TableCell from './TableCell.vue'
  import TableRowModel from '@/models/TableRowModel'

  export default defineComponent({
    name: 'TableRow',
    components: { TableCell },
    props: {
      row: Object as () => TableRowModel,
    },
  })
</script>

<style lang="scss" scoped>
  .table-row {
    display: flex;
    flex-direction: row;
    height: 30px;
  }
</style>

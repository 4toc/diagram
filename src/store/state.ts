import TableRowModel from '@/models/TableRowModel'

export const state = {
  counter: 0,
  table: [] as Array<TableRowModel>,
}

export type State = typeof state

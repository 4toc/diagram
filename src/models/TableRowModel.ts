import TableCellModel from './TableCellModel'

export default interface TableRowModel {
  rowIndex: number
  data: Array<TableCellModel>
}

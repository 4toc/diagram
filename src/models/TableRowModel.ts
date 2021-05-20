import TableCellModel from './TableCellModel'

export default interface TableRowModel {
  rowIndex: number
  colIndex: number
  data: Array<TableCellModel>
}

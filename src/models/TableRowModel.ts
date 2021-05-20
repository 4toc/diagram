import TableCellModel from './TableCellModel'

export default interface TableRowModel {
  colIndex: number
  data: Array<TableCellModel>
}

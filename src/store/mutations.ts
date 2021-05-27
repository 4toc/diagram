import TableRowModel from '@/models/TableRowModel'
import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void
  [MutationTypes.SET_TABLE](state: S, payload: Array<TableRowModel>): void
  [MutationTypes.SET_CELL](
    state: S,
    payload: {
      row: number
      col: number
      value: number
    }
  ): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.counter = payload
  },
  [MutationTypes.SET_TABLE](state, payload: Array<TableRowModel>) {
    state.table = payload
  },
  [MutationTypes.SET_CELL](
    state,
    payload: { row: number; col: number; value: number }
  ) {
    state.table[payload.row].data[payload.col].value = payload.value
  },
}

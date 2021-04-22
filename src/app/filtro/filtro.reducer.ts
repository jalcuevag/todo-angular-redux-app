import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export var initialState: filtrosValidos;

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state: filtrosValidos, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}

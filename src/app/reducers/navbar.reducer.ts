import { Action } from '@ngrx/store';

export const NAVBAR_UPDATE = 'NAVBAR_UPDATE';
export const NAVBAR_RESET = 'NAVBAR_RESET';

export interface InavbarState {
  backButton: boolean;
  setTitle: string;
}

const initialState: InavbarState = {
  backButton: false,
  setTitle: ''
};


export function navbarReducer(state = initialState, action: Action) {
  switch (action.type) {
    case NAVBAR_UPDATE:
      return Object.assign({}, state, action.payload);

    case NAVBAR_RESET:
      return initialState;

    default:
      return state;
  }
}

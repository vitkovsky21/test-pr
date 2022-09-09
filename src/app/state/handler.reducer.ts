import { createReducer, on } from "@ngrx/store";
import { HandleActions } from "./handler.actions";

export interface State {
    data: string;
}

const initialState: State = {
    data: ''
};

export const dataReducer = createReducer(
    initialState,
    on(HandleActions.sendData, (state, { data }) => ({
        ...state,
        data: data
    }))
);
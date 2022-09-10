import { createReducer, on } from "@ngrx/store";
import { HandleActions } from "./handler.actions";

export interface State {
    data: string;
    changeData: string;
}

const initialState: State = {
    data: '',
    changeData: ''
};

export const dataReducer = createReducer(
    initialState,
    on(HandleActions.sendData, (state, { data }) => ({
        ...state,
        data: data
    })),
    on(HandleActions.changeData, (state, { changeData }) => ({
        ...state,
        changeData: changeData
    }))
);
import { createAction, props } from "@ngrx/store";

export namespace HandleActions {
    export const sendData = createAction(
        "SEND_DATA",
        props<{ data: string }>()
    )
    export const changeData = createAction(
        "CHANGE_DATA",
        props<{ changeData: string }>()
    )
}
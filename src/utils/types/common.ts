import { ThunkAction } from "redux-thunk";
import { AppState } from "../../redux/reducers/reducers";
import { Action } from "redux";

export type Nullable<T> = T | null;
export type ThunkType<T extends Action> = ThunkAction<Promise<void>, AppState, unknown, T>;

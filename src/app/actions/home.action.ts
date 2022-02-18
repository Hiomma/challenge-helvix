import {createAction, props} from "@ngrx/store";
import {Movies} from "../models/movies.model";

export const GET_MOVIES = createAction('[Home] Get Movies')
export const SET_MOVIES = createAction('[Home] Set Movies', props<{ payload: Movies[] }>())
export const SUCCESS_GET_MOVIES = createAction('[Home] [Success] Get Movies')


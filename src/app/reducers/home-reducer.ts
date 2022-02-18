import {Action, createReducer, on} from '@ngrx/store';
import {GET_MOVIES, SET_MOVIES} from "../actions/home.action";
import {Movies} from "../models/movies.model";

export interface AppState {
    movies: Movies[];
}

export const initialState: AppState = {
    movies: []
}

export const selectMovies = (state: AppState) => state;

export const homeReducer = createReducer(
    initialState,
    on(
        SET_MOVIES, (state, {payload}) => {
            return {
                ...state,
                movies: payload
            }
        }
    )
);

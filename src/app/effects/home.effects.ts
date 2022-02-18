import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../services/home.service";
import {map, of, switchMap, tap} from "rxjs";
import {GET_MOVIES, SET_MOVIES, SUCCESS_GET_MOVIES} from "../actions/home.action";
import {AppState} from "../reducers/home-reducer";
import {Store} from "@ngrx/store";
import {Movies} from "../models/movies.model";

@Injectable({
    providedIn: 'root'
})
export class HomeEffects {
    constructor(private actions$: Actions, private homeService: HomeService, private store: Store<{ home: AppState }>) {
    }

    getMovies = createEffect(() => this.actions$.pipe(
        ofType(GET_MOVIES),
        switchMap(() => this.homeService.getMovies()),
        tap((movies: Movies[]) => this.store.dispatch(SET_MOVIES({payload: movies}))),
        map(() => SUCCESS_GET_MOVIES())
    ));
}

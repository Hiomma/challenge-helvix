import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Movies} from "../models/movies.model";
import {Observable} from "rxjs";
import {AppState} from "../reducers/home-reducer";
import {GET_MOVIES} from "../actions/home.action";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    moviesList$!: Observable<{ movies: Movies[] }>;

    movies: Movies[] = []

    constructor(private store: Store<{ movies: AppState }>) {
    }

    ngOnInit(): void {
        this.store.dispatch(GET_MOVIES())

        this.moviesList$ = this.store.select(state => state.movies)
        this.moviesList$.subscribe(data => {
            this.movies = data.movies;
        })
    }

}

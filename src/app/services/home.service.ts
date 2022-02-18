import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Movies} from "../models/movies.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) {
    }

    getMovies() {
        return this.http.get<Movies[]>(environment.apiUrl + 'movies', {
            headers: {
                'x-api-key': environment.apiKey
            }
        });
    }
}

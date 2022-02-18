export class Movies{
    nm_movie: string;
    dt_release: string;
    cd_movie: number;
    nr_stars: number
    vl_path: string

    constructor(nm_movie: string, dt_release: string, cd_movie: number, nr_start: number, vl_path: string){
        this.nm_movie = nm_movie;
        this.dt_release = dt_release;
        this.cd_movie = cd_movie;
        this.nr_stars = nr_start;
        this.vl_path = vl_path;
    }
}


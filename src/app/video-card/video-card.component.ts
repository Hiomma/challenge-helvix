import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Movies} from "../models/movies.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'video-card',
    templateUrl: './video-card.component.html',
    styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnChanges {

    @Input() b_Release = true;

    @Input() movie!: Movies;

    background!: any

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["movie"].currentValue) {
            this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${this.movie.vl_path})`);
        }
    }

}

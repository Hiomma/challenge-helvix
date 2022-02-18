import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {VideoCardModule} from "../video-card/video-card.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        VideoCardModule
    ]
})
export class HomeModule {
}

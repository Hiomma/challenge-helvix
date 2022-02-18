import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {homeReducer} from "./reducers/home-reducer";
import {VideoCardComponent} from './video-card/video-card.component';
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {HomeEffects} from "./effects/home.effects";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        EffectsModule.forRoot([HomeEffects]),
        StoreModule.forRoot({movies: homeReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { BoardComponent } from './board/board.component';
import { CiastkoComponent } from './ciastko/ciastko.component';

@NgModule({
    declarations: [
        AppComponent,
        CiastkoComponent,
        StoreComponent,
        BoardComponent,
    ],
    imports: [
        BrowserModule,
        ButtonsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

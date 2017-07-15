import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { CookieContainerComponent } from './cookie-container/cookie-container.component';
import { ClickService } from './services/click.service';
import { StoreComponent } from './store/store.component';
import { BoardComponent } from './board/board.component';
import { CiastkoComponent } from './ciastko/ciastko.component';
import { StatsComponent } from './stats/stats.component';
import { CoockieContainerStatsComponent } from './coockie-container-stats/coockie-container-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CiastkoComponent,
    CookieContainerComponent,
    StoreComponent,
    BoardComponent,
    CoockieContainerStatsComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot()
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

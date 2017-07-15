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
import { ActionItemComponent } from './store/action-item/action-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CiastkoComponent,
    CookieContainerComponent,
    StoreComponent,
    BoardComponent,
    CoockieContainerStatsComponent,    ActionItemComponent,  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot()
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

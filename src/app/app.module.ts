import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { UserItem } from './user-item/user-item';

import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChartsModule } from 'ng2-charts';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { GamesComponent } from './games/games.component';
import { GamesItemsComponent } from './games-items/games-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    UserDashboard,
    UserItem,
    UserDetailsComponent,
    LoadingSpinnerComponent,
    GamesComponent,
    GamesItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/splash-page',
        pathMatch: 'full'
      },
      {
        path: 'splash-page',
        component: SplashPageComponent
      },
      {
        path:'users',
        component: UserDetailsComponent
      },
      {
        path:'games',
        component: GamesComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

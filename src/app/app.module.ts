import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookshelvesComponent } from './bokshelves/bookshelves.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookshelvesComponent,
    ChallengesComponent,
    ChallengeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ListComponent},
  {path: 'add', component: CreateChallengeComponent},
  {path: 'challenge/:id', component: ChallengeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateChallengeComponent,
    ChallengeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './child-one/empty-route/empty-route.component';
import { childOneTestComponent } from './child-one/child-one-test/child-one-test.component';

const routes: Routes = [
  {
    path: 'child-one',
    component: EmptyRouteComponent
  },
  {
    path:'child-one/test',
    component: childOneTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppRoutingModule { }

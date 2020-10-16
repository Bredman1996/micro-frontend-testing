import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { childOneTestComponent } from './child-one/child-one-test/child-one-test.component';
import { EmptyRouteComponent } from './child-one/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    childOneTestComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('child-one constructor')
    console.log(localStorage.getItem('test'));
  }
}

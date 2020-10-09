import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PrimaryButtonComponent } from './buttons/primary/primary-button.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    PrimaryButtonComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector){
    var primaryButton = createCustomElement(PrimaryButtonComponent, {injector: this.injector});
    customElements.define('primary-button', primaryButton);
  }

  ngDoBootstrap(){

  }
 }

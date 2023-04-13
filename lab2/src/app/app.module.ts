import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './Components/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

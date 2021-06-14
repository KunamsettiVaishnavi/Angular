import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { HighlightPipe } from './highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AllStudentsComponent,
    HighlightPipe,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

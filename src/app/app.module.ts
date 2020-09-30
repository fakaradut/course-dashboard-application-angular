import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module'
import { KnowledgeModule} from './knowledge/knowledge.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    KnowledgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

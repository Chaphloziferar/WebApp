import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesReasonComponent } from './components/sales-reason/sales-reason.component';
import { HttpClientModule } from '@angular/common/http';
import { SalesReasonService } from './services/sales-reason.service';

@NgModule({
  declarations: [
    AppComponent,
    SalesReasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, SalesReasonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

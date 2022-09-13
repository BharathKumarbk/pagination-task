import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    VirtualScrollComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent, PaginationComponent, VirtualScrollComponent, NavbarComponent,]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilizersPortraitComponent } from './utilizers-portrait/utilizers-portrait.component';
import { DateCountPipe } from './date-count.pipe';
import { PortraitService } from 'src/app/portrait.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { TheUserComponent } from './the-user/the-user.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilizersPortraitComponent,
    DateCountPipe,
    TheUserComponent,
    DateCountPipe,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [PortraitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

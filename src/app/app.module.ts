import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { appRoutes } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfCaseComponent } from './portf-case/portf-case.component';
import { PortfolioService } from './portfolio.service';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbCarouselModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    PortfolioComponent,
    NavbarComponent,
    PortfCaseComponent
  ],
  providers: [ PortfolioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
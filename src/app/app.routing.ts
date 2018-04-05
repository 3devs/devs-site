import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfCaseComponent } from './portf-case/portf-case.component';

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
        children: [
            {
                path: '',
                component: PortfolioComponent
            },
            {
                path: ':id',
                component: PortfCaseComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
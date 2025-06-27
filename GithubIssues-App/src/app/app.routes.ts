import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'issue/:number',
        loadComponent: () => import('./features/issues/pages/issue/issue-page.component'),
    },
    {
        path: 'issues',
        loadComponent: () => import('./features/issues/pages/issues-list/issues-list-page.component'),
    },
    {
        path: '**',
        redirectTo: 'issues',
    },
];

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideMarkdown(),
    provideHttpClient(withFetch()),
    provideTanStackQuery(new QueryClient(), withDevtools()),
  ]
};


import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './app/ErrorBoundary';
import { ThemeProvider } from './app/providers/Theme';
import { useAuthStore } from './app/store/auth/auth.store';
import { routeTree } from './routeTree.gen';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/shared/styles/global.css';
import '../src/shared/styles/themes.css';
import '../src/shared/styles/tokens.css';
import { GlobalLoader } from './widgets/GlobalLoader/GlobalLoader';



async function bootstrap() {
  await useAuthStore.getState().init()

  const router = createRouter({ routeTree })

  const queryClient = new QueryClient()


  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <GlobalLoader />
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>,
  )
}

bootstrap();


import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './app/ErrorBoundary';
import { ThemeProvider } from './app/providers/Theme';
import { useAuthStore } from './app/store/auth/auth.store';
import { routeTree } from './routeTree.gen';

import '../src/shared/styles/global.css';
import '../src/shared/styles/themes.css';
import '../src/shared/styles/tokens.css';



async function bootstrap() {
  await useAuthStore.getState().init()

  const router = createRouter({ routeTree })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ErrorBoundary>
    </StrictMode>,
  )
}

bootstrap();

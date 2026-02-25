import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './app/ErrorBoundary';
import { ThemeProvider } from './app/providers/Theme';
import { useAuthStore } from './app/store/auth/auth.store';
import './app/styles/globals.css';
import './app/styles/themes.css';
import './app/styles/tokens.css';
import { routeTree } from './routeTree.gen';



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

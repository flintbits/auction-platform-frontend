import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './app/context/ThemeProvider';
import ErrorBoundary from './app/ErrorBoundary';
import { authStore } from './features/auth/auth.store';
import { routeTree } from './routeTree.gen';
import './styles/globals.css';
import './styles/themes.css';
import './styles/tokens.css';


async function bootstrap() {
  await authStore.init()

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

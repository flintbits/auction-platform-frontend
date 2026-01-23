import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import ErrorBoundary from './app/ErrorBoundary'

import './styles/tokens.css';
import './styles/themes.css';
import './styles/globals.css';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './app/router';
import { ThemeProvider } from './app/context/ThemeProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
)


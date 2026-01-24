import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './app/ErrorBoundary'

import './styles/tokens.css';
import './styles/themes.css';
import './styles/globals.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from './app/context/ThemeProvider';


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


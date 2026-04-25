import React from 'react'
import ReactDOM from 'react-dom/client'

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  createRootRoute, createRoute, createRouter, RouterProvider, Outlet
} from '@tanstack/react-router'

// MUI Imports
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Style & Font Imports
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Index from './pages/Index'
import About from './pages/About'
import { Sidebar } from './components/navigation/Sidebar'
import { BottomNav } from './components/navigation/BottomNav'

const queryClient = new QueryClient();

// 1. Create a Theme (Custom colors can be added here)
const theme = createTheme({
  palette: {
    background: {
      default: '#fdfdfd', // Slight off-white background
    },
  },
})

// 2. The Root Route (The Layout)
const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'scroll',
          }}
        >
          <Outlet />
        </Box>
        <BottomNav />
      </Box>
      {/* DevTools are best placed inside the Root component */} 
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})
/* prettier-ignore */
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute
])
/* prettier-ignore-end */
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})

// 6. Register Router for Type Safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 7. Render App
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}


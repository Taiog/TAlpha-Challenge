import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { configRouter } from './routes/Router'
import { theme } from './themes/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={configRouter} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
